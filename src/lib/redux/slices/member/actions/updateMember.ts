import { PatchUserReq } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';
import { updateAuthMember } from '../memberAuthSlice';

const updateMember = createAsyncThunk(
  'member/update',
  async (
    { id, data }: { id: number; data: PatchUserReq },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const updatedMemberResponse = await UserInstance.userControllerPatchOne(id, data);
      dispatch(updateAuthMember(updatedMemberResponse));

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateMember };
