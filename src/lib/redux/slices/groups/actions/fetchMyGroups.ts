import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsMemberInstance } from '../../../../impakt-dev-api-client/init';

const fetchMyGroups = createAsyncThunk(
  'groups/my-groups',
  async (userId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getMyGroupRes = await GroupsMemberInstance.groupsMemberControllerV1GetGroupsByUserId(
        userId,
      );

      const payload = getMyGroupRes;

      payload.forEach(({ groupId }) => localStorage.removeItem(`${groupId + userId.toString()}`));

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchMyGroups };
