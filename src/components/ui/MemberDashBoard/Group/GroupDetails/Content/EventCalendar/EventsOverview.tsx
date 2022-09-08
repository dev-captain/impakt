import React from 'react';
import { Box } from '@chakra-ui/react';
import ShowEvents from './ShowEvents';
import CreateEvent from './CreateEvent';
import EventDetails from './EventDetails';
import TodayEvent from './TodayEvent';
import RemoveEvent from './RemoveEvent';

const EventsOverview: React.FC = () => {
  const [name, setName] = React.useState<String>('first');

  return (
    <Box w="full">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w={{ base: '100%', md: '342px' }}
        minH="384px"
        p="5px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
      >
        {name === 'first' && <ShowEvents data={(e: String) => setName(e)} />}
        {name === 'create' && <CreateEvent data={(e: String) => setName(e)} />}
        {name === 'event' && <EventDetails name={name} data={(e: String) => setName(e)} />}
        {name === 'unjoin' && <EventDetails name={name} data={(e: String) => setName(e)} />}
        {name === 'join' && <TodayEvent data={(e: String) => setName(e)} name={name} />}
        {name === 'todayEvent' && <TodayEvent data={(e: String) => setName(e)} name={name} />}
        {name === 'remove' && <RemoveEvent data={(e: String) => setName(e)} />}
      </Box>
    </Box>
  );
};

export default EventsOverview;
