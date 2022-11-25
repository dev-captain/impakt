import React, { useEffect } from 'react';
import { Box, Text, HStack, CircularProgress } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { deepLinkToApp } from '../../../../../data';
import {
  useGroupsControllerV1FindGroupMembers,
  useGroupsControllerV1FindOne,
} from '../../../../../lib/impakt-dev-api-client/react-query/groups/groups';
import {
  useGroupsMemberControllerV1AmIMemberOfGroup,
  useGroupsMemberControllerV1AmIRoleOnGroup,
} from '../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
// import { getDefaultQueryOptions } from '../../../../../lib/impakt-dev-api-client/utils';
import { usePostControllerV1GetMany } from '../../../../../lib/impakt-dev-api-client/react-query/posts/posts';
import {
  usePersistedCalendarStore,
  usePersistedChallengeStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../../../lib/zustand';
import { GetMembersOfGroupRes } from '../../../../../lib/impakt-dev-api-client/react-query/types';
import { challengesControllerGetMany } from '../../../../../lib/impakt-dev-api-client/react-query/challenges/challenges';
import { routinesControllerGetRoutines } from '../../../../../lib/impakt-dev-api-client/react-query/routines/routines';
import { useCalendarControllerGetCalendar } from '../../../../../lib/impakt-dev-api-client/react-query/calendar-events-data-model/calendar-events-data-model';

const GroupDetails: React.FC = () => {
  const [isNotFound, setIsNotFound] = React.useState<string>('');
  const { setActiveGroup, activeGroup, setRole, setMembersOfGroup } = usePersistedGroupStore();
  const { setCalendar } = usePersistedCalendarStore();
  const { setPosts } = usePersistedForumStore();

  const groupParam = useParams();
  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');
  const newGroup = parseInt(groupParam.id ?? '-asd', 10) !== activeGroup?.id;
  // const [show, setShow] = React.useState<null | string>(null);

  // TODO once backend refactored for challenges will be moved to react-query
  const { fetchAvailableChallengesForGroup } = useFetchAvailableChallenges();
  const fetchGroupDetailById = useGroupsControllerV1FindOne(parseInt(groupParam?.id ?? '-1', 10), {
    query: {
      retry: 0,
      refetchOnMount: true,
      enabled: newGroup,
      initialData: activeGroup ?? undefined,
      onSuccess: async (data) => {
        if (isJoin && groupParam.eventId) {
          // if join link just use the deeplink
          const deepLink = deepLinkToApp(data.id, parseInt(groupParam.eventId, 10));
          window.location = deepLink as any;

          return;
        }
        await fetchMembersOfGroup.refetch();
        await fetchAmIMemberOfGroup.refetch();
        await fetchGroupRoleById.refetch();
        await fetchPosts.refetch();
        await fetchGroupCalendar.refetch();
        setActiveGroup(data);
      },
      onError: (err) => {
        if (err.response?.status === 404 || err.response?.status === 400) {
          setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        } else {
          setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }
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
        onError: () => {
          setRole('None');
        },
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
          // TODO on the backend sort new ones to old ones for comment & posts
          const reversedCommentPostsOrder = posts.map((postD) => {
            return { ...postD, Comment: postD.Comment.reverse() };
          });

          setPosts(reversedCommentPostsOrder ?? []);
        },
      },
    },
  );

  const fetchGroupCalendar = useCalendarControllerGetCalendar(
    fetchGroupDetailById.data?.calendarId ?? 0,
    {
      query: {
        enabled: false,
        retry: 0,
        refetchOnMount: false,
        onSuccess: (calendarData) => {
          setCalendar(calendarData);
        },
      },
    },
  );

  // React.useEffect(() => {
  //   const showTip = localStorage.getItem('showTip');
  //   if (showTip) {
  //     setShow(showTip);
  //   }
  // }, []);

  // const hide = () => {
  //   localStorage.setItem('showTip', 'false');
  //   setShow('false');
  // };

  if (isNotFound.length > 0)
    return (
      <Text fontWeight="hairline" fontSize="2xl">
        {isNotFound}
      </Text>
    );
  if (
    fetchGroupDetailById.isLoading ||
    fetchGroupDetailById.isRefetching ||
    fetchAmIMemberOfGroup.isLoading ||
    fetchAmIMemberOfGroup.isRefetching ||
    fetchGroupRoleById.isRefetching ||
    fetchGroupRoleById.isLoading ||
    fetchPosts.isLoading ||
    fetchPosts.isRefetching ||
    fetchMembersOfGroup.isLoading ||
    fetchMembersOfGroup.isRefetching ||
    fetchGroupCalendar.isFetching ||
    fetchGroupCalendar.isRefetching
  )
    return <CircularProgress isIndeterminate />;
  if (!activeGroup) return null;

  if (activeGroup)
    return (
      <Box w="full" as="section" id="general-section">
        {/* {(!localStorage.getItem('showTip') || !show) && activeGroup?.role === GroupRole.Creator ? (
        <GroupWelcome hideGroupWelcome={hide} />
      ) : ( */}
        <HStack w="100%" display="block">
          <Banner />
          <Content />
        </HStack>
        {/* )} */}
      </Box>
    );

  return null;
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
export default GroupDetails;
