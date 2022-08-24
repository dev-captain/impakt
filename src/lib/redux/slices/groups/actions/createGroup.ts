import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { GetGroupRes } from '../groupsSlice';

const createGroup = createAsyncThunk(
  'groups/create',
  async (groupName: string, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const createGroupRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .post('/api/v1/groups', { friendlyName: groupName });

      createGroupRes.data as GetGroupRes;

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createGroup };
