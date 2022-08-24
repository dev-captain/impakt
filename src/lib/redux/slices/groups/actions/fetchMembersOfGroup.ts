import { GetUserRes } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';

const fetchMembersOfGroup = createAsyncThunk(
  'groups/members-of-group',
  async (groupId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getMyGroupRes = await axios
        .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
        .get(`/api/v1/groups/${groupId}/members`);

      const payload = getMyGroupRes.data?.members.map(({ User }: any) => User) as GetUserRes[];

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchMembersOfGroup };
