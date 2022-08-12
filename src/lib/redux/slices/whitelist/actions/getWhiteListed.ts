import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const getWhiteListed = createAsyncThunk(
  'fitness/get-whitelisted',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const { isWhitelisted } = await UserInstance.userControllerIsWhitelisted();

      return isWhitelisted;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { getWhiteListed };
