import { Box, Text, CircularProgress, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchGroupDetailById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupDetailById';
import Banner from '../../Banner';
import MemberList from '../../MemberList';
import Forums from '../../Forums';
import EventCalendar from '../EventCalendar/EventCalendar';

const GroupDetails: React.FC = () => {
  const [isNotFound, setIsNotFound] = React.useState(false);
  const groupParam = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
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

  if (isLoading) return <CircularProgress isIndeterminate />;
  if (isNotFound) return <Text>404 Group not found</Text>;

  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
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
          {/* <MemberList /> */}
          <EventCalendar />
          <Forums />
          <MemberList />
        </Box>
      </HStack>
    </Box>
  );
};
export default GroupDetails;
