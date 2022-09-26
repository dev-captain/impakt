import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';

const updateGroupCoverImage = createAsyncThunk(
  'groups/update-cover-image',
  async ({ body, groupId }: { body: FormData; groupId: number }, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const result = await axios
        .create({
          baseURL: API_SERVER_BASE_URL,
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .patch(`/api/v1/groups/${groupId}/cover-image`, body);

      return result.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateGroupCoverImage };
