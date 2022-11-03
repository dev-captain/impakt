import React from 'react';
import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
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
import { getDefaultQueryOptions } from '../../../../../lib/impakt-dev-api-client/utils';
import { usePostControllerV1GetMany } from '../../../../../lib/impakt-dev-api-client/react-query/posts/posts';
import {
  usePersistedCalendarStore,
  usePersistedChallengeStore,
  usePersistedForumStore,
  usePersistedGroupStore,
} from '../../../../../lib/zustand';
import { calendarControllerGetCalendar } from '../../../../../lib/impakt-dev-api-client/react-query/calendar/calendar';
import { GetMembersOfGroupRes } from '../../../../../lib/impakt-dev-api-client/react-query/types';
import { likeControllerGetChallengeLikes } from '../../../../../lib/impakt-dev-api-client/react-query/likes/likes';
import { challengeStatsControllerGetChallengeAttemptsForAllUsers } from '../../../../../lib/impakt-dev-api-client/react-query/default/default';
import { challengesControllerGetMany } from '../../../../../lib/impakt-dev-api-client/react-query/challenges/challenges';

const GroupDetails: React.FC = () => {
  const { setActiveGroup, setRole, setMembersOfGroup } = usePersistedGroupStore();
  const { setCalendar } = usePersistedCalendarStore();
  const { setPosts } = usePersistedForumStore();

  const groupParam = useParams();
  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');
  const isNaNParam = parseInt(groupParam.id ?? '-asd', 10);
  // const [show, setShow] = React.useState<null | string>(null);

  // TODO once backend refactored for challenges will be moved to react-query
  const { fetchAvailableChallengesForGroup } = useFetchAvailableChallenges();
  const fetchGroupDetailById = useGroupsControllerV1FindOne(parseInt(groupParam?.id ?? '-1', 10), {
    query: { ...getDefaultQueryOptions(), refetchOnMount: true, retry: false },
  });

  const fetchMembersOfGroup = useGroupsControllerV1FindGroupMembers(
    parseInt(groupParam?.id ?? '0', 10),
    {},
    {
      query: {
        ...getDefaultQueryOptions(),
        refetchOnMount: true,
        retry: false,
        enabled: fetchGroupDetailById.isSuccess,
      },
    },
  );

  const fetchAmIMemberOfGroup = useGroupsMemberControllerV1AmIMemberOfGroup(
    parseInt(groupParam?.id ?? '0', 10),
    {
      query: {
        ...getDefaultQueryOptions(),
        refetchOnMount: true,
        retry: false,
        enabled: fetchGroupDetailById.isSuccess,
      },
    },
  );

  const fetchGroupRoleById = useGroupsMemberControllerV1AmIRoleOnGroup(
    parseInt(groupParam?.id ?? '0', 10),
    {
      query: {
        ...getDefaultQueryOptions(),
        refetchOnMount: true,
        retry: false,
        enabled: fetchGroupDetailById.isSuccess,
      },
    },
  );

  const fetchPosts = usePostControllerV1GetMany(
    'Group',
    parseInt(groupParam?.id ?? '0', 10),
    {},
    {
      query: {
        ...getDefaultQueryOptions(),
        refetchOnMount: true,
        retry: false,
        enabled: fetchGroupDetailById.isSuccess,
      },
    },
  );

  const [isNotFound, setIsNotFound] = React.useState<string>('');

  // const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);

  const getGroupDetail = async () => {
    if (
      fetchGroupDetailById.isSuccess &&
      fetchAmIMemberOfGroup.isSuccess &&
      fetchGroupRoleById.isSuccess &&
      fetchMembersOfGroup.isSuccess &&
      fetchPosts.isSuccess
    ) {
      if (isJoin && groupParam.eventId) {
        // if join link just use the deeplink
        const deepLink = deepLinkToApp(
          fetchGroupDetailById.data.id,
          parseInt(groupParam.eventId, 10),
        );
        window.location = deepLink as any;
      }

      fetchAvailableChallengesForGroup(fetchMembersOfGroup.data);
      const calendar = await calendarControllerGetCalendar(fetchGroupDetailById.data.calendarId);

      setActiveGroup(fetchGroupDetailById.data);
      setRole(fetchGroupRoleById.data.role);
      setMembersOfGroup(fetchMembersOfGroup.data);
      setCalendar(calendar);
      setPosts(fetchPosts.data ?? []);
      // Todo update calendar data on zustand
    }
  };

  // Good path flow init
  React.useEffect(() => {
    getGroupDetail();
  }, [
    fetchGroupDetailById.isSuccess,
    fetchAmIMemberOfGroup.isSuccess,
    fetchGroupRoleById.isSuccess,
    fetchMembersOfGroup.isSuccess,
    fetchPosts.isSuccess,
  ]);

  // Bad paths flow init
  React.useEffect(() => {
    if (Number.isNaN(isNaNParam)) {
      setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
    }

    return () => setActiveGroup(null);
  }, []);

  React.useEffect(() => {
    if (fetchGroupDetailById.isError) {
      if (fetchGroupDetailById.error.response?.status === 404) {
        setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
      } else {
        setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
      }
    }
  }, [fetchGroupDetailById.isError]);

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

  if (fetchGroupDetailById.isLoading || fetchGroupDetailById.isRefetching) return null;

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
};

// TODO once the backend refactored for this feat it will moved to react query
const useFetchAvailableChallenges = () => {
  const { setAvailableGroupChallenges } = usePersistedChallengeStore();
  const fetchAvailableChallengesForGroup = async (membersOfGroup: GetMembersOfGroupRes) => {
    const admin = membersOfGroup.Members.filter(({ role }) => role === 'Creator')[0];

    const myChallengesRes = await challengesControllerGetMany({
      validOnly: false,
      Routine: true,
      creatorId: admin.User.id,
    });

    const challengesLikePromises = myChallengesRes.map(({ id }) =>
      likeControllerGetChallengeLikes(id),
    );

    const attemptsOnPromises = myChallengesRes.map(async ({ id }) =>
      challengeStatsControllerGetChallengeAttemptsForAllUsers(id),
    );

    const challengesLikes = await Promise.all([...challengesLikePromises]);
    const attempts = await Promise.all([...attemptsOnPromises]);

    const res = myChallengesRes.map((d, index) => {
      return { challenge: { ...d }, attempts: attempts[index], likes: challengesLikes[index] };
    });
    setAvailableGroupChallenges(res);
  };

  return { fetchAvailableChallengesForGroup };
};
export default GroupDetails;
