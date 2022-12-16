import React from 'react';
import { HStack } from '@chakra-ui/react';
import { EventCalendarContextProvider } from 'context/EventCalendarContext';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';
// import EventCalendar from './Calendar/EventCalendar';

const Content: React.FC = () => {
  return (
    <HStack
      marginStart="0 !important"
      display="flex"
      w="full"
      columnGap="24px"
      rowGap="24px"
      spacing="0"
      flexDirection={{ base: 'column', md: 'unset' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      mt="24px"
    >
      {/* <EventCalendar /> */}
      <EventCalendarContextProvider>
        <EventCalendar />
      </EventCalendarContextProvider>
      <Forums />
      <MemberList />
    </HStack>
  );
};
export default Content;
