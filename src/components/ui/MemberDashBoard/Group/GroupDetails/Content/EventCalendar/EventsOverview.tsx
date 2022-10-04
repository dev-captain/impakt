import React from 'react';
import { Box } from '@chakra-ui/react';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import ShowEvents from './ShowEvents';
import CreateEvent from './CreateEvent';
import EventDetails from './EventDetails';
import RemoveEvent from './RemoveEvent';
import UpdateEvent from './UpdateEvent';

const EventsOverview: React.FC = () => {
  const { getCurrentOverviewScreen } = useEventCalendarContext();
  const screen = getCurrentOverviewScreen();

  return (
    <Box w="full">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w={{ base: '100%', md: '342px' }}
        minH={screen === 'empty' ? '0' : '384px'}
        p="5px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
      >
        {screen === 'empty' && null}
        {screen === 'first' && <ShowEvents />}
        {screen === 'create' && <CreateEvent />}
        {screen === 'update' && <UpdateEvent />}
        {screen === 'event' && <EventDetails />}
        {screen === 'remove' && <RemoveEvent />}
      </Box>
    </Box>
  );
};

export default EventsOverview;
