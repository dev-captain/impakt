import { StateCreator } from 'zustand';
import { ExerciseStatsRes, StatsDaysActive } from '../../impakt-dev-api-client/react-query/types';

export interface FitnessSlice {
  activeDays: StatsDaysActive['value'];
  exerciseState: ExerciseStatsRes['exerciseStats'];
  setActiveDays: (activeDays: number) => void;
  setExerciseState: (exerciseState: []) => void;
}

export const fitnessSlice: StateCreator<FitnessSlice> = (set) => ({
  activeDays: 0,
  exerciseState: [],
  setActiveDays: (activeDays) => {
    set({ activeDays });
  },
  setExerciseState: (exerciseState) => {
    set({ exerciseState });
  },
});
