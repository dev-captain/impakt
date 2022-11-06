import React from 'react';
import { Box } from '@chakra-ui/react';

import EventsOverview from './EventsOverview';
import CalendarDays from './CalendarDays';
// import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  return (
    <Box
      height="100%"
      width={{ base: '100%', md: '428px' }}
      display="flex"
      flexWrap="wrap"
      transform="translateY(20px)"
      borderRadius="10px"
      marginTop="10px"
    >
      <CalendarDays />
      <Box
        backgroundColor=" #ffffff"
        width=" 100%"
        padding=" 20px 20px"
        borderRadius="0 0 10px 10px"
      >
        <EventsOverview />
      </Box>
    </Box>
  );
};

export default EventCalendar;
