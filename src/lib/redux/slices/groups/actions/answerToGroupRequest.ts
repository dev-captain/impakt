import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { fetchGroupRequests } from './fetchGroupRequests';
import { fetchMyGroups } from './fetchMyGroups';

const answerToGroupRequest = createAsyncThunk(
  'groups/answer-group-request-to-join',
  async (
    {
      status,
      requestId,
      fromUserId,
    }: { status: 'Accepted' | 'Declined'; requestId: number; fromUserId: number },
    { rejectWithValue, dispatch, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .patch(`/api/v1/groups/answer-request/${requestId}`, { status, fromUserId });

      await dispatch(fetchGroupRequests());
      await dispatch(fetchMyGroups(member.id));

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { answerToGroupRequest };
