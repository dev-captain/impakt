import React from 'react';
import { Box, Text, CircularProgress, HStack, useToast } from '@chakra-ui/react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchGroupDetailById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupDetailById';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { fetchGroupRoleById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupRoleById';
import { fetchMembersOfGroup } from '../../../../../lib/redux/slices/groups/actions/fetchMembersOfGroup';
import { fetchCalendarById } from '../../../../../lib/redux/slices/calendar/actions/fetchCalendarById';
import { fetchAvailableChallengesForGroup } from '../../../../../lib/redux/slices/challenges/actions/fetchAvailableChallengesForGroup';
import {
  cleanActiveGroup,
  setRoleAsNone,
} from '../../../../../lib/redux/slices/groups/groupsSlice';
import { cleanCalendar } from '../../../../../lib/redux/slices/calendar/calendarSlice';
import { fetchPosts } from '../../../../../lib/redux/slices/forum/post_actions/fetchPosts';
import { cleanForums } from '../../../../../lib/redux/slices/forum/postsSlice';
import { fetchAmIMemberOfGroup } from '../../../../../lib/redux/slices/groups/actions/fetchAmIMemberOfGroup';
// import { deepLinkToApp } from '../../../../../data';

const GroupDetails: React.FC = () => {
  // const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState<string>('');
  const groupParam = useParams();
  const isJoin =
    groupParam.id &&
    groupParam.eventId &&
    groupParam.eventId !== 'join' &&
    useLocation().pathname.includes('join');

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
  const navigate = useNavigate();
  const toast = useToast();

  const getGroupDetail = async () => {
    if (groupParam?.id) {
      let group: any;
      try {
        group = await dispatch(fetchGroupDetailById(groupParam.id)).unwrap();
        if (isJoin && groupParam.eventId) {
          // const deepLink = deepLinkToApp(group.id, parseInt(groupParam.eventId, 10));
          // const now = new Date().valueOf();
          // setTimeout(function () {
          //   if (new Date().valueOf() - now > 100) return;
          //   navigate('/download');
          //   toast({
          //     title: 'Error',
          //     description: 'You have to install this app on your device',
          //     isClosable: true,
          //     duration: 8000,
          //     status: 'error',
          //   });
          // }, 5000);
          // window.location = deepLink as any;
          // window.setTimeout(function () {
        }
      } catch (e: any) {
        if (e.statusCode === 404)
          setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        else {
          setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }
      } finally {
        try {
          const amIMemberOfGroup = await dispatch(fetchAmIMemberOfGroup(group.id)).unwrap();
          if (amIMemberOfGroup) {
            await dispatch(fetchGroupRoleById(group.id));
          } else {
            dispatch(setRoleAsNone());
          }
        } finally {
          await dispatch(fetchPosts({ referenceType: 'Group', referenceId: group.id }));
          await dispatch(fetchCalendarById({ calendarId: group.calendarId, type: 'Group' }));
          await dispatch(fetchAvailableChallengesForGroup());
          await dispatch(fetchMembersOfGroup(group.id));
          // fetch my challanges for modal if user creator
        }
      }
    }
  };

  React.useEffect(() => {
    getGroupDetail();

    return () => {
      dispatch(cleanActiveGroup());
      dispatch(cleanForums());
      dispatch(cleanCalendar());
    };
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

  if (isLoading) return <CircularProgress isIndeterminate />;
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
