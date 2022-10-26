import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';

const fetchReferralsRewardKoin = createAsyncThunk(
  'referrals/fetchReferralsRewardKoin',
  async (_, { rejectWithValue }) => {
    try {
      let countAmount = 0;
      const referralsRes = await ReferralsInstance.referralControllerGetReferralRewardsForCoin();

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
export { fetchReferralsRewardKoin };
