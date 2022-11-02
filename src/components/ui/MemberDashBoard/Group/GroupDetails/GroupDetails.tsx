import React from 'react';
import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { fetchCalendarById } from '../../../../../lib/redux/slices/calendar/actions/fetchCalendarById';
import { fetchAvailableChallengesForGroup } from '../../../../../lib/redux/slices/challenges/actions/fetchAvailableChallengesForGroup';
import { cleanCalendar } from '../../../../../lib/redux/slices/calendar/calendarSlice';
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
import { usePersistedGroupStore } from '../../../../../lib/zustand';

const GroupDetails: React.FC = () => {
  const { setActiveGroup, setRole, setMembersOfGroup } = usePersistedGroupStore();

  const groupParam = useParams();
  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');
  // const [show, setShow] = React.useState<null | string>(null);
  // TODO enabled check here;

  const fetchGroupDetailById = useGroupsControllerV1FindOne(parseInt(groupParam?.id ?? '0', 10), {
    query: { ...getDefaultQueryOptions(), enabled: false },
  }); // TODO Update activeGroup on zustand
  const fetchMembersOfGroup = useGroupsControllerV1FindGroupMembers(
    parseInt(groupParam?.id ?? '0', 10),
    {},
    { query: { ...getDefaultQueryOptions(), enabled: false } },
  ); // TODO update membersOfGroup on zustand

  const fetchAmIMemberOfGroup = useGroupsMemberControllerV1AmIMemberOfGroup(
    parseInt(groupParam?.id ?? '0', 10),
    { query: { ...getDefaultQueryOptions(), enabled: false } },
  );

  const fetchGroupRoleById = useGroupsMemberControllerV1AmIRoleOnGroup(
    parseInt(groupParam?.id ?? '0', 10),
    { query: { ...getDefaultQueryOptions(), enabled: false } },
  ); // TODO update role on zustand

  const fetchPosts = usePostControllerV1GetMany('Group', parseInt(groupParam?.id ?? '0', 10)); // TODO update posts on zustand

  const [isNotFound, setIsNotFound] = React.useState<string>('');

  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);

  const getGroupDetail = async () => {
    if (groupParam.id) {
      const groupDetailQuery = await fetchGroupDetailById.refetch();

      if (groupDetailQuery.isRefetchError) {
        if (groupDetailQuery.error.response?.status === 404) {
          setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        } else {
          setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }

        return;
      }

      if (groupDetailQuery.isSuccess) {
        // if join link just use the deeplink
        if (isJoin && groupParam.eventId) {
          const deepLink = deepLinkToApp(
            groupDetailQuery.data.id,
            parseInt(groupParam.eventId, 10),
          );
          window.location = deepLink as any;
        }
        setActiveGroup(groupDetailQuery.data);
        const amIMemberOfGroup = await fetchAmIMemberOfGroup.refetch();
        if (amIMemberOfGroup) {
          const role = await fetchGroupRoleById.refetch();
          if (role.isSuccess) {
            setRole(role.data.role);
            const membersOfGroup = await fetchMembersOfGroup.refetch();
            if (membersOfGroup.isSuccess) {
              setMembersOfGroup(membersOfGroup.data);
            }
            const posts = await fetchPosts.refetch();
            await dispatch(
              fetchCalendarById({ calendarId: groupDetailQuery.data.calendarId, type: 'Group' }),
            );
            await dispatch(fetchAvailableChallengesForGroup());
          }
        }
      }
    }
  };

  React.useEffect(() => {
    getGroupDetail();
  }, []);

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

  // if (isLoading) return <CircularProgress isIndeterminate />;
  if (isNotFound.length > 0)
    return (
      <Text fontWeight="hairline" fontSize="2xl">
        {isNotFound}
      </Text>
    );

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
export default GroupDetails;
