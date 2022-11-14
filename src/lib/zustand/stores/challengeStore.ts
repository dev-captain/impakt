import { StateCreator } from 'zustand';
import {
  ChallengeAttemptStatsRes,
  GetChallengeLikesRes,
  GetChallengeRes,
} from '../../impakt-dev-api-client/react-query/types';

export type AvailableGroupChallengesTypeI = {
  challenge: GetChallengeRes;
  attempts: ChallengeAttemptStatsRes;
  likes: GetChallengeLikesRes;
};
export type AvailableGroupChallengesType = AvailableGroupChallengesTypeI[];

export interface ChallengeStore {
  availableGroupChallenges: AvailableGroupChallengesType;
  setAvailableGroupChallenges: (availableGroupChallenges: AvailableGroupChallengesType) => void;
}

export const challengeStore: StateCreator<ChallengeStore> = (set) => ({
  availableGroupChallenges: [],
  setAvailableGroupChallenges: (availableGroupChallenges) => {
    set({ availableGroupChallenges });
  },
});
