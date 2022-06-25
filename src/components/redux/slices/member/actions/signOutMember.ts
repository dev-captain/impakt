import { createAsyncThunk } from '@reduxjs/toolkit';

import { authInstance } from '../../../../../lib/impakt-dev-api-client/init';
import { RootState } from '../../../store';
import { cleanMembersState } from '../memberSlice';

const signOutMember = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        memberAuthReducer: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('This account is already signed out'));
      }

      await authInstance.authControllerLogout();

      dispatch(cleanMembersState());

      return null;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { signOutMember };
