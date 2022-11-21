import * as React from 'react';

import { C } from 'components';

import {
  usePersistedAuthStore,
  usePersistedBalanceScoreStore,
  usePersistedDiscourseStore,
  usePersistedFitnessStore,
  usePersistedGroupStore,
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
import { useGroupsMemberControllerV1GetGroupsByUserId } from '../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { useGroupsControllerV1ExploreGroups } from '../../lib/impakt-dev-api-client/react-query/groups/groups';
import { useGroupsRequestControllerV1GetGroupRequests } from '../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';

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
  const groupsStore = usePersistedGroupStore();
  const fitnessStore = usePersistedFitnessStore();
  const discourseStore = usePersistedDiscourseStore();
  const discourse = useDiscourse();
  // TODO next line is temp please move it to react query after its backend logic refactored.

  const fetchGodlBalanceScoreQuery = useGodlAccountControllerGetAccount({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });

  const fetchKoinBalanceScoreQuery = useCoinAccountControllerV1GetAccount({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });

  // const fetchIsUserWhitelistedQuery = useUserControllerIsWhitelisted();
  // const fetchRewardHistory = useRewardHistoryControllerV1GetRewardHistory();
  // const fetchExerciseStats = useFitnessStatsControllerGetExerciseStats();

  const fetchReferrals = useReferralControllerGetReferrees(
    { count: true },
    {
      query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
    },
  );
  const fetchReferralsChallenges = useReferralControllerGetReferreeHowManyChallengesDone({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });
  const fetchReferralsRewardGodl = useReferralControllerGetReferralRewardsForGodl({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });
  const fetchReferralsRewardKoin = useReferralControllerGetReferralRewardsForCoin({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });
  const fetchActiveDays = useFitnessStatsControllerGetDaysActive(member?.id as any, {
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });

  const fetchMyGroups = useGroupsMemberControllerV1GetGroupsByUserId(member?.id as any, {
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });

  const fetchExploreGroups = useGroupsControllerV1ExploreGroups(
    { includeRequests: true },
    { query: getDefaultQueryOptions() },
  ); // TODO update zustand explore groups

  const fetchGroupRequests = useGroupsRequestControllerV1GetGroupRequests({
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, cacheTime: 0, staleTime: 0 },
  });

  React.useEffect(() => {
    if (fetchGodlBalanceScoreQuery.isSuccess) {
      store.setGodlBalanceScore(fetchGodlBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchGodlBalanceScoreQuery.isSuccess]);

  React.useEffect(() => {
    if (fetchKoinBalanceScoreQuery.isSuccess) {
      store.setKoinBalanceScore(fetchKoinBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchKoinBalanceScoreQuery.isSuccess]);

  React.useEffect(() => {
    if (fetchActiveDays.isSuccess) {
      fitnessStore.setActiveDays(fetchActiveDays.data?.value);
    }
  }, [fetchActiveDays.isSuccess]);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(fetchExerciseStats(member.id));
  // }, []);

  React.useEffect(() => {
    if (fetchReferrals.isSuccess) {
      referralsStore.setReferrals(fetchReferrals.data);
    }
  }, [fetchReferrals.isSuccess]);

  React.useEffect(() => {
    if (fetchReferralsChallenges.isSuccess) {
      referralsStore.setReferralsChallengesHaveDone(fetchReferralsChallenges.data);
    }
  }, [fetchReferralsChallenges.isSuccess]);

  React.useEffect(() => {
    if (fetchReferralsRewardGodl.isSuccess) {
      let countAmount = 0;
      fetchReferralsRewardGodl.data?.forEach(({ amount }) => {
        // eslint-disable-next-line operator-assignment
        countAmount = countAmount + amount;
      });
      referralsStore.setGodlRewardedByReferrals(countAmount);
    }
  }, [fetchReferralsRewardGodl.isSuccess]);

  React.useEffect(() => {
    if (fetchReferralsRewardKoin.isSuccess) {
      let countAmount = 0;
      fetchReferralsRewardKoin.data?.forEach(({ amount }) => {
        // eslint-disable-next-line operator-assignment
        countAmount = countAmount + amount;
      });
      referralsStore.setKoinRewardedByReferrals(countAmount);
    }
  }, [fetchReferralsRewardKoin.isSuccess]);

  React.useEffect(() => {
    if (discourse.isDiscourseFetched) {
      discourseStore.setNews(discourse.news);
    }
  }, [discourse.news]);

  React.useEffect(() => {
    if (fetchMyGroups.isFetched && fetchMyGroups.isSuccess) {
      groupsStore.setMyGroups(fetchMyGroups.data);
    }
  }, [fetchMyGroups.isFetched]);

  React.useEffect(() => {
    if (fetchExploreGroups.isFetchedAfterMount && fetchExploreGroups.isSuccess) {
      groupsStore.setExploreGroups(fetchExploreGroups.data);
    }
  }, [fetchExploreGroups.isFetchedAfterMount]);

  React.useEffect(() => {
    if (fetchGroupRequests.isFetched && fetchGroupRequests.isSuccess) {
      groupsStore.setGroupRequests(fetchGroupRequests.data);
    }
  }, [fetchGroupRequests.isFetched]);

  return <C.SidebarLayout isShowNavbar />;
};

export default MemberDashboard;
