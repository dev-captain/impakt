import { useCoinAccountControllerV1GetAccount } from '../lib/impakt-dev-api-client/react-query/coin/coin';
import { useFitnessStatsControllerGetDaysActive } from '../lib/impakt-dev-api-client/react-query/fitness-stats/fitness-stats';
import { useGodlAccountControllerGetAccount } from '../lib/impakt-dev-api-client/react-query/godl/godl';
import { useGroupsMemberControllerV1GetGroupsByUserId } from '../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { useGroupsRequestControllerV1GetGroupRequests } from '../lib/impakt-dev-api-client/react-query/groups-request/groups-request';
import { useGroupsControllerV1ExploreGroups } from '../lib/impakt-dev-api-client/react-query/groups/groups';
import {
  useReferralControllerGetReferrees,
  useReferralControllerGetReferreeHowManyChallengesDone,
  useReferralControllerGetReferralRewardsForGodl,
  useReferralControllerGetReferralRewardsForCoin,
} from '../lib/impakt-dev-api-client/react-query/referrals/referrals';
import { getDefaultQueryOptions } from '../lib/impakt-dev-api-client/utils';
import {
  usePersistedAuthStore,
  usePersistedBalanceScoreStore,
  usePersistedFitnessStore,
  usePersistedGroupStore,
  usePersistedReferralsStore,
} from '../lib/zustand';

export const useFetchMemberDashboard = () => {
  const coinStore = usePersistedBalanceScoreStore();
  const referralsStore = usePersistedReferralsStore();
  const fitnessStore = usePersistedFitnessStore();
  const groupsStore = usePersistedGroupStore();
  const { member } = usePersistedAuthStore();

  //  useUserControllerIsWhitelisted();
  //  useRewardHistoryControllerV1GetRewardHistory();
  //  useFitnessStatsControllerGetExerciseStats();

  useGodlAccountControllerGetAccount({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (godlRes) => {
        coinStore.setGodlBalanceScore(godlRes.balance);
      },
    },
  });

  useCoinAccountControllerV1GetAccount({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (koinRes) => {
        coinStore.setKoinBalanceScore(koinRes.balance);
      },
    },
  });

  useReferralControllerGetReferrees(
    { count: true },
    {
      query: {
        ...getDefaultQueryOptions(),
        enabled: !!member,
        onSuccess: (referrals) => {
          referralsStore.setReferrals(referrals);
        },
      },
    },
  );

  useReferralControllerGetReferreeHowManyChallengesDone({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (challengesDone) => {
        referralsStore.setReferralsChallengesHaveDone(challengesDone);
      },
    },
  });

  useReferralControllerGetReferralRewardsForGodl({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (referralsRewardGodl) => {
        const sumGodl = referralsRewardGodl.reduce((total, item) => {
          return total + item.amount;
        }, 0);

        referralsStore.setGodlRewardedByReferrals(sumGodl);
      },
    },
  });

  useReferralControllerGetReferralRewardsForCoin({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (referralsRewardCoin) => {
        const sumKoin = referralsRewardCoin.reduce((total, item) => {
          return total + item.amount;
        }, 0);

        referralsStore.setKoinRewardedByReferrals(sumKoin);
      },
    },
  });

  useFitnessStatsControllerGetDaysActive(member?.id as any, {
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (activeDays) => {
        fitnessStore.setActiveDays(activeDays.value);
      },
    },
  });

  useGroupsMemberControllerV1GetGroupsByUserId(member?.id as any, {
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (groupsByUserId) => {
        groupsStore.setMyGroups(groupsByUserId);
      },
    },
  });

  useGroupsControllerV1ExploreGroups(
    { includeRequests: true, deleted: false },
    {
      query: {
        ...getDefaultQueryOptions(),
        enabled: !!member,
        onSuccess: (exploreGroups) => {
          const sortByAlphabetExploreGroups = exploreGroups.sort((a, b) => {
            if (a.groupName.toUpperCase() < b.groupName.toUpperCase()) {
              return -1;
            }
            if (a.groupName.toUpperCase() > b.groupName.toUpperCase()) {
              return 1;
            }

            return 0;
          });
          groupsStore.setExploreGroups(sortByAlphabetExploreGroups);
        },
      },
    },
  ); // TODO update zustand explore groups

  useGroupsRequestControllerV1GetGroupRequests({
    query: {
      ...getDefaultQueryOptions(),
      enabled: !!member,
      onSuccess: (groupRequests) => {
        groupsStore.setGroupRequests(groupRequests);
      },
    },
  });
};
