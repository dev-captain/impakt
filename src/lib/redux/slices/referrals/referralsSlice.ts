import { ReferralReferreeChallengesRes, ReferreesOfReferrerRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { fetchReferrals } from './actions/fetchReferrals';
import { fetchReferralsChallenges } from './actions/fetchReferralsChallenges';
import { fetchReferralsReward } from './actions/fetchReferralsReward';

interface ReferralsInitialI {
  referrals: ReferreesOfReferrerRes;
  referralsChallengesHaveDone: ReferralReferreeChallengesRes;
  godlRewardedByReferrals: number;
  isReferralsLoading: boolean;
}

const referralsInitialState: ReferralsInitialI = {
  referrals: { referrees: [], referrerId: 0 },
  referralsChallengesHaveDone: {
    numberOfReferreesWhoHaveDoneFiveChallenges: 0,
    numberOfReferreesWhoHaveDoneFourChallenges: 0,
    numberOfReferreesWhoHaveDoneOneChallenge: 0,
    numberOfReferreesWhoHaveDoneThreeChallenges: 0,
    numberOfReferreesWhoHaveDoneTwoChallenges: 0,
  },
  godlRewardedByReferrals: 0,
  isReferralsLoading: false,
};

const referralsSlice = createSlice({
  name: 'referrals',
  initialState: referralsInitialState as ReferralsInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReferrals.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferrals.fulfilled, (state, action) => {
        state.referrals = action.payload;
        state.isReferralsLoading = false;
      })
      .addCase(fetchReferrals.rejected, (state) => {
        state.isReferralsLoading = false;
      });

    builder
      .addCase(fetchReferralsChallenges.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferralsChallenges.fulfilled, (state, action) => {
        state.referralsChallengesHaveDone = action.payload;
        state.isReferralsLoading = false;
      })
      .addCase(fetchReferralsChallenges.rejected, (state) => {
        state.isReferralsLoading = false;
      });

    builder
      .addCase(fetchReferralsReward.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferralsReward.fulfilled, (state, action) => {
        state.isReferralsLoading = false;
        if (action.payload === 0) {
          state.godlRewardedByReferrals = state.referrals.confirmedCount ?? 0 * 1000;
        } else {
          state.godlRewardedByReferrals = action.payload;
        }
      })
      .addCase(fetchReferralsReward.rejected, (state) => {
        state.isReferralsLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default referralsSlice.reducer;
