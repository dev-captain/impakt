import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { GetGroupRequestResV2 } from '../groupsSlice';

const fetchGroupRequests = createAsyncThunk(
  'groups/fetch-group-requests',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getGroupRequestsRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .get(`/api/v1/groups/all-requests`);

      const payload = getGroupRequestsRes.data as GetGroupRequestResV2[];

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupRequests };
