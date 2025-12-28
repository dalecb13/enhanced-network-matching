import { ExperienceLevel } from "./enums";

export interface User {
  id: string;
  email: string;
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  isActive: boolean;
  matchCooldownDays: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSkill {
  id: string;
  userId: string;
  skillText: string;
  experienceLevel: ExperienceLevel;
  yearsOfExperience: number | null;
  isPrimary: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreference {
  id: string;
  userId: string;
  preferenceText: string;
  priority: number;
  isRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithRelations extends User {
  skills: UserSkill[];
  preferences: UserPreference[];
  matchCount?: number; // Computed field
}

export interface UserProfileForMatching {
  userId: string;
  name: string;
  bio: string | null;
  skills: UserSkill[];
  preferences: UserPreference[];
  isActive: boolean;
}




