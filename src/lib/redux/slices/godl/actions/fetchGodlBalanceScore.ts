import { createAsyncThunk } from '@reduxjs/toolkit';

import { godlInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchGodlBalanceScore = createAsyncThunk(
  'godl/balance-score',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const godl = await godlInstance.godlAccountControllerGetAccount();

      return godl.balance;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGodlBalanceScore };
