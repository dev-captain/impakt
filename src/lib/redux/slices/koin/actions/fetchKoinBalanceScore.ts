import { createAsyncThunk } from '@reduxjs/toolkit';

import { koinInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchKoinBalanceScore = createAsyncThunk(
  'koin/balance-score',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const koin = await koinInstance.coinAccountControllerV1GetAccount();

      return koin.balance;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchKoinBalanceScore };
