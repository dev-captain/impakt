import { StateCreator } from 'zustand';
import {
  ReferralReferreeChallengesRes,
  ReferreesOfReferrerRes,
} from '../../impakt-dev-api-client/react-query/types';

export interface ReferralsSlice {
  referrals: ReferreesOfReferrerRes | null;
  referralsChallengesHaveDone: ReferralReferreeChallengesRes;
  godlRewardedByReferrals: number;
  setGodlRewardedByReferrals: (godlRewarded: number) => void;
  koinRewardedByReferrals: number;
  setKoinRewardedByReferrals: (koinRewarded: number) => void;
  setReferrals: (referrals: ReferreesOfReferrerRes) => void;
  setReferralsChallengesHaveDone: (referrals: ReferralReferreeChallengesRes) => void;
}

export const referralsSlice: StateCreator<ReferralsSlice> = (set) => ({
  referrals: null,
  referralsChallengesHaveDone: {
    numberOfReferreesWhoHaveDoneFiveChallenges: 0,
    numberOfReferreesWhoHaveDoneFourChallenges: 0,
    numberOfReferreesWhoHaveDoneOneChallenge: 0,
    numberOfReferreesWhoHaveDoneThreeChallenges: 0,
    numberOfReferreesWhoHaveDoneTwoChallenges: 0,
  },
  godlRewardedByReferrals: 0,
  koinRewardedByReferrals: 0,
  setGodlRewardedByReferrals: (godlRewarded) => {
    set({ godlRewardedByReferrals: godlRewarded });
  },
  setKoinRewardedByReferrals: (koinRewarded) => {
    set({ koinRewardedByReferrals: koinRewarded });
  },
  setReferrals: (referrals) => {
    set({ referrals });
  },
  setReferralsChallengesHaveDone: (referralsChallengesHaveDone) => {
    set({ referralsChallengesHaveDone });
  },
});
