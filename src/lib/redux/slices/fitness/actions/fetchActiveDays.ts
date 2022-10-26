import { createAsyncThunk } from '@reduxjs/toolkit';

import { FitnessInstance } from '../../../../impakt-dev-api-client/init';

const fetchActiveDays = createAsyncThunk(
  'fitness/fetch-active-days',
  async (userId: number, { rejectWithValue }) => {
    try {
      const { value } = await FitnessInstance.fitnessStatsControllerGetDaysActive(userId);

      return value;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchActiveDays };
