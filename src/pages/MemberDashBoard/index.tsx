import * as React from 'react';

import { C } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

import { fetchGodlBalanceScore } from '../../lib/redux/slices/godl/actions/fetchGodlBalanceScore';
import { fetchActiveDays } from '../../lib/redux/slices/fitness/actions/fetchActiveDays';
import { getWhiteListed } from '../../lib/redux/slices/whitelist/actions/getWhiteListed';
// import { fetchExerciseStats } from '../../lib/redux/slices/fitness/actions/fetchExerciseStats';
import { fetchReferrals } from '../../lib/redux/slices/referrals/actions/fetchReferrals';
import { fetchReferralsChallenges } from '../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
import { fetchMember } from '../../lib/redux/slices/member/actions/fetchMember';
// import { fetchRewardHistory } from '../../lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
import { fetchLatestNews } from '../../lib/redux/slices/discourse/fetchLatestNews';
import { fetchMyGroups } from '../../lib/redux/slices/groups/actions/fetchMyGroups';
import { fetchGroups } from '../../lib/redux/slices/groups/actions/fetchGroups';
import { fetchGroupRequests } from '../../lib/redux/slices/groups/actions/fetchGroupRequests';
import { fetchKoinBalanceScore } from '../../lib/redux/slices/koin/actions/fetchKoinBalanceScore';
import { fetchReferralsRewardGodl } from '../../lib/redux/slices/referrals/actions/fetchReferralsRewardGodl';
import { fetchReferralsRewardKoin } from '../../lib/redux/slices/referrals/actions/fetchReferralsRewardKoin';
// import { VStack } from '@chakra-ui/react';
// import ExerciseHistory from 'components/ui/MemberDashBoard/ExerciseHistory/ExerciseHistory';
// import HeroLayout from '../../components/layouts/HeroLayout';
// import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
// import MemberWhitelistLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
// import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
// import MemberDashboardCard from '../../components/ui/MemberDashBoard/MemberDashBoardCard';

const MemberDashboard: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchMember(member.id));
  }, []);

  React.useEffect(() => {
    dispatch(fetchGodlBalanceScore());
    dispatch(fetchKoinBalanceScore());
  }, []);

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchActiveDays(member.id));
  }, []);

  React.useEffect(() => {
    if (!member) return;
    dispatch(getWhiteListed());
  }, []);

  // React.useEffect(() => {
  //   if (member) {
  //     dispatch(fetchRewardHistory(member.id));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(fetchExerciseStats(member.id));
  // }, []);

  React.useEffect(() => {
    dispatch(fetchReferrals({ count: true }));
    dispatch(fetchReferralsChallenges());
    dispatch(fetchReferralsRewardGodl());
    dispatch(fetchReferralsRewardKoin());
  }, []);

  React.useEffect(() => {
    dispatch(fetchLatestNews());
  }, []);

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchMyGroups(member.id)).then(() => dispatch(fetchGroupRequests()));
  }, []);

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchGroups({ explore: true }));
  }, []);

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
