import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';
import { GroupsInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';
import { fetchMyGroups } from './fetchMyGroups';

const updateGroup = createAsyncThunk(
  'groups/update',
  async (
    { groupId, groupName, status }: { groupId: number; groupName?: string; status?: boolean },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const result = await GroupsInstance.groupsControllerV1PatchGroup(groupId, {
        groupName: groupName as any,
        _private: status,
      });

      await dispatch(fetchMyGroups(member.id));

      return result;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateGroup };
