import React from 'react';
import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GroupWelcome from '../../GroupWelcome';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchGroupDetailById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupDetailById';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { fetchGroupRoleById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupRoleById';
import { GroupRole } from '../../../../../lib/redux/slices/groups/types';
import { fetchMembersOfGroup } from '../../../../../lib/redux/slices/groups/actions/fetchMembersOfGroup';
import { fetchCalendarById } from '../../../../../lib/redux/slices/calendar/actions/fetchCalendarById';
import { CalendarType } from '../../../../../lib/redux/slices/calendar/types';
import { fetchAvailableChallengesForGroup } from '../../../../../lib/redux/slices/challenges/actions/fetchAvailableChallengesForGroup';

const GroupDetails: React.FC = () => {
  const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const groupParam = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);

  const getGroupDetail = async () => {
    if (groupParam?.id) {
      try {
        const group = await dispatch(fetchGroupDetailById(groupParam.id)).unwrap();
        const roleD = await dispatch(fetchGroupRoleById(group.id)).unwrap();
        await dispatch(fetchMembersOfGroup(group.id)).unwrap();
        await dispatch(
          fetchCalendarById({ calendarId: group.calendarId, type: CalendarType.Group }),
        );
        // fetch my challanges for modal if user creator
        if (roleD.role === GroupRole.Creator) {
          await dispatch(fetchAvailableChallengesForGroup());
        }
      } catch (e) {
        setIsNotFound(true);
      }
    }
  };

  React.useEffect(() => {
    getGroupDetail();
  }, []);

  React.useEffect(() => {
    const showTip = localStorage.getItem('showTip');
    if (showTip) {
      setShow(showTip);
    }
  }, []);

  const hide = () => {
    localStorage.setItem('showTip', 'false');
    setShow('false');
  };

  if (isLoading) return <CircularProgress isIndeterminate />;
  if (isNotFound) return <Text>404 Group not found</Text>;

  return (
    <Box w="full" as="section" id="general-section">
      {(!localStorage.getItem('showTip') || !show) && activeGroup?.role === GroupRole.Creator ? (
        <GroupWelcome hideGroupWelcome={hide} />
      ) : (
        <HStack w="100%" display="block">
          <Banner />
          <Content />
        </HStack>
      )}
    </Box>
  );
};
export default GroupDetails;
