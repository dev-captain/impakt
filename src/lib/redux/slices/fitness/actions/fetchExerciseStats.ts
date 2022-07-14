import { createAsyncThunk } from '@reduxjs/toolkit';

import { FitnessInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchExerciseStats = createAsyncThunk(
  'fitness/fetch-exercise-stats',
  async (userId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const { exerciseStats } = await FitnessInstance.fitnessStatsControllerGetExerciseStats(
        userId,
      );

      return exerciseStats;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchExerciseStats };
