import { MatchStatus, MatchHistoryStatus, ExperienceLevel } from "../../types/enums";
import { User, UserSkill, UserPreference } from "../../types/user.types";
import { Match, MatchHistory } from "../../types/match.types";

export const createMockUser = (overrides?: Partial<User>): User => ({
  id: "user-001",
  email: "user@example.com",
  name: "Test User",
  bio: null,
  avatarUrl: null,
  isActive: true,
  matchCooldownDays: 30,
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),
  ...overrides,
});

export const mockUsers = {
  alice: createMockUser({
    id: "user-alice-001",
    email: "alice@example.com",
    name: "Alice Smith",
    isActive: true,
    matchCooldownDays: 30,
    createdAt: new Date("2024-01-01"),
  }),
  bob: createMockUser({
    id: "user-bob-002",
    email: "bob@example.com",
    name: "Bob Johnson",
    isActive: true,
    matchCooldownDays: 30,
    createdAt: new Date("2024-01-02"),
  }),
  charlie: createMockUser({
    id: "user-charlie-003",
    email: "charlie@example.com",
    name: "Charlie Brown",
    isActive: true,
    matchCooldownDays: 60,
    createdAt: new Date("2024-01-03"),
  }),
  diana: createMockUser({
    id: "user-diana-004",
    email: "diana@example.com",
    name: "Diana Prince",
    isActive: false,
    matchCooldownDays: 30,
    createdAt: new Date("2024-01-04"),
  }),
  eve: createMockUser({
    id: "user-eve-005",
    email: "eve@example.com",
    name: "Eve Adams",
    isActive: true,
    matchCooldownDays: 0,
    createdAt: new Date("2024-01-05"),
  }),
};

export const createMockUserSkill = (
  userId: string,
  overrides?: Partial<UserSkill>,
): UserSkill => ({
  id: `skill-${userId}-001`,
  userId,
  skillText: "TypeScript",
  experienceLevel: ExperienceLevel.INTERMEDIATE,
  yearsOfExperience: 3,
  isPrimary: false,
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),
  ...overrides,
});

export const createMockUserPreference = (
  userId: string,
  overrides?: Partial<UserPreference>,
): UserPreference => ({
  id: `pref-${userId}-001`,
  userId,
  preferenceText: "Looking for React developers",
  priority: 5,
  isRequired: false,
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),
  ...overrides,
});

export const createMockMatch = (overrides?: Partial<Match>): Match => ({
  id: "match-001",
  user1Id: "user-alice-001",
  user2Id: "user-bob-002",
  externalMatchId: null,
  matchScore: null,
  matchReason: null,
  status: MatchStatus.PENDING,
  matchedAt: new Date("2024-12-01"),
  expiresAt: null,
  completedAt: null,
  createdAt: new Date("2024-12-01"),
  updatedAt: new Date("2024-12-01"),
  ...overrides,
});

export const createMockMatchHistory = (
  overrides?: Partial<MatchHistory>,
): MatchHistory => {
  const matchedAt = overrides?.matchedAt ?? new Date("2024-12-01");
  const cooldownDays = 30;
  const cooldownUntil = new Date(matchedAt);
  cooldownUntil.setDate(cooldownUntil.getDate() + cooldownDays);

  return {
    id: "history-001",
    matchId: "match-001",
    user1Id: "user-alice-001",
    user2Id: "user-bob-002",
    matchedAt,
    cooldownUntil,
    status: MatchHistoryStatus.ACCEPTED,
    createdAt: new Date("2024-12-01"),
    ...overrides,
    cooldownUntil: overrides?.cooldownUntil ?? cooldownUntil,
  };
};

export const mockMatchHistory = {
  aliceBobRecent: createMockMatchHistory({
    id: "history-001",
    matchId: "match-001",
    user1Id: "user-alice-001",
    user2Id: "user-bob-002",
    matchedAt: new Date("2024-12-01"),
    cooldownUntil: new Date("2024-12-31"),
    status: MatchHistoryStatus.ACCEPTED,
  }),
  aliceBobExpired: createMockMatchHistory({
    id: "history-002",
    matchId: "match-002",
    user1Id: "user-alice-001",
    user2Id: "user-bob-002",
    matchedAt: new Date("2024-10-01"),
    cooldownUntil: new Date("2024-10-31"),
    status: MatchHistoryStatus.ACCEPTED,
  }),
  charlieDianaActive: createMockMatchHistory({
    id: "history-003",
    matchId: "match-003",
    user1Id: "user-charlie-003",
    user2Id: "user-diana-004",
    matchedAt: new Date("2024-11-15"),
    cooldownUntil: new Date("2025-01-14"),
    status: MatchHistoryStatus.ACCEPTED,
  }),
  aliceBobBoundary: createMockMatchHistory({
    id: "history-004",
    matchId: "match-004",
    user1Id: "user-alice-001",
    user2Id: "user-bob-002",
    matchedAt: new Date("2024-12-01T00:00:00Z"),
    cooldownUntil: new Date("2024-12-31T23:59:59Z"),
    status: MatchHistoryStatus.ACCEPTED,
  }),
};

