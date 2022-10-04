import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReferralsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchReferralsRewardGodl = createAsyncThunk(
  'referrals/fetchReferralsRewardGodl',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

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
