import { StateCreator } from 'zustand';
import {
  ChallengeBestScoreStatsRes,
  GetChallengeLeaderboardResV1,
  GetChallengeRes,
  GetGroupPinnedChallengesRes,
  GetRoutineRes,
} from '../../impakt-dev-api-client/react-query/types';

export interface ChallengeStore {
  availableGroupChallenges: GetChallengeRes[];
  availableGroupRoutines: GetRoutineRes[];
  setAvailableGroupChallenges: (availableGroupChallenges: GetChallengeRes[]) => void;
  setAvailableGroupRoutines: (availableGroupRoutines: GetRoutineRes[]) => void;
  groupPinnedChallenge: GetGroupPinnedChallengesRes | null;
  setGroupPinnedChallenge: (groupPinnedChallenge: GetGroupPinnedChallengesRes | null) => void;
  challengeLeaderBoard: GetChallengeLeaderboardResV1 | null;
  setChallengeLeaderBoard: (challengeLeaderBoard: GetChallengeLeaderboardResV1 | null) => void;
  bestScoreOfUser: ChallengeBestScoreStatsRes | null;
  setBestScoreOfUser: (bestScoreOfUser: ChallengeBestScoreStatsRes | null) => void;
}

export const challengeStore: StateCreator<ChallengeStore> = (set) => ({
  availableGroupChallenges: [],
  availableGroupRoutines: [],
  groupPinnedChallenge: null,
  challengeLeaderBoard: null,
  bestScoreOfUser: null,
  setAvailableGroupChallenges: (availableGroupChallenges) => {
    set({ availableGroupChallenges });
  },
  setAvailableGroupRoutines: (availableGroupRoutines) => {
    set({ availableGroupRoutines });
  },
  setGroupPinnedChallenge: (groupPinnedChallenge) => {
    set({ groupPinnedChallenge });
  },
  setChallengeLeaderBoard: (challengeLeaderBoard) => {
    set({ challengeLeaderBoard });
  },
  setBestScoreOfUser: (bestScoreOfUser) => {
    set({ bestScoreOfUser });
  },
});
