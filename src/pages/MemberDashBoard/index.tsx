import * as React from 'react';

import { C } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

import { fetchGodlBalanceScore } from '../../lib/redux/slices/godl/actions/fetchGodlBalanceScore';
import { fetchActiveDays } from '../../lib/redux/slices/fitness/actions/fetchActiveDays';
import { getWhiteListed } from '../../lib/redux/slices/whitelist/actions/getWhiteListed';
import { fetchExerciseStats } from '../../lib/redux/slices/fitness/actions/fetchExerciseStats';
import { fetchReferrals } from '../../lib/redux/slices/referrals/actions/fetchReferrals';
import { fetchReferralsChallenges } from '../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
import { fetchReferralsReward } from '../../lib/redux/slices/referrals/actions/fetchReferralsReward';
// import { fetchRewardHistory } from '../../lib/redux/slices/rewardHistory/actions/fetchRewardHistory';

const MemberDashboard: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGodlBalanceScore());
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(fetchActiveDays(member.id));
    }
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(getWhiteListed());
    }
  }, []);

  // TODO React.useEffect(() => {
  //   if (member) {
  //     dispatch(fetchRewardHistory(member.id));
  //   }
  // }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(fetchExerciseStats(member.id));
    }
  }, []);

  React.useEffect(() => {
    dispatch(fetchReferrals({ count: true }));
    dispatch(fetchReferralsChallenges());
    dispatch(fetchReferralsReward());
  }, []);

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
