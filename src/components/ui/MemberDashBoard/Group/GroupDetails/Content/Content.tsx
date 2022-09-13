import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { EventCalendarContextProvider } from 'context/EventCalendarContext';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';
// import EventCalendar from './Calendar/EventCalendar';

const Content: React.FC = () => {
  return (
    <Box
      marginStart="0 !important"
      display="flex"
      w="full"
      gap="20px"
      flexDirection={{ base: 'column', md: 'unset' }}
    >
      {/* <EventCalendar /> */}
      <EventCalendarContextProvider>
        <EventCalendar />
      </EventCalendarContextProvider>
      <Forums />
      <MemberList />
    </Box>
  );
};
export default Content;
