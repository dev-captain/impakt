import * as React from 'react';

import { C } from 'components';

import {
  usePersistedAuthStore,
  usePersistedBalanceScoreStore,
  usePersistedDiscourseStore,
  usePersistedFitnessStore,
  usePersistedReferralsStore,
} from '../../lib/zustand';
import { useGodlAccountControllerGetAccount } from '../../lib/impakt-dev-api-client/react-query/godl/godl';
import { useCoinAccountControllerV1GetAccount } from '../../lib/impakt-dev-api-client/react-query/coin/coin';
import {
  useReferralControllerGetReferralRewardsForCoin,
  useReferralControllerGetReferralRewardsForGodl,
  useReferralControllerGetReferreeHowManyChallengesDone,
  useReferralControllerGetReferrees,
} from '../../lib/impakt-dev-api-client/react-query/referrals/referrals';
import { useFitnessStatsControllerGetDaysActive } from '../../lib/impakt-dev-api-client/react-query/fitness-stats/fitness-stats';
import { useDiscourse } from '../../hooks/useDiscourse';
import { getDefaultQueryOptions } from '../../lib/impakt-dev-api-client/utils';

// import { useRewardHistoryControllerV1GetRewardHistory } from '../../lib/impakt-dev-api-client/react-query/default/default';
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
  const referralsStore = usePersistedReferralsStore();
  const fitnessStore = usePersistedFitnessStore();
  const discourseStore = usePersistedDiscourseStore();
  const discourse = useDiscourse();

  const fetchGodlBalanceScoreQuery = useGodlAccountControllerGetAccount({
    query: getDefaultQueryOptions(),
  });
  const fetchKoinBalanceScoreQuery = useCoinAccountControllerV1GetAccount({
    query: getDefaultQueryOptions(),
  });
  console.log(fetchKoinBalanceScoreQuery.data, fetchGodlBalanceScoreQuery.data);

  // const fetchIsUserWhitelistedQuery = useUserControllerIsWhitelisted();
  // const fetchRewardHistory = useRewardHistoryControllerV1GetRewardHistory();
  // const fetchExerciseStats = useFitnessStatsControllerGetExerciseStats();

  const fetchReferrals = useReferralControllerGetReferrees(
    { count: true },
    { query: getDefaultQueryOptions() },
  );
  const fetchReferralsChallenges = useReferralControllerGetReferreeHowManyChallengesDone({
    query: getDefaultQueryOptions(),
  });
  const fetchReferralsRewardGodl = useReferralControllerGetReferralRewardsForGodl({
    query: getDefaultQueryOptions(),
  });
  const fetchReferralsRewardKoin = useReferralControllerGetReferralRewardsForCoin({
    query: { staleTime: Infinity },
  });
  const fetchActiveDays = useFitnessStatsControllerGetDaysActive(member?.id as any, {
    query: { staleTime: Infinity },
  });

  React.useEffect(() => {
    if (fetchGodlBalanceScoreQuery.isFetched) {
      console.log('fetched godl', fetchGodlBalanceScoreQuery.data?.balance);
      store.setGodlBalanceScore(fetchGodlBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchGodlBalanceScoreQuery.data]);

  React.useEffect(() => {
    console.log(fetchKoinBalanceScoreQuery.isRefetching);
    if (fetchKoinBalanceScoreQuery.isFetched) {
      console.log('fetched koin', fetchKoinBalanceScoreQuery.data?.balance);
      store.setKoinBalanceScore(fetchKoinBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchKoinBalanceScoreQuery.data]);

  React.useEffect(() => {
    if (fetchActiveDays.isFetched && fetchActiveDays.data) {
      fitnessStore.setActiveDays(fetchActiveDays.data?.value);
    }
  }, [fetchActiveDays.data]);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(fetchExerciseStats(member.id));
  // }, []);

  React.useEffect(() => {
    if (fetchReferrals.isFetched && fetchReferrals.data) {
      referralsStore.setReferrals(fetchReferrals.data);
    }
  }, [fetchReferrals.data]);

  React.useEffect(() => {
    if (fetchReferralsChallenges.isFetched && fetchReferralsChallenges.data) {
      referralsStore.setReferralsChallengesHaveDone(fetchReferralsChallenges.data);
    }
  }, [fetchReferralsChallenges.isFetched]);

  React.useEffect(() => {
    if (fetchReferralsRewardGodl.isFetched) {
      let countAmount = 0;
      fetchReferralsRewardGodl.data?.forEach(({ amount }) => {
        // eslint-disable-next-line operator-assignment
        countAmount = countAmount + amount;
      });
      referralsStore.setGodlRewardedByReferrals(countAmount);
    }
  }, [fetchReferralsRewardGodl.data]);

  React.useEffect(() => {
    if (fetchReferralsRewardKoin.isFetched) {
      let countAmount = 0;
      fetchReferralsRewardKoin.data?.forEach(({ amount }) => {
        // eslint-disable-next-line operator-assignment
        countAmount = countAmount + amount;
      });
      referralsStore.setKoinRewardedByReferrals(countAmount);
    }
  }, [fetchReferralsRewardKoin.isFetched]);

  React.useEffect(() => {
    if (discourse.isDiscourseFetched) {
      discourseStore.setNews(discourse.news);
    }
  }, [discourse.news]);

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
