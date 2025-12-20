import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { MatchingService } from "../../matching/matching.service";
import { PrismaService } from "../../prisma/prisma.service";
import { MatchStatus, MatchHistoryStatus } from "../../types/enums";
import {
  mockUsers,
  mockMatchHistory,
  createMockUser,
  createMockMatch,
  createMockMatchHistory,
} from "./mock-data";
import { mockPrismaService, resetMocks } from "./test-helpers";

describe("MatchingService", () => {
  let service: MatchingService;
  let prisma: jest.Mocked<PrismaService>;

  beforeEach(async () => {
    resetMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MatchingService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<MatchingService>(MatchingService);
    prisma = module.get(PrismaService);
  });

  describe("canMatchUsers", () => {
    describe("Cooldown Period Enforcement", () => {
      it("should reject match when cooldown is active", async () => {
        const now = new Date("2024-12-11"); // Before cooldown expires (2024-12-31)
        jest.useFakeTimers();
        jest.setSystemTime(now);

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([
          mockMatchHistory.aliceBobRecent,
        ]);

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(false);
        expect(prisma.matchHistory.findMany).toHaveBeenCalled();

        jest.useRealTimers();
      });

      it("should allow match when cooldown is expired", async () => {
        const now = new Date("2024-12-11"); // After cooldown expired (2024-10-31)
        jest.useFakeTimers();
        jest.setSystemTime(now);

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([
          mockMatchHistory.aliceBobExpired,
        ]);

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(true);

        jest.useRealTimers();
      });

      it("should allow match when cooldown is exactly at threshold", async () => {
        const threshold = new Date("2024-12-31T23:59:59Z");
        jest.useFakeTimers();
        jest.setSystemTime(threshold);

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([
          mockMatchHistory.aliceBobBoundary,
        ]);

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        // Should allow if cooldownUntil <= now (using <= comparison)
        expect(result).toBe(true);

        jest.useRealTimers();
      });

      it("should use maximum cooldown period when users have different cooldowns", async () => {
        const now = new Date("2024-12-11");
        jest.useFakeTimers();
        jest.setSystemTime(now);

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.charlie)
          .mockResolvedValueOnce(mockUsers.diana);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([
          mockMatchHistory.charlieDianaActive,
        ]);

        const result = await service.canMatchUsers(
          mockUsers.charlie.id,
          mockUsers.diana.id,
        );

        expect(result).toBe(false); // Cooldown still active (60 days)

        jest.useRealTimers();
      });

      it("should allow match when user has zero cooldown days", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.eve)
          .mockResolvedValueOnce(mockUsers.alice);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([]);

        const result = await service.canMatchUsers(
          mockUsers.eve.id,
          mockUsers.alice.id,
        );

        expect(result).toBe(true);
      });

      it("should check cooldown in both directions (bidirectional)", async () => {
        const now = new Date("2024-12-11");
        jest.useFakeTimers();
        jest.setSystemTime(now);

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);

        // Test both directions
        const history1 = createMockMatchHistory({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          cooldownUntil: new Date("2024-12-31"),
        });
        const history2 = createMockMatchHistory({
          user1Id: mockUsers.bob.id,
          user2Id: mockUsers.alice.id,
          cooldownUntil: new Date("2024-12-31"),
        });

        prisma.matchHistory.findMany.mockResolvedValue([history1]);

        await service.canMatchUsers(mockUsers.alice.id, mockUsers.bob.id);

        expect(prisma.matchHistory.findMany).toHaveBeenCalledWith({
          where: {
            OR: [
              { user1Id: mockUsers.alice.id, user2Id: mockUsers.bob.id },
              { user1Id: mockUsers.bob.id, user2Id: mockUsers.alice.id },
            ],
          },
          orderBy: { cooldownUntil: "desc" },
        });

        jest.useRealTimers();
      });
    });

    describe("User State Validation", () => {
      it("should reject match when user1 is inactive", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.diana) // inactive
          .mockResolvedValueOnce(mockUsers.alice);

        const result = await service.canMatchUsers(
          mockUsers.diana.id,
          mockUsers.alice.id,
        );

        expect(result).toBe(false);
      });

      it("should reject match when user2 is inactive", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.diana); // inactive

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.diana.id,
        );

        expect(result).toBe(false);
      });

      it("should reject match when both users are inactive", async () => {
        const inactiveUser2 = createMockUser({
          id: "user-inactive-002",
          isActive: false,
        });

        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.diana)
          .mockResolvedValueOnce(inactiveUser2);

        const result = await service.canMatchUsers(
          mockUsers.diana.id,
          inactiveUser2.id,
        );

        expect(result).toBe(false);
      });

      it("should reject match when user does not exist", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(null)
          .mockResolvedValueOnce(mockUsers.bob);

        const result = await service.canMatchUsers("non-existent", mockUsers.bob.id);

        expect(result).toBe(false);
      });
    });

    describe("Self-Matching Prevention", () => {
      it("should reject match when user1Id equals user2Id", async () => {
        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.alice.id,
        );

        expect(result).toBe(false);
        expect(prisma.user.findUnique).not.toHaveBeenCalled();
      });
    });

    describe("Duplicate Match Prevention", () => {
      it("should reject match when existing PENDING match exists", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(
          createMockMatch({
            user1Id: mockUsers.alice.id,
            user2Id: mockUsers.bob.id,
            status: MatchStatus.PENDING,
          }),
        );

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(false);
      });

      it("should reject match when existing ACCEPTED match exists", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(
          createMockMatch({
            user1Id: mockUsers.alice.id,
            user2Id: mockUsers.bob.id,
            status: MatchStatus.ACCEPTED,
          }),
        );

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(false);
      });

      it("should check for matches in both directions", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(
          createMockMatch({
            user1Id: mockUsers.bob.id,
            user2Id: mockUsers.alice.id, // Reverse direction
            status: MatchStatus.PENDING,
          }),
        );

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(false);
        expect(prisma.match.findFirst).toHaveBeenCalledWith({
          where: {
            OR: [
              { user1Id: mockUsers.alice.id, user2Id: mockUsers.bob.id },
              { user1Id: mockUsers.bob.id, user2Id: mockUsers.alice.id },
            ],
            status: {
              in: [MatchStatus.PENDING, MatchStatus.ACCEPTED],
            },
          },
        });
      });
    });

    describe("Missing Data Scenarios", () => {
      it("should allow match when no match history exists", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([]);

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(true);
      });

      it("should allow match when users have no skills", async () => {
        prisma.user.findUnique
          .mockResolvedValueOnce(mockUsers.alice)
          .mockResolvedValueOnce(mockUsers.bob);
        prisma.match.findFirst.mockResolvedValue(null);
        prisma.matchHistory.findMany.mockResolvedValue([]);

        const result = await service.canMatchUsers(
          mockUsers.alice.id,
          mockUsers.bob.id,
        );

        expect(result).toBe(true);
      });
    });
  });

  describe("checkCooldownPeriod", () => {
    it("should return false when no match history exists", async () => {
      prisma.matchHistory.findMany.mockResolvedValue([]);

      const result = await service.checkCooldownPeriod(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBe(false);
    });

    it("should return true when active cooldown exists", async () => {
      const now = new Date("2024-12-11");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      prisma.matchHistory.findMany.mockResolvedValue([
        mockMatchHistory.aliceBobRecent,
      ]);

      const result = await service.checkCooldownPeriod(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBe(true);

      jest.useRealTimers();
    });

    it("should return false when all cooldowns are expired", async () => {
      const now = new Date("2024-12-11");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      prisma.matchHistory.findMany.mockResolvedValue([
        mockMatchHistory.aliceBobExpired,
      ]);

      const result = await service.checkCooldownPeriod(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBe(false);

      jest.useRealTimers();
    });

    it("should check both user ID orderings", async () => {
      prisma.matchHistory.findMany.mockResolvedValue([]);

      await service.checkCooldownPeriod(mockUsers.alice.id, mockUsers.bob.id);

      expect(prisma.matchHistory.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { user1Id: mockUsers.alice.id, user2Id: mockUsers.bob.id },
            { user1Id: mockUsers.bob.id, user2Id: mockUsers.alice.id },
          ],
        },
        orderBy: { cooldownUntil: "desc" },
      });
    });
  });

  describe("getCooldownUntil", () => {
    it("should return null when no match history exists", async () => {
      prisma.matchHistory.findMany.mockResolvedValue([]);

      const result = await service.getCooldownUntil(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBeNull();
    });

    it("should return cooldownUntil when active cooldown exists", async () => {
      const now = new Date("2024-12-11");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      prisma.matchHistory.findMany.mockResolvedValue([
        mockMatchHistory.aliceBobRecent,
      ]);

      const result = await service.getCooldownUntil(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toEqual(mockMatchHistory.aliceBobRecent.cooldownUntil);

      jest.useRealTimers();
    });

    it("should return null when cooldown is expired", async () => {
      const now = new Date("2024-12-11");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      prisma.matchHistory.findMany.mockResolvedValue([
        mockMatchHistory.aliceBobExpired,
      ]);

      const result = await service.getCooldownUntil(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBeNull();

      jest.useRealTimers();
    });
  });

  describe("validateUserState", () => {
    it("should return true for active user", async () => {
      prisma.user.findUnique.mockResolvedValue(mockUsers.alice);

      const result = await service.validateUserState(mockUsers.alice.id);

      expect(result).toBe(true);
    });

    it("should return false for inactive user", async () => {
      prisma.user.findUnique.mockResolvedValue(mockUsers.diana);

      const result = await service.validateUserState(mockUsers.diana.id);

      expect(result).toBe(false);
    });

    it("should return false when user does not exist", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      const result = await service.validateUserState("non-existent");

      expect(result).toBe(false);
    });
  });

  describe("getExcludedUserIds", () => {
    it("should include self in excluded list", async () => {
      prisma.user.findMany.mockResolvedValue([]);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.findMany.mockResolvedValue([]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).toContain(mockUsers.alice.id);
    });

    it("should include inactive users", async () => {
      prisma.user.findMany.mockResolvedValue([mockUsers.diana]);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.findMany.mockResolvedValue([]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).toContain(mockUsers.diana.id);
    });

    it("should include users in cooldown", async () => {
      const now = new Date("2024-12-11");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      prisma.user.findMany.mockResolvedValue([]);
      prisma.matchHistory.findMany.mockResolvedValue([
        mockMatchHistory.aliceBobRecent,
      ]);
      prisma.match.findMany.mockResolvedValue([]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).toContain(mockUsers.bob.id);

      jest.useRealTimers();
    });

    it("should include users with existing pending matches", async () => {
      prisma.user.findMany.mockResolvedValue([]);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.findMany.mockResolvedValue([
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          status: MatchStatus.PENDING,
        }),
      ]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).toContain(mockUsers.bob.id);
    });

    it("should include users with existing accepted matches", async () => {
      prisma.user.findMany.mockResolvedValue([]);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.findMany.mockResolvedValue([
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          status: MatchStatus.ACCEPTED,
        }),
      ]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).toContain(mockUsers.bob.id);
    });

    it("should not include users with declined or expired matches", async () => {
      prisma.user.findMany.mockResolvedValue([]);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.findMany.mockResolvedValue([
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          status: MatchStatus.DECLINED,
        }),
      ]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      expect(result).not.toContain(mockUsers.bob.id);
    });

    it("should remove duplicate user IDs", async () => {
      prisma.user.findMany.mockResolvedValue([mockUsers.diana]);
      prisma.matchHistory.findMany.mockResolvedValue([
        createMockMatchHistory({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.diana.id,
          cooldownUntil: new Date("2024-12-31"),
        }),
      ]);
      prisma.match.findMany.mockResolvedValue([
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.diana.id,
          status: MatchStatus.PENDING,
        }),
      ]);

      const result = await service.getExcludedUserIds(mockUsers.alice.id);

      const dianaCount = result.filter((id) => id === mockUsers.diana.id).length;
      expect(dianaCount).toBe(1);
    });
  });

  describe("createMatch", () => {
    it("should create match when users can be matched", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob)
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob);
      prisma.match.findFirst.mockResolvedValue(null);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.create.mockResolvedValue(
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
        }),
      );
      prisma.matchHistory.create.mockResolvedValue(
        createMockMatchHistory({
          matchId: "match-001",
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
        }),
      );

      const result = await service.createMatch(
        mockUsers.alice.id,
        mockUsers.bob.id,
      );

      expect(result).toBeDefined();
      expect(prisma.match.create).toHaveBeenCalled();
      expect(prisma.matchHistory.create).toHaveBeenCalled();
    });

    it("should throw BadRequestException when users cannot be matched", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob);
      prisma.match.findFirst.mockResolvedValue(
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          status: MatchStatus.PENDING,
        }),
      );

      await expect(
        service.createMatch(mockUsers.alice.id, mockUsers.bob.id),
      ).rejects.toThrow(BadRequestException);
    });

    it("should throw NotFoundException when user does not exist", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob)
        .mockResolvedValueOnce(null);

      prisma.match.findFirst.mockResolvedValue(null);
      prisma.matchHistory.findMany.mockResolvedValue([]);

      await expect(
        service.createMatch(mockUsers.alice.id, "non-existent"),
      ).rejects.toThrow(NotFoundException);
    });

    it("should use maximum cooldown period when creating match history", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(mockUsers.charlie)
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.charlie)
        .mockResolvedValueOnce(mockUsers.alice);
      prisma.match.findFirst.mockResolvedValue(null);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.create.mockResolvedValue(
        createMockMatch({
          user1Id: mockUsers.charlie.id,
          user2Id: mockUsers.alice.id,
        }),
      );
      prisma.matchHistory.create.mockResolvedValue(
        createMockMatchHistory({
          matchId: "match-001",
          user1Id: mockUsers.charlie.id,
          user2Id: mockUsers.alice.id,
        }),
      );

      await service.createMatch(mockUsers.charlie.id, mockUsers.alice.id);

      expect(prisma.matchHistory.create).toHaveBeenCalled();
      const createCall = prisma.matchHistory.create as jest.Mock;
      const cooldownUntil = createCall.mock.calls[0][0].data.cooldownUntil;
      const expectedDate = new Date();
      expectedDate.setDate(expectedDate.getDate() + 60); // Max of 60 and 30

      expect(cooldownUntil.getDate()).toBe(expectedDate.getDate());
    });

    it("should include external match data when provided", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob)
        .mockResolvedValueOnce(mockUsers.alice)
        .mockResolvedValueOnce(mockUsers.bob);
      prisma.match.findFirst.mockResolvedValue(null);
      prisma.matchHistory.findMany.mockResolvedValue([]);
      prisma.match.create.mockResolvedValue(
        createMockMatch({
          user1Id: mockUsers.alice.id,
          user2Id: mockUsers.bob.id,
          externalMatchId: "ext-123",
          matchScore: 85.5,
          matchReason: "Skills match",
        }),
      );
      prisma.matchHistory.create.mockResolvedValue(
        createMockMatchHistory({
          matchId: "match-001",
        }),
      );

      await service.createMatch(mockUsers.alice.id, mockUsers.bob.id, {
        externalMatchId: "ext-123",
        matchScore: 85.5,
        matchReason: "Skills match",
      });

      expect(prisma.match.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          externalMatchId: "ext-123",
          matchScore: 85.5,
          matchReason: "Skills match",
        }),
      });
    });
  });
});

