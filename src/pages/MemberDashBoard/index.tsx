import * as React from 'react';

import { C } from 'components';
import { useAppDispatch } from 'hooks';

import { fetchActiveDays } from '../../lib/redux/slices/fitness/actions/fetchActiveDays';
// import { getWhiteListed } from '../../lib/redux/slices/whitelist/actions/getWhiteListed';
// import { fetchExerciseStats } from '../../lib/redux/slices/fitness/actions/fetchExerciseStats';
// import { fetchRewardHistory } from '../../lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
import { fetchLatestNews } from '../../lib/redux/slices/discourse/fetchLatestNews';
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
// import { useUserControllerIsWhitelisted } from '../../lib/impakt-dev-api-client/react-query/users/users';
// import { useRewardHistoryControllerV1GetRewardHistory } from '../../lib/impakt-dev-api-client/react-query/default/default';

const MemberDashboard: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const store = usePersistedBalanceScoreStore();
  const fetchGodlBalanceScoreQuery = useGodlAccountControllerGetAccount();
  const fetchKoinBalanceScoreQuery = useCoinAccountControllerV1GetAccount();
  // const fetchIsUserWhitelistedQuery = useUserControllerIsWhitelisted();
  // const fetchReferrals = useReferralControllerGetReferrees({ count: true });
  // const fetchReferralsChallenges = useReferralControllerGetReferreeHowManyChallengesDone();
  // const fetchReferralsRewardGodl= useReferralControllerGetReferralRewardsForGodl();
  // const fetchReferralsRewardKoin= useReferralControllerGetReferralRewardsForCoin();
  // const fetchRewardHistory = useRewardHistoryControllerV1GetRewardHistory();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (fetchGodlBalanceScoreQuery.isFetched) {
      store.setGodlBalanceScore(fetchGodlBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchGodlBalanceScoreQuery.isFetched]);

  React.useEffect(() => {
    if (fetchKoinBalanceScoreQuery.isFetched) {
      store.setKoinBalanceScore(fetchKoinBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchKoinBalanceScoreQuery.isFetched]);

  React.useEffect(() => {
    if (!member) return;
    dispatch(fetchActiveDays(member.id));
  }, []);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(fetchExerciseStats(member.id));
  // }, []);

  // React.useEffect(() => {
  //   // dispatch(fetchReferrals({ count: true }));
  //   // dispatch(fetchReferralsChallenges());
  //   // dispatch(fetchReferralsRewardGodl());
  //   // dispatch(fetchReferralsRewardKoin());
  // }, []);

  React.useEffect(() => {
    dispatch(fetchLatestNews());
  }, []);

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
