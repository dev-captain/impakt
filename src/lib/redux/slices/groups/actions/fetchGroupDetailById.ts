import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { GetGroupRes } from '../types';

const fetchGroupDetailById = createAsyncThunk(
  'groups/fetch-group-by-id',
  async (groupId: string, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
        groupsReducer: { activeGroup },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getMyGroupRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .get(`/api/v1/groups/${groupId}`);

      const payload = getMyGroupRes.data as GetGroupRes;

      if (activeGroup?.role) {
        return { ...payload, role: activeGroup.role };
      }

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupDetailById };
