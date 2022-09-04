import React from 'react';
import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import { useParams } from 'react-router-dom';
import GroupWelcome from '../../GroupWelcome';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchGroupDetailById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupDetailById';
import Banner from './Banner/Banner';
import MemberList from '../../MemberList';
import Forums from '../../Forums';
import EventCalendar from './EventCalendar/EventCalendar';

const GroupDetails: React.FC = () => {
  const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const groupParam = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const member = useAppSelector((state) => state.memberAuth.member);

  const getGroupDetail = async () => {
    try {
      if (groupParam?.id) {
        await dispatch(fetchGroupDetailById(groupParam.id)).unwrap();
      }
    } catch (e) {
      setIsNotFound(true);
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
      {(!localStorage.getItem('showTip') || !show) && activeGroup?.ownerId === member?.id ? (
        <GroupWelcome data={() => hide()} />
      ) : (
        <HStack w="100%" display="block">
          {/* here is the components */}
          <Banner img={Images.group.cover} />
          <Box
            marginStart="0 !important"
            display="flex"
            w="full"
            gap="20px"
            flexDirection={{ base: 'column', md: 'unset' }}
          >
            <EventCalendar />
            <Forums />
            <MemberList />
          </Box>
        </HStack>
      )}
    </Box>
  );
};
export default GroupDetails;
