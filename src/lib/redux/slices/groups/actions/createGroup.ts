import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';

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

      await GroupsInstance.groupsControllerV1Create({ groupName });

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createGroup };
