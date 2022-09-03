import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

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

      await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .post(`/api/v1/groups/send-request/${groupId}`);

      await dispatch(fetchGroups({ explore: true }));

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { sendGroupRequestToJoin };
