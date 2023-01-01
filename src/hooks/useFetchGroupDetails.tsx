import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { deepLinkToApp } from '@/data';
// import zuzstand lib requirement
import {
  usePersistedAuthStore,
  usePersistedCalendarStore,
  usePersistedChallengeStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '@/lib/zustand';
// import react query lib requirement
import { useCalendarControllerGetCalendar } from '@/lib/impakt-dev-api-client/react-query/calendar/calendar';
import { challengesControllerGetMany } from '@/lib/impakt-dev-api-client/react-query/challenges/challenges';
import {
  useGroupsMemberControllerV1AmIMemberOfGroup,
  useGroupsMemberControllerV1AmIRoleOnGroup,
} from '@/lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { GetMembersOfGroupRes } from '@/lib/impakt-dev-api-client/react-query/types';
import {
  useGroupsControllerV1FindOne,
  useGroupsControllerV1FindGroupMembers,
  useGroupsControllerV1GetGroupPinnedChallenges,
} from '@/lib/impakt-dev-api-client/react-query/groups/groups';
import { usePostControllerV1GetMany } from '@/lib/impakt-dev-api-client/react-query/posts/posts';
import { routinesControllerGetRoutines } from '@/lib/impakt-dev-api-client/react-query/routines/routines';
import { useChallengeStatsControllerGetUserBestScore } from '@/lib/impakt-dev-api-client/react-query/default/default';
import { useChallengesLeaderboardControllerV1Usersleaderboard } from '@/lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';

import { normalizeCalendarDataMap } from '@/utils/dayspan';

export const useFetchGroupDetails = () => {
  // global states
  const { member } = usePersistedAuthStore();
  const { setActiveGroup, activeGroup, role, setRole, setMembersOfGroup } =
    usePersistedGroupStore();
  const { setCalendar } = usePersistedCalendarStore();
  const { setGroupPinnedChallenge, setBestScoreOfUser, setChallengeLeaderBoard } =
    usePersistedChallengeStore();
  const { setPosts } = usePersistedForumStore();

  // params checks
  const groupParam = useParams();
  const groupId = parseInt(groupParam?.id ?? '-1', 10);
  // const location = useLocation();
  // const wasGuest = location.state as { wasGuest: boolean } | undefined;
  const isNewGroup = groupId !== activeGroup?.id;

  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');

  // local states
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [isError, setIsError] = React.useState('');

  // reset local active group if re-fetching for new group
  React.useEffect(() => {
    if (isNewGroup) {
      setActiveGroup(null);
    }
  }, []);

  // fetching group
  const { fetchAvailableChallengesForGroup } = useFetchAvailableChallenges();

  const refetchQuery = {
    staleTime: isNewGroup ? 0 : 300000,
    refetchOnWindowFocus: false,
    retry: 0,
  };

  // fetching role related
  const fetchAmIMemberOfGroup = useGroupsMemberControllerV1AmIMemberOfGroup(groupId, {
    query: {
      enabled: !!member,
      ...refetchQuery,
      retry: 1,
      onSuccess: (data) => {
        if (!data) {
          setRole(member ? 'None' : 'Guest');
        }
      },
    },
  });

  const fetchGroupRoleById = useGroupsMemberControllerV1AmIRoleOnGroup(groupId, {
    query: {
      enabled: fetchAmIMemberOfGroup.fetchStatus === 'idle' && fetchAmIMemberOfGroup.data === true,
      ...refetchQuery,
      onSuccess: (roleData) => {
        setRole(roleData.role);
      },
      onError: () => {
        setRole(member ? 'None' : 'Guest');
      },
    },
  });

  // fetching group detail
  const fetchGroupDetail = useGroupsControllerV1FindOne(groupId, {
    query: {
      enabled:
        fetchAmIMemberOfGroup.fetchStatus === 'idle' && fetchGroupRoleById.fetchStatus === 'idle',
      ...refetchQuery,
      onSuccess: async (data) => {
        if (isJoin && groupParam.eventId) {
          // if join link just use the deeplink
          const deepLink = deepLinkToApp(data.id, parseInt(groupParam.eventId, 10));
          window.location = deepLink as any;

          return;
        }

        // if group public
        if (!data.private) {
          if (!member) {
            setRole('Guest');
          }
          setActiveGroup(data);
        }
        // if group private
        if (data.private) {
          if (!member) {
            setIsError("Oops! We couldn't find what you are looking for.");
          } else {
            setActiveGroup({ ...data, isPreview: role === 'None' });
          }
        }
      },
      onError: () => {
        setIsError("Oops! We couldn't find what you are looking for.");
      },
    },
  });
  const detailFetchLogic =
    fetchGroupDetail.isSuccess &&
    ((fetchGroupDetail.data.private &&
      !fetchGroupDetail.data.isPreview &&
      fetchGroupRoleById.data?.role !== 'None' &&
      !!member) ||
      !fetchGroupDetail.data.private);

  const fetchMembersOfGroup = useGroupsControllerV1FindGroupMembers(
    fetchGroupDetail.data?.id ?? -1,
    {},
    {
      query: {
        enabled: detailFetchLogic,
        ...refetchQuery,
        onSuccess: async (membersOfGroup) => {
          setMembersOfGroup(membersOfGroup);

          await fetchAvailableChallengesForGroup(membersOfGroup);
        },
      },
    },
  );

  const fetchPosts = usePostControllerV1GetMany(
    'Group',
    fetchGroupDetail.data?.id ?? -1,
    {},
    {
      query: {
        enabled: detailFetchLogic,
        ...refetchQuery,
        onSuccess: (posts) => {
          setPosts(posts ?? []);
        },
      },
    },
  );

  const fetchGroupCalendar = useCalendarControllerGetCalendar(
    fetchGroupDetail.data?.calendarId ?? -1,
    {
      query: {
        enabled: detailFetchLogic,
        ...refetchQuery,
        onSuccess: (calendarData) => {
          const data = normalizeCalendarDataMap(calendarData);
          setCalendar(data);
        },
        onError: () => {
          setCalendar(null);
        },
      },
    },
  );

  const fetchGroupPinnedChallenge = useGroupsControllerV1GetGroupPinnedChallenges(
    fetchGroupDetail.data?.id ?? -1,
    {
      query: {
        enabled: detailFetchLogic,
        ...refetchQuery,
        onSuccess: async (pinnedChallenge) => {
          setGroupPinnedChallenge(pinnedChallenge);
        },
      },
    },
  );

  const fetchPinnedChallengeUserBestScore = useChallengeStatsControllerGetUserBestScore(
    fetchGroupPinnedChallenge.data?.Challenge?.id ?? 0,
    member?.id ?? 0,
    {
      query: {
        enabled: fetchGroupPinnedChallenge.isSuccess && !!fetchGroupPinnedChallenge.data.Challenge,
        ...refetchQuery,
        onSuccess: (bestScore) => {
          setBestScoreOfUser(bestScore);
        },
      },
    },
  );

  const fetchPinnedChallengeLeaderboard = useChallengesLeaderboardControllerV1Usersleaderboard(
    fetchGroupPinnedChallenge.data?.Challenge?.id ?? 0,
    {},
    {
      query: {
        enabled: fetchGroupPinnedChallenge.isSuccess && !!fetchGroupPinnedChallenge.data.Challenge,
        ...refetchQuery,
        onSuccess: (leaderboard) => {
          setChallengeLeaderBoard(leaderboard);
        },
      },
    },
  );

  return {
    group: activeGroup,
    isGroupDetailsLoading:
      fetchAmIMemberOfGroup.isFetching ||
      fetchGroupRoleById.isFetching ||
      fetchGroupDetail.isFetching ||
      fetchMembersOfGroup.isFetching ||
      fetchPosts.isFetching ||
      fetchGroupCalendar.isFetching ||
      fetchGroupPinnedChallenge.isFetching ||
      fetchPinnedChallengeUserBestScore.isFetching ||
      fetchPinnedChallengeLeaderboard.isFetching,
    isError,
  };
};

// TODO once the backend refactored for this feat it will moved to react query
const useFetchAvailableChallenges = () => {
  const { member } = usePersistedAuthStore();
  const { setAvailableGroupChallenges, setAvailableGroupRoutines } = usePersistedChallengeStore();
  const fetchAvailableChallengesForGroup = async (membersOfGroup: GetMembersOfGroupRes) => {
    const admin = membersOfGroup.Members.find(({ role }) => role === 'Creator');
    const moderator = membersOfGroup.Members.find(
      ({ role, User }) => role === 'Moderator' && User.id === member?.id,
    );
    if (!admin) return;

    const groupAdminChallenges = await challengesControllerGetMany({
      validOnly: true,
      Routine: true,
      creatorId: admin.User.id,
      Creator: true,
    });

    const groupAdminRoutines = await routinesControllerGetRoutines({
      creatorId: admin.User.id,
      TimelineBlocks: true,
      Creator: true,
    });

    if (moderator) {
      const groupModeratorChallenges = await challengesControllerGetMany({
        validOnly: true,
        Routine: true,
        creatorId: moderator?.User.id,
        Creator: true,
      });

      const groupModeratorChallengesRoutines = await routinesControllerGetRoutines({
        creatorId: moderator?.User.id,
        TimelineBlocks: true,
        Creator: true,
      });
      setAvailableGroupChallenges([...groupAdminChallenges, ...groupModeratorChallenges]);
      setAvailableGroupRoutines([...groupAdminRoutines, ...groupModeratorChallengesRoutines]);

      return;
    }
    setAvailableGroupChallenges(groupAdminChallenges);
    setAvailableGroupRoutines(groupAdminRoutines);
  };

  return { fetchAvailableChallengesForGroup };
};
