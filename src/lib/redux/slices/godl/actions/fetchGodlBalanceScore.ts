import { createAsyncThunk } from '@reduxjs/toolkit';

import { godlInstance } from '../../../../impakt-dev-api-client/init';

const fetchGodlBalanceScore = createAsyncThunk(
  'godl/balance-score',
  async (_, { rejectWithValue }) => {
    try {
      const godl = await godlInstance.godlAccountControllerGetAccount();

      return godl.balance;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGodlBalanceScore };
