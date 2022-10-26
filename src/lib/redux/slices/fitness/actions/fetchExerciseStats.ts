import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import { FitnessInstance } from '../../../../impakt-dev-api-client/init';

const fetchExerciseStats = createAsyncThunk(
  'fitness/fetch-exercise-stats',
  async (userId: number, { rejectWithValue }) => {
    try {
      const { exerciseStats } = await FitnessInstance.fitnessStatsControllerGetExerciseStats(
        userId,
      );

      return exerciseStats;
      // return exerciseStats;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchExerciseStats };
