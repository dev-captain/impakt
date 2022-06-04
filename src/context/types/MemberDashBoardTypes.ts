// general interfaces

export interface MemberI {
  rank: number;
  userId: number;
  username: string;
  userScore: number;
  referralScore: number;
  referralCount: number;
  totalScore: number;
}

// input types
export type MemberWhitelistLeaderboardFetchInput = { take: string; skip: string };

// fields
