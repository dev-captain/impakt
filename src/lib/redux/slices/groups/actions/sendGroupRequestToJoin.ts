import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsRequestInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';
import { fetchGroups } from './fetchGroups';

const sendGroupRequestToJoin = createAsyncThunk(
  'groups/send-group-request-to-join',
  async (groupId: number, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      await GroupsRequestInstance.groupsRequestControllerV1SendRequestToJoinGroup(groupId);
      await dispatch(fetchGroups({ explore: true }));

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { sendGroupRequestToJoin };
