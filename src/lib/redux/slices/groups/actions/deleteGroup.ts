import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';

const deleteGroup = createAsyncThunk(
  'groups/delete',
  async (groupId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .delete(`/api/v1/groups/${groupId}`);

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { deleteGroup };
