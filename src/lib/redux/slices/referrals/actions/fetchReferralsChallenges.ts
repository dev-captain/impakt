import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';

const fetchReferralsChallenges = createAsyncThunk(
  'referrals/fetchReferralsChallenges',
  async (_, { rejectWithValue }) => {
    try {
      const referreHowManyChallengesDoneRes =
        await ReferralsInstance.referralControllerGetReferreeHowManyChallengesDone();

      return referreHowManyChallengesDoneRes;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchReferralsChallenges };
