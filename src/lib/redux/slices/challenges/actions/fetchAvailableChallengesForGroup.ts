import { createAsyncThunk } from '@reduxjs/toolkit';

import { ChallengeInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';
import { GroupRole } from '../../groups/types';

const fetchAvailableChallengesForGroup = createAsyncThunk(
  'calendar/fetch-available-challenges-for-group',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
        groupsReducer: { membersOfGroup },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const admin = membersOfGroup?.Members.filter(({ role }) => role === GroupRole.Creator)[0];
      console.log(admin);

      const myChallengesRes = await ChallengeInstance.challengesControllerGetMany(
        undefined,
        undefined,
        undefined,
        true,
        true,
        undefined,
        admin?.User.id,
      );

      return myChallengesRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchAvailableChallengesForGroup };
