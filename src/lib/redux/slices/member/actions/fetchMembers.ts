import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

interface FetchMembersInputType {
  skip?: number | undefined;
  take?: number | undefined;
  communities?: boolean | undefined;
  username?: string | undefined;
  discordHandle?: string | undefined;
  roles?: ('Admin' | 'Creator' | 'Tester' | 'Ambassador')[] | undefined;
}

const fetchMembers = createAsyncThunk(
  'member/fetchMembers',
  async (
    { skip, take, communities, username, discordHandle, roles }: FetchMembersInputType,
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const members = UserInstance.userControllerGetUsers(
        skip,
        take,
        communities,
        username,
        discordHandle,
        roles,
      );

      return members;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchMembers };
