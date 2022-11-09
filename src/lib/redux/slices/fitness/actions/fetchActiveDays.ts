import { createAsyncThunk } from '@reduxjs/toolkit';

import { FitnessInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchActiveDays = createAsyncThunk(
  'fitness/fetch-active-days',
  async (userId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const { value } = await FitnessInstance.fitnessStatsControllerGetDaysActive(userId);

      return value;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchActiveDays };
