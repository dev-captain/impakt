import { createAsyncThunk } from '@reduxjs/toolkit';

import { authInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';
import { cleanGodlState } from '../../godl/godlSlice';
import { cleanMemberAuthState } from '../memberAuthSlice';

const signOutMember = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('This account is already signed out'));
      }

      dispatch(cleanGodlState());
      dispatch(cleanMemberAuthState());

      await authInstance.authControllerLogout();

      return null;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { signOutMember };
