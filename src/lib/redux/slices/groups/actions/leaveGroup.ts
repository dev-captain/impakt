import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsMemberInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';
import { fetchGroups } from './fetchGroups';
import { fetchMyGroups } from './fetchMyGroups';

const leaveGroup = createAsyncThunk(
  'groups/leave-group',
  async (groupId: number, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const payload = await GroupsMemberInstance.groupsMemberControllerV1LeaveGroup(groupId);

      await dispatch(fetchMyGroups(member.id));
      await dispatch(fetchGroups({ explore: true }));

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { leaveGroup };
