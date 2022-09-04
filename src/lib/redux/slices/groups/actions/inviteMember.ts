import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';

const inviteMember = createAsyncThunk(
  'groups/invite-member',
  async (
    { groupId, toUserId }: { groupId: number; toUserId: number },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      if (member.id === toUserId) {
        return Promise.reject(new Error('Forbidden...'));
      }

      await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .post(`/api/v1/groups/invite/${groupId}`, { toUserId });

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { inviteMember };
