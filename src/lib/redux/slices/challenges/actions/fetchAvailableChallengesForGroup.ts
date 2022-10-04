import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  AttemptInstance,
  ChallengeInstance,
  LikeInstance,
} from '../../../../impakt-dev-api-client/init';

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

      const myChallengesRes = await ChallengeInstance.challengesControllerGetMany(
        undefined,
        undefined,
        undefined,
        true,
        true,
        undefined,
        admin?.User.id,
      );

      const challengesLikePromises = myChallengesRes.map(({ id }) =>
        LikeInstance.likeControllerGetChallengeLikes(id),
      );

      const attemptsOnPromises = myChallengesRes.map(async ({ id }) =>
        AttemptInstance.challengeStatsControllerGetChallengeAttemptsForAllUsers(id),
      );

      const challengesLikes = await Promise.all([...challengesLikePromises]);
      const attempts = await Promise.all([...attemptsOnPromises]);

      const res = myChallengesRes.map((d, index) => {
        return { challenge: { ...d }, attempts: attempts[index], likes: challengesLikes[index] };
      });

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchAvailableChallengesForGroup };
