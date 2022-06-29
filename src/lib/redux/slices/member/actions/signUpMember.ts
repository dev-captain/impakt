import { PostUserReq } from '@impakt-dev/api-client-168-merge';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const signUpMember = createAsyncThunk(
  'member/signup',
  async (payload: PostUserReq, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (isLogin) {
        return Promise.reject(new Error('Something went wrong'));
      }

      await UserInstance.userControllerCreate(payload);

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { signUpMember };
