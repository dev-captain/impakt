import React from 'react';
import { Box } from '@chakra-ui/react';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import ShowEvents from './ShowEvents';
import EventDetails from './EventDetails';
import RemoveEvent from './RemoveEvent';
import EventModify from './EventModify';

const EventsOverview: React.FC = () => {
  const { getCurrentOverviewScreen } = useEventCalendarContext();
  const screen = getCurrentOverviewScreen();

  return (
    <Box w="full">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w="100%"
        minH={screen === 'empty' ? '0' : 'auto'}
        p="5px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
      >
        {screen === 'empty' && null}
        {screen === 'first' && <ShowEvents />}
        {screen === 'create' && <EventModify title="Create event" type="create" />}
        {screen === 'update' && <EventModify title="Update event" type="update" />}
        {screen === 'event' && <EventDetails />}
        {screen === 'remove' && <RemoveEvent />}
      </Box>
    </Box>
  );
};

export default EventsOverview;
