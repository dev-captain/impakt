import { GetUserRes, LoginReq } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const signInMember = createAsyncThunk<GetUserRes, LoginReq>(
  'auth/signin',
  async (values: LoginReq, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (isLogin) {
        return Promise.reject(new Error('This account is already signed in'));
      }

      const response: GetUserRes = await authInstance.authControllerLogin(values);

      return response;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { signInMember };
