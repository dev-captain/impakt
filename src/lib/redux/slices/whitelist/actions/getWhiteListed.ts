import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserInstance } from '../../../../impakt-dev-api-client/init';

const getWhiteListed = createAsyncThunk(
  'fitness/get-whitelisted',
  async (_, { rejectWithValue }) => {
    try {
      const { isWhitelisted } = await UserInstance.userControllerIsWhitelisted();

      return isWhitelisted;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { getWhiteListed };
