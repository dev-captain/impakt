import * as React from 'react';

import { C } from 'components';
import { useAppDispatch } from 'hooks';

import { fetchActiveDays } from '../../lib/redux/slices/fitness/actions/fetchActiveDays';
// import { getWhiteListed } from '../../lib/redux/slices/whitelist/actions/getWhiteListed';
// import { fetchExerciseStats } from '../../lib/redux/slices/fitness/actions/fetchExerciseStats';
import { fetchReferrals } from '../../lib/redux/slices/referrals/actions/fetchReferrals';
import { fetchReferralsChallenges } from '../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
// import { fetchRewardHistory } from '../../lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
import { fetchLatestNews } from '../../lib/redux/slices/discourse/fetchLatestNews';
import { fetchReferralsRewardGodl } from '../../lib/redux/slices/referrals/actions/fetchReferralsRewardGodl';
import { fetchReferralsRewardKoin } from '../../lib/redux/slices/referrals/actions/fetchReferralsRewardKoin';
import { usePersistedAuthStore, usePersistedBalanceScoreStore } from '../../lib/zustand';
import { useGodlAccountControllerGetAccount } from '../../lib/impakt-dev-api-client/react-query/godl/godl';
import { useCoinAccountControllerV1GetAccount } from '../../lib/impakt-dev-api-client/react-query/coin/coin';
// import { VStack } from '@chakra-ui/react';
// import ExerciseHistory from 'components/ui/MemberDashBoard/ExerciseHistory/ExerciseHistory';
// import HeroLayout from '../../components/layouts/HeroLayout';
// import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
// import MemberWhitelistLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
// import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
// import MemberDashboardCard from '../../components/ui/MemberDashBoard/MemberDashBoardCard';

const MemberDashboard: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const store = usePersistedBalanceScoreStore();
  const fetchGodlBalanceScore = useGodlAccountControllerGetAccount();
  const fetchKoinBalanceScore = useCoinAccountControllerV1GetAccount();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (fetchGodlBalanceScore.isFetched) {
      store.setGodlBalanceScore(fetchGodlBalanceScore.data?.balance ?? 0);
    }
  }, [fetchGodlBalanceScore.isFetched]);

  React.useEffect(() => {
    if (fetchKoinBalanceScore.isFetched) {
      store.setKoinBalanceScore(fetchKoinBalanceScore.data?.balance ?? 0);
    }
  }, [fetchKoinBalanceScore.isFetched]);

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchActiveDays(member.id));
  }, []);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(getWhiteListed());
  // }, []);

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

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
