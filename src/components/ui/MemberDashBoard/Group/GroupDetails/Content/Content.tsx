import React from 'react';
import { HStack, Box } from '@chakra-ui/react';
import { usePersistedGroupStore } from '@/lib/zustand';
import { EventCalendarContextProvider } from '@/context/EventCalendarContext';
import Forums from './Forums/Forums';
import MemberList from './MemberList/MemberList';
import EventCalendar from './EventCalendar/EventCalendar';
import GroupWelcome from './GroupWelcome/GroupWelcome';
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
      <Box display="flex" flexDir="column" w="full" alignItems="center">
        {(!localStorage.getItem('showTip') || !show) && role === 'Creator' && (
          <GroupWelcome hideGroupWelcome={hide} />
        )}
        <Forums />
      </Box>
      <MemberList />
    </HStack>
  );
};
export default Content;
