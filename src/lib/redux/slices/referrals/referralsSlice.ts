import { ReferralReferreeChallengesRes, ReferreesOfReferrerRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { fetchReferralsRewardGodl } from './actions/fetchReferralsRewardGodl';
import { fetchReferralsRewardKoin } from './actions/fetchReferralsRewardKoin';

interface ReferralsInitialI {
  referrals: ReferreesOfReferrerRes;
  referralsChallengesHaveDone: ReferralReferreeChallengesRes;
  godlRewardedByReferrals: number;
  koinRewardedByReferrals: number;
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
  koinRewardedByReferrals: 0,
  isReferralsLoading: false,
};

const referralsSlice = createSlice({
  name: 'referrals',
  initialState: referralsInitialState as ReferralsInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReferralsRewardGodl.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferralsRewardGodl.fulfilled, (state, action) => {
        state.isReferralsLoading = false;
        state.godlRewardedByReferrals = action.payload;
        // }
      })
      .addCase(fetchReferralsRewardGodl.rejected, (state) => {
        state.isReferralsLoading = false;
      });

    builder
      .addCase(fetchReferralsRewardKoin.pending, (state) => {
        state.isReferralsLoading = true;
      })
      .addCase(fetchReferralsRewardKoin.fulfilled, (state, action) => {
        state.isReferralsLoading = false;
        if (
          action.payload === 0 &&
          state.referrals.confirmedCount &&
          state.referrals.confirmedCount !== 0
        ) {
          state.godlRewardedByReferrals = state.referrals.confirmedCount * 1000;
        } else {
          state.koinRewardedByReferrals = action.payload;
        }
      })
      .addCase(fetchReferralsRewardKoin.rejected, (state) => {
        state.isReferralsLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default referralsSlice.reducer;
