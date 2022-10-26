import { createAsyncThunk } from '@reduxjs/toolkit';

import { koinInstance } from '../../../../impakt-dev-api-client/init';

const fetchKoinBalanceScore = createAsyncThunk(
  'koin/balance-score',
  async (_, { rejectWithValue }) => {
    try {
      const koin = await koinInstance.coinAccountControllerV1GetAccount();

      return koin.balance;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchKoinBalanceScore };
