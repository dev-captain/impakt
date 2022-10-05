import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { API_SERVER_BASE_URL } from '../../../../axios/api';

import { RootState } from '../../../store';
import { GetGroupRequestResV2 } from '../types';

const fetchGroupRequests = createAsyncThunk(
  'groups/group-requests',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
        groupsReducer: { myGroups },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      if (myGroups?.length > 0) {
        const callMap = myGroups.map(async ({ groupId }) =>
          axios
            .create({ baseURL: API_SERVER_BASE_URL, withCredentials: true })
            .get(`/api/v1/groups/group-requests/${groupId}`),
        );
        const getGroupRequests = await Promise.all(callMap);
        if (getGroupRequests.length > 0) {
          const dataExist: GetGroupRequestResV2[] = [];
          getGroupRequests.forEach(({ data }) => {
            if (data.length > 0) {
              dataExist.push(data[0]);
            }
          });

          const payload = dataExist;

          return payload;
        }
      }

      return [];
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupRequests };
