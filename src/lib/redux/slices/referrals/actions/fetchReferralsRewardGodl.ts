import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';

const fetchReferralsRewardGodl = createAsyncThunk(
  'referrals/fetchReferralsRewardGodl',
  async (_, { rejectWithValue }) => {
    try {
      let countAmount = 0;

      const referralsRes = await ReferralsInstance.referralControllerGetReferralRewardsForGodl();

      referralsRes.forEach(({ amount }) => {
        countAmount += amount;
      });

      return countAmount;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchReferralsRewardGodl };
