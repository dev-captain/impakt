import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { fetchMyGroups } from './fetchMyGroups';

const deleteGroup = createAsyncThunk(
  'groups/delete',
  async (groupId: number, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .delete(`/api/v1/groups/${groupId}`);

      await dispatch(fetchMyGroups(member.id));

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { deleteGroup };
