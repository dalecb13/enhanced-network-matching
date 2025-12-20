import { jest } from "@jest/globals";
import { PrismaService } from "../../prisma/prisma.service";

export const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
  },
  match: {
    findFirst: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
  },
  matchHistory: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
} as unknown as jest.Mocked<PrismaService>;

export const resetMocks = () => {
  jest.clearAllMocks();
  Object.values(mockPrismaService.user).forEach((fn) => {
    if (typeof fn === "function") {
      (fn as jest.Mock).mockReset();
    }
  });
  Object.values(mockPrismaService.match).forEach((fn) => {
    if (typeof fn === "function") {
      (fn as jest.Mock).mockReset();
    }
  });
  Object.values(mockPrismaService.matchHistory).forEach((fn) => {
    if (typeof fn === "function") {
      (fn as jest.Mock).mockReset();
    }
  });
};

