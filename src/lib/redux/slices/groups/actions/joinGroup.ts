import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsMemberInstance } from '../../../../impakt-dev-api-client/init';

import { fetchGroups } from './fetchGroups';
import { fetchMyGroups } from './fetchMyGroups';

const joinGroup = createAsyncThunk(
  'groups/join-group',
  async (groupId: number, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as any;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const payload = await GroupsMemberInstance.groupsMemberControllerV1JoinGroup(groupId);

      await dispatch(fetchMyGroups(member.id));
      await dispatch(fetchGroups({ explore: true }));

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { joinGroup };
