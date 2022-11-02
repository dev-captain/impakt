import * as React from 'react';

import { C } from 'components';
import { GetGroupRequestResV2 } from '@impakt-dev/api-client';

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
import { GroupsRequestInstance } from '../../lib/impakt-dev-api-client/init';
import { GetGroupMemberResWithGroupRes } from '../../lib/impakt-dev-api-client/react-query/types';
import { useGroupsControllerV1ExploreGroups } from '../../lib/impakt-dev-api-client/react-query/groups/groups';

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
  const { fetchGroupRequests } = useFetchGroupRequests();

  const fetchGodlBalanceScoreQuery = useGodlAccountControllerGetAccount({
    query: getDefaultQueryOptions(),
  });

  const fetchKoinBalanceScoreQuery = useCoinAccountControllerV1GetAccount({
    query: getDefaultQueryOptions(),
  });

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
    query: getDefaultQueryOptions(),
  });
  const fetchActiveDays = useFitnessStatsControllerGetDaysActive(member?.id as any, {
    query: getDefaultQueryOptions(),
  });

  const fetchMyGroups = useGroupsMemberControllerV1GetGroupsByUserId(member?.id as any, {
    query: getDefaultQueryOptions(),
  });

  const fetchExploreGroups = useGroupsControllerV1ExploreGroups(
    { explore: true },
    { query: getDefaultQueryOptions() },
  ); // TODO update zustand explore groups

  React.useEffect(() => {
    if (fetchGodlBalanceScoreQuery.isFetched) {
      store.setGodlBalanceScore(fetchGodlBalanceScoreQuery.data?.balance ?? 0);
    }
  }, [fetchGodlBalanceScoreQuery.data]);

  React.useEffect(() => {
    if (fetchKoinBalanceScoreQuery.isFetched) {
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

  React.useEffect(() => {
    if (fetchMyGroups.isFetched && fetchMyGroups.data) {
      groupsStore.setMyGroups(fetchMyGroups.data);
      fetchGroupRequests(fetchMyGroups.data);
    }
  }, [fetchMyGroups.isFetched]);

  React.useEffect(() => {
    if (fetchExploreGroups.isFetched && fetchExploreGroups.data) {
      groupsStore.setExploreGroups(fetchExploreGroups.data);
    }
  }, [fetchExploreGroups.isFetched]);

  // React.useEffect(() => {
  //   if (!member) return;
  //   dispatch(fetchGroups({ explore: true }));
  // }, []);

  return <C.SidebarLayout isShowNavbar />;
};

const useFetchGroupRequests = () => {
  const { setGroupRequests } = usePersistedGroupStore();

  const fetchGroupRequests = async (myGroups: GetGroupMemberResWithGroupRes[]) => {
    if (myGroups?.length > 0) {
      const callMap = myGroups.map(async ({ groupId }) =>
        GroupsRequestInstance.groupsRequestControllerV1GetGroupRequests(groupId),
      );

      const getGroupRequests = await Promise.all(callMap);
      if (getGroupRequests.length > 0) {
        const dataExist: GetGroupRequestResV2[] = [];
        getGroupRequests.forEach((d) => {
          if (d.length > 0) {
            dataExist.push(d[0]);
          }
        });

        const payload = dataExist;

        setGroupRequests(payload);

        return payload;
      }

      return null;
    }

    return null;
  };

  return { fetchGroupRequests };
};

export default MemberDashboard;
