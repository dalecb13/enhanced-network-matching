import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatchStatus } from "../types/enums";
import { $Enums } from "@prisma/client";

@Injectable()
export class MatchingService {
  constructor(private prisma: PrismaService) {}

  /**
   * Check if two users can be matched
   */
  async canMatchUsers(user1Id: string, user2Id: string): Promise<boolean> {
    // Prevent self-matching
    if (user1Id === user2Id) {
      return false;
    }

    // Check if both users are active
    const [user1, user2] = await Promise.all([
      this.prisma.user.findUnique({ where: { id: user1Id } }),
      this.prisma.user.findUnique({ where: { id: user2Id } }),
    ]);

    if (!user1 || !user2) {
      return false;
    }

    if (!user1.isActive || !user2.isActive) {
      return false;
    }

    // Check for existing matches
    const existingMatch = await this.prisma.match.findFirst({
      where: {
        OR: [
          { user1Id, user2Id },
          { user1Id: user2Id, user2Id: user1Id },
        ],
        status: {
          in: [MatchStatus.PENDING, MatchStatus.ACCEPTED],
        },
      },
    });

    if (existingMatch) {
      return false;
    }

    // Check cooldown period
    const isInCooldown = await this.checkCooldownPeriod(user1Id, user2Id);
    if (isInCooldown) {
      return false;
    }

    return true;
  }

  /**
   * Check if users are in cooldown period
   */
  async checkCooldownPeriod(user1Id: string, user2Id: string): Promise<boolean> {
    const now = new Date();

    // Check both directions (user1-user2 and user2-user1)
    const matchHistory = await this.prisma.matchHistory.findMany({
      where: {
        OR: [
          { user1Id, user2Id },
          { user1Id: user2Id, user2Id: user1Id },
        ],
      },
      orderBy: { cooldownUntil: "desc" },
    });

    if (matchHistory.length === 0) {
      return false; // No previous matches, no cooldown
    }

    // Check if any cooldown is still active
    const activeCooldown = matchHistory.find(
      (history) => history.cooldownUntil > now,
    );

    return activeCooldown !== undefined;
  }

  /**
   * Get the cooldown until date for a user pair
   */
  async getCooldownUntil(
    user1Id: string,
    user2Id: string,
  ): Promise<Date | null> {
    const matchHistory = await this.prisma.matchHistory.findMany({
      where: {
        OR: [
          { user1Id, user2Id },
          { user1Id: user2Id, user2Id: user1Id },
        ],
      },
      orderBy: { cooldownUntil: "desc" },
    });

    if (matchHistory.length === 0) {
      return null;
    }

    const now = new Date();
    const activeCooldown = matchHistory.find(
      (history) => history.cooldownUntil > now,
    );

    return activeCooldown?.cooldownUntil ?? null;
  }

  /**
   * Validate user is active
   */
  async validateUserState(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    return user?.isActive ?? false;
  }

  /**
   * Get list of user IDs to exclude from matching
   */
  async getExcludedUserIds(userId: string): Promise<string[]> {
    const excluded: string[] = [];

    // Add self
    excluded.push(userId);

    // Add inactive users
    const inactiveUsers = await this.prisma.user.findMany({
      where: { isActive: false },
      select: { id: true },
    });
    excluded.push(...inactiveUsers.map((u) => u.id));

    // Add users in cooldown
    const now = new Date();
    const activeCooldowns = await this.prisma.matchHistory.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
        cooldownUntil: { gt: now },
      },
    });

    for (const history of activeCooldowns) {
      const otherUserId =
        history.user1Id === userId ? history.user2Id : history.user1Id;
      if (!excluded.includes(otherUserId)) {
        excluded.push(otherUserId);
      }
    }

    // Add users with existing pending/accepted matches
    const existingMatches = await this.prisma.match.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
        status: {
          in: [MatchStatus.PENDING, MatchStatus.ACCEPTED],
        },
      },
    });

    for (const match of existingMatches) {
      const otherUserId =
        match.user1Id === userId ? match.user2Id : match.user1Id;
      if (!excluded.includes(otherUserId)) {
        excluded.push(otherUserId);
      }
    }

    return Array.from(new Set(excluded)); // Remove duplicates
  }

  /**
   * Create a match between two users with validation
   */
  async createMatch(
    user1Id: string,
    user2Id: string,
    externalMatchData?: {
      externalMatchId?: string;
      matchScore?: number;
      matchReason?: string;
    },
  ) {
    // Validate users can be matched
    const canMatch = await this.canMatchUsers(user1Id, user2Id);
    if (!canMatch) {
      throw new BadRequestException(
        "Users cannot be matched. Check cooldown period, user status, or existing matches.",
      );
    }

    // Get users to calculate cooldown
    const [user1, user2] = await Promise.all([
      this.prisma.user.findUnique({ where: { id: user1Id } }),
      this.prisma.user.findUnique({ where: { id: user2Id } }),
    ]);

    if (!user1 || !user2) {
      throw new NotFoundException("One or both users not found");
    }

    // Use maximum cooldown period
    const cooldownDays = Math.max(user1.matchCooldownDays, user2.matchCooldownDays);
    const cooldownUntil = new Date();
    cooldownUntil.setDate(cooldownUntil.getDate() + cooldownDays);

    // Create match
    const match = await this.prisma.match.create({
      data: {
        user1Id,
        user2Id,
        externalMatchId: externalMatchData?.externalMatchId ?? null,
        matchScore: externalMatchData?.matchScore ?? null,
        matchReason: externalMatchData?.matchReason ?? null,
        status: MatchStatus.PENDING,
        matchedAt: new Date(),
      },
    });

    // Create match history entry
    await this.prisma.matchHistory.create({
      data: {
        matchId: match.id,
        user1Id,
        user2Id,
        matchedAt: match.matchedAt,
        cooldownUntil,
        status: $Enums.MatchHistoryStatus.ACCEPTED,
      },
    });

    return match;
  }
}

