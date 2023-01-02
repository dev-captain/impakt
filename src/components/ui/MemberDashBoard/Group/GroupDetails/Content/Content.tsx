import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { usePersistedGroupStore } from '@/lib/zustand';
import { EventCalendarContextProvider } from '@/context/EventCalendarContext';
import { ConversationContextProvider } from '@/context/ConversationContext';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';
import GroupWelcome from './GroupWelcome/GroupWelcome';
import GroupChat from './GroupChat/GroupChat';
// import EventCalendar from './Calendar/EventCalendar';

const Content: React.FC = () => {
  const { role } = usePersistedGroupStore();
  const [show, setShow] = React.useState<null | string>(null);
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
      <VStack width="100%" rowGap={{ base: '16px', md: '24px' }}>
        {(!localStorage.getItem('showTip') || !show) && role === 'Creator' && (
          <GroupWelcome hideGroupWelcome={hide} />
        )}
        {role !== 'None' && role !== 'Guest' && role !== null && (
          <ConversationContextProvider>
            <GroupChat />
          </ConversationContextProvider>
        )}
        <Forums />
      </VStack>
      <MemberList />
    </HStack>
  );
};
export default Content;
