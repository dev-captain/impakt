import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
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
    query: {
      ...getDefaultQueryOptions(),
      refetchOnMount: true,
      retry: false,
      staleTime: 0,
      cacheTime: 0,
    },
  });

  const fetchMembersOfGroup = useGroupsControllerV1FindGroupMembers(
    parseInt(groupParam?.id ?? '0', 10),
    {},
    {
      query: {
        ...getDefaultQueryOptions(),
        refetchOnMount: true,
        retry: false,
        staleTime: 0,
        cacheTime: 0,
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
        staleTime: 0,
        cacheTime: 0,
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
        staleTime: 0,
        cacheTime: 0,
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
        staleTime: 0,
        cacheTime: 0,
      },
    },
  );

  const [isNotFound, setIsNotFound] = React.useState<string>('');

  // const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);

  const getActiveGroup = () => {
    if (fetchGroupDetailById.isFetched) {
      if (fetchGroupDetailById.isSuccess) {
        if (isJoin && groupParam.eventId) {
          // if join link just use the deeplink
          const deepLink = deepLinkToApp(
            fetchGroupDetailById.data.id,
            parseInt(groupParam.eventId, 10),
          );
          window.location = deepLink as any;
        }

        setActiveGroup(fetchGroupDetailById.data);
      }
    }
  };

  const getRole = () => {
    if (fetchAmIMemberOfGroup.isFetched) {
      if (fetchAmIMemberOfGroup.isSuccess && fetchAmIMemberOfGroup.data) {
        if (fetchGroupRoleById.isFetched) {
          if (fetchGroupRoleById.isSuccess) {
            setRole(fetchGroupRoleById.data.role);
          }
        }
      }
    }
  };

  const getGroupCalendar = async () => {
    if (fetchGroupDetailById.isFetched) {
      if (fetchGroupDetailById.isSuccess) {
        const calendar = await calendarControllerGetCalendar(fetchGroupDetailById.data.calendarId);
        setCalendar(calendar);
      }
    }
  };

  const getGroupForum = async () => {
    if (fetchPosts.isFetched) {
      if (fetchPosts.isSuccess) {
        // TODO on the backend sort new ones to old ones for comment & posts
        const reversedCommentPostsOrder = fetchPosts.data.map((postD) => {
          return { ...postD, Comment: postD.Comment.reverse() };
        });

        setPosts(reversedCommentPostsOrder ?? []);
      }
    }
  };

  const getMembersOfGroup = () => {
    if (fetchMembersOfGroup.isFetched) {
      if (fetchMembersOfGroup.isSuccess) {
        setMembersOfGroup(fetchMembersOfGroup.data);
      }
    }
  };

  const getAvailableChallenges = async () => {
    if (fetchMembersOfGroup.isFetched) {
      if (fetchMembersOfGroup.isSuccess) {
        await fetchAvailableChallengesForGroup(fetchMembersOfGroup.data);
      }
    }
  };

  // Good paths flows init
  React.useEffect(() => {
    getActiveGroup();
  }, [fetchGroupDetailById.isFetched]);

  React.useEffect(() => {
    getRole();
  }, [fetchAmIMemberOfGroup.isFetched, fetchGroupRoleById.isFetched]);

  React.useEffect(() => {
    getGroupCalendar();
  }, [fetchGroupDetailById.isFetched]);

  React.useEffect(() => {
    getGroupForum();
  }, [fetchPosts.isFetched]);

  React.useEffect(() => {
    getMembersOfGroup();
  }, [fetchMembersOfGroup.isFetched]);

  React.useEffect(() => {
    getAvailableChallenges();
  }, [fetchMembersOfGroup.isFetched]);

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

  React.useEffect(() => {
    if (fetchGroupRoleById.isError) {
      setRole('None');
    }
  }, [fetchGroupRoleById.isError]);

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
