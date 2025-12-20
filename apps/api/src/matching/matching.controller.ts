import {
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from "@nestjs/common";
import { MatchingService } from "./matching.service";
import { PrismaService } from "../prisma/prisma.service";
import {
  ExternalMatchingRequest,
  ExternalMatchingResponse,
} from "../types/matching.types";
import { User, UserPreference, UserProfileForMatching, UserSkill } from "../types/user.types";
import { MatchStatus } from "../types/enums";

@Controller("matching")
export class MatchingController {
  constructor(
    private matchingService: MatchingService,
    private prisma: PrismaService,
  ) {}

  /**
   * Match all active users in the database
   * This endpoint finds all users open to matching and creates matches for them
   */
  @Post("match-all")
  @HttpCode(HttpStatus.OK)
  async matchAllUsers() {
    // Get all active users
    const activeUsers = await this.prisma.user.findMany({
      where: { isActive: true },
      include: {
        skills: true,
        preferences: true,
      },
    });

    if (activeUsers.length < 2) {
      throw new BadRequestException(
        "At least 2 active users required for matching",
      );
    }

    const matchesCreated: Array<{
      user1Id: string;
      user2Id: string;
      matchId: string;
    }> = [];
    const errors: Array<{
      user1Id: string;
      user2Id: string;
      error: string;
    }> = [];

    // Process each user and find matches
    for (const user of activeUsers) {
      try {
        // Get excluded user IDs for this user
        const excludedUserIds =
          await this.matchingService.getExcludedUserIds(user.id);

        // Find potential matches (other active users not in excluded list)
        const potentialMatches = activeUsers.filter(
          (u: User) => u.id !== user.id && !excludedUserIds.includes(u.id),
        );

        if (potentialMatches.length === 0) {
          continue; // No potential matches for this user
        }

        // Prepare user profile for external matching service
        const userProfile: UserProfileForMatching = {
          userId: user.id,
          name: user.name,
          bio: user.bio,
          skills: user.skills.map((skill: any) => ({
            id: skill.id,
            userId: skill.userId,
            skillText: skill.skillText,
            experienceLevel: skill.experienceLevel as any,
            yearsOfExperience: skill.yearsOfExperience,
            isPrimary: skill.isPrimary,
            createdAt: skill.createdAt,
            updatedAt: skill.updatedAt,
          })),
          preferences: user.preferences,
          isActive: user.isActive,
        };

        // Call external matching service (or use internal logic)
        const matchingRequest: ExternalMatchingRequest = {
          userId: user.id,
          skills: user.skills.map((skill: any) => ({
            skillText: skill.skillText,
            experienceLevel: skill.experienceLevel as any,
            yearsOfExperience: skill.yearsOfExperience ?? undefined,
          })),
          preferences: user.preferences.map((pref: any) => ({
            preferenceText: pref.preferenceText,
            priority: pref.priority,
            isRequired: pref.isRequired,
          })),
          excludeUserIds: excludedUserIds,
          maxMatches: 5, // Limit matches per user
        };

        // For now, we'll use a simple matching algorithm
        // In production, this would call an external matching service
        const externalMatches = await this.findMatches(
          userProfile,
          potentialMatches,
          matchingRequest,
        );

        // Create matches for each valid match
        for (const externalMatch of externalMatches.matches) {
          try {
            // Double-check that users can still be matched (race condition protection)
            const canMatch = await this.matchingService.canMatchUsers(
              user.id,
              externalMatch.userId,
            );

            if (!canMatch) {
              errors.push({
                user1Id: user.id,
                user2Id: externalMatch.userId,
                error: "Users cannot be matched (validation failed)",
              });
              continue;
            }

            // Create the match
            const match = await this.matchingService.createMatch(
              user.id,
              externalMatch.userId,
              {
                externalMatchId: externalMatch.externalMatchId,
                matchScore: externalMatch.matchScore,
                matchReason: externalMatch.matchReason,
              },
            );

            matchesCreated.push({
              user1Id: user.id,
              user2Id: externalMatch.userId,
              matchId: match.id,
            });
          } catch (error) {
            errors.push({
              user1Id: user.id,
              user2Id: externalMatch.userId,
              error:
                error instanceof Error ? error.message : "Unknown error",
            });
          }
        }
      } catch (error) {
        // Log error but continue processing other users
        console.error(`Error matching user ${user.id}:`, error);
      }
    }

    return {
      success: true,
      matchesCreated: matchesCreated.length,
      errors: errors.length,
      matches: matchesCreated,
      errorDetails: errors,
    };
  }

  /**
   * Simple matching algorithm (replace with external service call in production)
   * This matches users based on basic criteria
   */
  private async findMatches(
    userProfile: UserProfileForMatching,
    potentialMatches: Array<{
      id: string;
      name: string;
      bio: string | null;
      skills: Array<{
        skillText: string;
        experienceLevel: string;
        yearsOfExperience: number | null;
      }>;
      preferences: Array<{
        preferenceText: string;
        priority: number;
        isRequired: boolean;
      }>;
    }>,
    request: ExternalMatchingRequest,
  ): Promise<ExternalMatchingResponse> {
    const matches: ExternalMatchingResponse["matches"] = [];

    for (const candidate of potentialMatches) {
      // Skip if in excluded list
      if (request.excludeUserIds.includes(candidate.id)) {
        continue;
      }

      // Simple matching logic: check if there's any skill or preference overlap
      const userSkills = new Set(
        userProfile.skills.map((s) => s.skillText.toLowerCase()),
      );
      const candidateSkills = new Set(
        candidate.skills.map((s) => s.skillText.toLowerCase()),
      );

      const skillOverlap = Array.from(userSkills).filter((skill) =>
        candidateSkills.has(skill),
      ).length;

      // Check preference matches
      const userPreferenceTexts = userProfile.preferences.map((p) =>
        p.preferenceText.toLowerCase(),
      );
      const candidatePreferenceTexts = candidate.preferences.map((p) =>
        p.preferenceText.toLowerCase(),
      );

      const preferenceMatches = userPreferenceTexts.filter((pref) =>
        candidatePreferenceTexts.some((candidatePref) =>
          candidatePref.includes(pref) || pref.includes(candidatePref),
        ),
      ).length;

      // Calculate a simple match score
      const matchScore =
        (skillOverlap * 20 + preferenceMatches * 15 + 30) / 100;

      if (matchScore > 0.3) {
        // Minimum threshold
        matches.push({
          userId: candidate.id,
          matchScore: Math.min(matchScore * 100, 100),
          matchReason: `Found ${skillOverlap} skill overlap(s) and ${preferenceMatches} preference match(es)`,
          externalMatchId: `ext-${userProfile.userId}-${candidate.id}-${Date.now()}`,
        });
      }

      // Limit number of matches
      if (matches.length >= request.maxMatches) {
        break;
      }
    }

    return {
      matches,
      requestId: `req-${userProfile.userId}-${Date.now()}`,
    };
  }

  /**
   * Get matching statistics
   */
  @Get("stats")
  async getMatchingStats() {
    const activeUsersCount = await this.prisma.user.count({
      where: { isActive: true },
    });

    const pendingMatchesCount = await this.prisma.match.count({
      where: { status: MatchStatus.PENDING },
    });

    const acceptedMatchesCount = await this.prisma.match.count({
      where: { status: MatchStatus.ACCEPTED },
    });

    return {
      activeUsers: activeUsersCount,
      pendingMatches: pendingMatchesCount,
      acceptedMatches: acceptedMatchesCount,
    };
  }
}

