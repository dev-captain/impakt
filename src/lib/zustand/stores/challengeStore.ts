import { StateCreator } from 'zustand';
import { GetChallengeRes, GetRoutineRes } from '../../impakt-dev-api-client/react-query/types';

export interface ChallengeStore {
  availableGroupChallenges: GetChallengeRes[];
  availableGroupRoutines: GetRoutineRes[];
  setAvailableGroupChallenges: (availableGroupChallenges: GetChallengeRes[]) => void;
  setAvailableGroupRoutines: (availableGroupRoutines: GetRoutineRes[]) => void;
}

export const challengeStore: StateCreator<ChallengeStore> = (set) => ({
  availableGroupChallenges: [],
  availableGroupRoutines: [],
  setAvailableGroupChallenges: (availableGroupChallenges) => {
    set({ availableGroupChallenges });
  },
  setAvailableGroupRoutines: (availableGroupRoutines) => {
    set({ availableGroupRoutines });
  },
});
