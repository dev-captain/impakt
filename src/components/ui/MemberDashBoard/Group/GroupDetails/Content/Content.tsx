import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { EventCalendarContextProvider } from 'context/EventCalendarContext';
import { ConversationContextProvider } from 'context/ConversationContext';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';
import GroupChat from './GroupChat/GroupChat';
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
      <Box width="100%">
        <ConversationContextProvider>
          <GroupChat />
        </ConversationContextProvider>
        <Forums />
      </Box>
      <MemberList />
    </HStack>
  );
};
export default Content;
