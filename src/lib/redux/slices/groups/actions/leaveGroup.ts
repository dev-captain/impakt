import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { GetGroupRes } from '../types';
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
      const getMyGroupRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .patch(`/api/v1/groups/${groupId}/leave`);

      const payload = getMyGroupRes.data as GetGroupRes;

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
