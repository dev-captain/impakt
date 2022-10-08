import React from 'react';
import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
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

const GroupDetails: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState<string>('');
  const groupParam = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);

  const getGroupDetail = async () => {
    if (groupParam?.id) {
      let group: any;
      try {
        group = await dispatch(fetchGroupDetailById(groupParam.id)).unwrap();
      } catch (e: any) {
        console.log(e.response.status);
        if (e.response.status === 404)
          setIsNotFound('404 GROUP NOT FOUND. PLEASE MAKE SURE THE GROUP EXISTS');
        else {
          setIsNotFound('PLEASE MAKE SURE YOU HAVE THE CORRECT ACCESS RIGHTS AND THE GROUP EXISTS');
        }

        console.log(e.response.status);
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
      console.log('runned');
      dispatch(cleanActiveGroup());
      dispatch(cleanCalendar());
    };
  }, []);

  React.useEffect(() => {
    const showTip = localStorage.getItem('showTip');
    if (showTip) {
      setShow(showTip);
    }
  }, []);

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
