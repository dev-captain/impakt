import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const requestVerification = createAsyncThunk(
  'auth/request-verification',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuthReducer: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      await authInstance.authControllerRequestVerification();

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { requestVerification };
