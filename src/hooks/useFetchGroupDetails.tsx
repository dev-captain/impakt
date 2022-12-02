import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { deepLinkToApp } from '../data';
import { useCalendarControllerGetCalendar } from '../lib/impakt-dev-api-client/react-query/calendar/calendar';
import { challengesControllerGetMany } from '../lib/impakt-dev-api-client/react-query/challenges/challenges';
import {
  useGroupsMemberControllerV1AmIMemberOfGroup,
  useGroupsMemberControllerV1AmIRoleOnGroup,
} from '../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { GetMembersOfGroupRes } from '../lib/impakt-dev-api-client/react-query/types';
import {
  useGroupsControllerV1FindOne,
  useGroupsControllerV1FindGroupMembers,
  useGroupsControllerV1GetGroupPinnedChallenges,
} from '../lib/impakt-dev-api-client/react-query/groups/groups';
import { usePostControllerV1GetMany } from '../lib/impakt-dev-api-client/react-query/posts/posts';
import { routinesControllerGetRoutines } from '../lib/impakt-dev-api-client/react-query/routines/routines';
import {
  usePersistedAuthStore,
  usePersistedCalendarStore,
  usePersistedChallengeStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../lib/zustand';
import { useChallengeStatsControllerGetUserBestScore } from '../lib/impakt-dev-api-client/react-query/default/default';
import { useChallengesLeaderboardControllerV1Usersleaderboard } from '../lib/impakt-dev-api-client/react-query/leaderboard/leaderboard';

export const useFetchGroupDetails = () => {
  // console.log('render');
  // global states
  const { member } = usePersistedAuthStore();
  const { setActiveGroup, activeGroup, setRole, setMembersOfGroup } = usePersistedGroupStore();
  const { setCalendar } = usePersistedCalendarStore();
  const { setGroupPinnedChallenge, setBestScoreOfUser, setChallengeLeaderBoard } =
    usePersistedChallengeStore();
  const { setPosts } = usePersistedForumStore();

  // params checks
  const groupParam = useParams();
  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');
  const newGroup = parseInt(groupParam.id ?? '-asd', 10) !== activeGroup?.id;

  // local states
  const [isGroupDetailsLoading, setIsGroupDetailsLoading] = React.useState(newGroup);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [isError, setIsError] = React.useState('');

  // fetching group relateds
  const { fetchAvailableChallengesForGroup } = useFetchAvailableChallenges();

  const fetchGroupDetail = useGroupsControllerV1FindOne(parseInt(groupParam?.id ?? '-1', 10), {
    query: {
      retry: 0,
      refetchOnMount: true,
      enabled: newGroup,
      // initialData: activeGroup ?? undefined,
      onSuccess: async (data) => {
        if (isJoin && groupParam.eventId) {
          // if join link just use the deeplink
          const deepLink = deepLinkToApp(data.id, parseInt(groupParam.eventId, 10));
          window.location = deepLink as any;

          return;
        }

        if (!data.isPreview || !data.private) {
          await fetchMembersOfGroup.refetch();
          const isMemberOfGroup = await fetchAmIMemberOfGroup.refetch();
          if (isMemberOfGroup.data) {
            await fetchGroupRoleById.refetch();
          } else {
            setRole('None');
          }
          await fetchPosts.refetch();
          await fetchGroupCalendar.refetch();
          await fetchGroupPinnedChallenge.refetch();
        } else {
          setRole('None');
        }
        setActiveGroup(data);
        setIsGroupDetailsLoading(false);
      },
      onError: (err) => {
        if (err.response?.status === 404 || err.response?.status === 400) {
          setIsError('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        } else {
          setIsError('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }
        setIsGroupDetailsLoading(false);
      },
    },
  });

  const fetchMembersOfGroup = useGroupsControllerV1FindGroupMembers(
    parseInt(groupParam?.id ?? '0', 10),
    {},
    {
      query: {
        enabled: false,
        refetchOnMount: false,
        retry: 0,
        onSuccess: async (membersOfGroup) => {
          setMembersOfGroup(membersOfGroup);

          await fetchAvailableChallengesForGroup(membersOfGroup);
        },
      },
    },
  );

  const fetchAmIMemberOfGroup = useGroupsMemberControllerV1AmIMemberOfGroup(
    parseInt(groupParam?.id ?? '0', 10),
    {
      query: {
        enabled: false,
        refetchOnMount: false,
        retry: 0,
      },
    },
  );

  const fetchGroupRoleById = useGroupsMemberControllerV1AmIRoleOnGroup(
    parseInt(groupParam?.id ?? '0', 10),
    {
      query: {
        enabled: false,
        refetchOnMount: false,
        retry: 0,
        onSuccess: (roleData) => {
          setRole(roleData.role);
        },
      },
    },
  );

  const fetchPosts = usePostControllerV1GetMany(
    'Group',
    parseInt(groupParam?.id ?? '0', 10),
    {},
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: (posts) => {
          setPosts(posts ?? []);
        },
      },
    },
  );

  const fetchGroupCalendar = useCalendarControllerGetCalendar(
    fetchGroupDetail.data?.calendarId ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: (calendarData) => {
          setCalendar(calendarData);
        },
        onError: () => {
          setCalendar(null);
        },
      },
    },
  );

  const fetchGroupPinnedChallenge = useGroupsControllerV1GetGroupPinnedChallenges(
    parseInt(groupParam?.id ?? '0', 10),
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: async (pinnedChallenge) => {
          setGroupPinnedChallenge(pinnedChallenge);
          if (pinnedChallenge.Challenge) {
            await fetchPinnedChallengeLeaderboard.refetch();
            await fetchPinnedChallengeUserBestScore.refetch();
          }
        },
      },
    },
  );
  const fetchPinnedChallengeUserBestScore = useChallengeStatsControllerGetUserBestScore(
    fetchGroupPinnedChallenge.data?.Challenge?.id ?? 0,
    member?.id ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: (bestScore) => {
          setBestScoreOfUser(bestScore);
        },
      },
    },
  );

  const fetchPinnedChallengeLeaderboard = useChallengesLeaderboardControllerV1Usersleaderboard(
    fetchGroupPinnedChallenge.data?.Challenge?.id ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: (leaderboard) => {
          setChallengeLeaderBoard(leaderboard);
        },
      },
    },
  );

  React.useEffect(() => {
    if (newGroup) {
      setActiveGroup(null);
    }
  }, []);

  return { group: activeGroup, isGroupDetailsLoading, isError };
};

// TODO once the backend refactored for this feat it will moved to react query
const useFetchAvailableChallenges = () => {
  const { setAvailableGroupChallenges, setAvailableGroupRoutines } = usePersistedChallengeStore();
  const fetchAvailableChallengesForGroup = async (membersOfGroup: GetMembersOfGroupRes) => {
    const admin = membersOfGroup.Members.find(({ role }) => role === 'Creator');
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

    setAvailableGroupChallenges(groupAdminChallenges);
    setAvailableGroupRoutines(groupAdminRoutines);
  };

  return { fetchAvailableChallengesForGroup };
};
