import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
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
import { getDefaultQueryOptions } from '../lib/impakt-dev-api-client/utils';
import { GroupsSlice } from '../lib/zustand/stores/groupsStore';

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
  const location = useLocation();
  const wasGuest = location.state as { wasGuest: boolean } | undefined;

  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');

  const isNewGroup = parseInt(groupParam.id ?? '-asd', 10) !== activeGroup?.id;

  // local states
  const [isGroupDetailsLoading, setIsGroupDetailsLoading] = React.useState(isNewGroup);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [isError, setIsError] = React.useState('');

  // fetching group relateds
  const { fetchAvailableChallengesForGroup } = useFetchAvailableChallenges();

  const fetchGroupDetail = useGroupsControllerV1FindOne(parseInt(groupParam?.id ?? '-1', 10), {
    query: {
      ...getDefaultQueryOptions(),
      refetchOnWindowFocus: true,
      staleTime: isNewGroup || wasGuest ? 0 : 120000,
      refetchInterval: 300000,
      onSuccess: async (data) => {
        if (isJoin && groupParam.eventId) {
          // if join link just use the deeplink
          const deepLink = deepLinkToApp(data.id, parseInt(groupParam.eventId, 10));
          window.location = deepLink as any;

          return;
        }

        let memberRole: GroupsSlice['role'] = 'None';

        const isMemberOfGroup = member ? await fetchAmIMemberOfGroup.refetch() : { data: false };

        if (isMemberOfGroup.data) {
          const roleRes = await fetchGroupRoleById.refetch();

          memberRole = roleRes.data!.role;
        }

        // if group public
        if (!data.private) {
          await fetchMembersOfGroup.refetch();
          await fetchPosts.refetch();
          await fetchGroupCalendar.refetch();
          await fetchGroupPinnedChallenge.refetch();
          setActiveGroup(data);
        }

        // if group private
        if (data.private) {
          // check if preview
          if (!data.isPreview && member) {
            if (memberRole !== 'None') {
              // edge check if user not try to re-join group
              await fetchMembersOfGroup.refetch();
              await fetchPosts.refetch();
              await fetchGroupCalendar.refetch();
              await fetchGroupPinnedChallenge.refetch();
            }
          }
          if (!member) {
            setIsError("Oops! We couldn't find what you are looking for.");
          } else {
            setActiveGroup({ ...data, isPreview: memberRole === 'None' });
          }
        }

        setRole(!member ? 'Guest' : memberRole);

        setIsGroupDetailsLoading(false);
      },
      onError: () => {
        // if (err.response?.status === 404 || err.response?.status === 400) {
        //   setIsError("Oops! We couldn't find what you are looking for.");
        // } else {
        //   setIsError('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        // }
        setIsError("Oops! We couldn't find what you are looking for.");
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
    {},
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
    if (isNewGroup || wasGuest) {
      setActiveGroup(null);
    }
  }, []);

  return { group: activeGroup, isGroupDetailsLoading, isError };
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
