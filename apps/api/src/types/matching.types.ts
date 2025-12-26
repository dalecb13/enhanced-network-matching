import { ExperienceLevel } from "./enums";
import { UserSkill, UserPreference } from "./user.types";

export interface ExternalMatchingRequest {
  userId: string;
  skills: Array<{
    skillText: string;
    experienceLevel: ExperienceLevel;
    yearsOfExperience?: number;
  }>;
  preferences: Array<{
    preferenceText: string;
    priority: number;
    isRequired: boolean;
  }>;
  excludeUserIds: string[];
  maxMatches: number;
}

export interface ExternalMatchingResponse {
  matches: Array<{
    userId: string;
    matchScore: number;
    matchReason: string;
    externalMatchId: string;
  }>;
  requestId: string;
}



