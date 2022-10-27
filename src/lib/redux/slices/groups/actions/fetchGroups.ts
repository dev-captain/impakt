import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

const fetchGroups = createAsyncThunk(
  'groups/fetch-groups',
  async ({ explore }: { explore: boolean }, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getMyGroupRes = await GroupsInstance.groupsControllerV1ExploreGroups(
        undefined,
        undefined,
        explore,
      );

      const payload = getMyGroupRes;

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroups };
