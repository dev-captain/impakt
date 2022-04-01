export interface Challenges {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  creatorId: number;
  RoutinesToChallenges: RoutinesToChallenge[];
}

export interface RoutinesToChallenge {
  id: number;
  validFrom: string;
  validUntil: string;
  routine: Routine;
  routineId: number;
  updatedAt: string;
  challengeType: string;
}

export interface Routine {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  creatorId: number;
  updatedAt: string;
  estimatedTime: number;
}

export type LeaderBoardResponseUser = {
  id: number;
  name: string;
  score: number;
};

export type LeaderBoardUser = {
  name: string;
  date: string;
  order: number;
  userId: number;
  score: number;
};
