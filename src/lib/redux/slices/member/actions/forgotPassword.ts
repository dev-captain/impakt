import { RequestPasswordResetReq } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const forgotPassword = createAsyncThunk(
  'auth/forget-password',
  async ({ email }: RequestPasswordResetReq, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuthReducer: { isLogin },
      } = getState() as RootState;

      if (isLogin) {
        return Promise.reject(new Error('Member is already signed in'));
      }

      await authInstance.authControllerRequestPasswordReset({ email });

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { forgotPassword };
