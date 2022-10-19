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
import { CalendarType } from '../../../../../lib/redux/slices/calendar/types';
import { fetchAvailableChallengesForGroup } from '../../../../../lib/redux/slices/challenges/actions/fetchAvailableChallengesForGroup';
import { cleanActiveGroup } from '../../../../../lib/redux/slices/groups/groupsSlice';
import { cleanCalendar } from '../../../../../lib/redux/slices/calendar/calendarSlice';
import { deepLinkToApp } from '../../../../../data';

const GroupDetails: React.FC = () => {
  // const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState<string>('');
  const groupParam = useParams();
  const isJoin = groupParam.id && groupParam.eventId && useLocation().pathname.includes('join');
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
          const deepLink = deepLinkToApp(group.id, parseInt(groupParam.eventId, 10));
          window.location = deepLink as any;

          window.setTimeout(function () {
            navigate('/download');
            toast({
              title: 'Error',
              description: 'You have to install this app on your device',
              isClosable: true,
              duration: 8000,
              status: 'error',
            });
          }, 2000);
        }
      } catch (e: any) {
        if (e.response.status === 404)
          setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        else {
          setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }
      } finally {
        try {
          await dispatch(fetchGroupRoleById(group.id));
        } finally {
          await dispatch(
            fetchCalendarById({ calendarId: group.calendarId, type: CalendarType.Group }),
          );
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
