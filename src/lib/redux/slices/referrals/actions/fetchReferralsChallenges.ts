import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchReferralsChallenges = createAsyncThunk(
  'referrals/fetchReferralsChallenges',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }
      const referreHowManyChallengesDoneRes =
        await ReferralsInstance.referralControllerGetReferreeHowManyChallangesDone();

      return referreHowManyChallengesDoneRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchReferralsChallenges };
