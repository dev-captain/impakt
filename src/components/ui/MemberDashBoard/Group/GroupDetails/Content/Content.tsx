import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';

const Content: React.FC = () => {
  return (
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
  );
};
export default Content;
