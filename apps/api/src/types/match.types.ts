import { MatchHistoryStatus, MatchStatus } from "./enums";
import { User } from "./user.types";

export interface Match {
  id: string;
  user1Id: string;
  user2Id: string;
  externalMatchId: string | null;
  matchScore: number | null;
  matchReason: string | null;
  status: MatchStatus;
  matchedAt: Date;
  expiresAt: Date | null;
  completedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchWithUsers extends Match {
  user1: User;
  user2: User;
}

export interface MatchWithFeedback extends Match {
  feedback: MatchFeedback[];
}

export interface MatchHistory {
  id: string;
  matchId: string;
  user1Id: string;
  user2Id: string;
  matchedAt: Date;
  cooldownUntil: Date;
  status: MatchHistoryStatus;
  createdAt: Date;
}

export interface MatchFeedback {
  id: string;
  matchId: string;
  givenByUserId: string;
  givenToUserId: string;
  rating: number;
  feedbackText: string | null;
  wasGoodMatch: boolean;
  wouldMatchAgain: boolean;
  hasMet: boolean;
  meetingDateTime: Date | null;
  feedbackCategories: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchFeedbackWithUsers extends MatchFeedback {
  givenByUser: User;
  givenToUser: User;
  match: Match;
}

