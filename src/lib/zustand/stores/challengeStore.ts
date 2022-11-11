import { StateCreator } from 'zustand';
import { GetChallengeRes } from '../../impakt-dev-api-client/react-query/types';

export interface ChallengeStore {
  availableGroupChallenges: GetChallengeRes[];
  setAvailableGroupChallenges: (availableGroupChallenges: GetChallengeRes[]) => void;
}

export const challengeStore: StateCreator<ChallengeStore> = (set) => ({
  availableGroupChallenges: [],
  setAvailableGroupChallenges: (availableGroupChallenges) => {
    set({ availableGroupChallenges });
  },
});
