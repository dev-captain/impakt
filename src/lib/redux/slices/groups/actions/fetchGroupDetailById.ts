import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

const fetchGroupDetailById = createAsyncThunk(
  'groups/fetch-group-by-id',
  async (groupId: string, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      const getMyGroupRes = await GroupsInstance.groupsControllerV1FindOne(parseInt(groupId, 10));

      return getMyGroupRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupDetailById };
