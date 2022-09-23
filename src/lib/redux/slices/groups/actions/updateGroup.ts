import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { fetchMyGroups } from './fetchMyGroups';

const updateGroup = createAsyncThunk(
  'groups/update',
  async (
    { groupId, groupName, status }: { groupId?: number; groupName?: string; status: boolean },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const result = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .patch(`/api/v1/groups/${groupId}`, { groupName, private: status });

      await dispatch(fetchMyGroups(member.id));

      return result.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateGroup };
