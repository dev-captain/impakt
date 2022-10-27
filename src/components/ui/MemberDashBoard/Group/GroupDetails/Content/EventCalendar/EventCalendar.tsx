import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';

import EventsOverview from './EventsOverview';
import { useAppSelector } from '../../../../../../../hooks';
import CalendarDays from './CalendarDays';
// import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  const isGroupCalendarLoading = useAppSelector(
    (state) => state.calendarReducer.isGroupCalendarLoading,
  );

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
      <Skeleton w="full" isLoaded={!isGroupCalendarLoading} display="flex">
        <Box
          backgroundColor=" #ffffff"
          width=" 100%"
          padding=" 20px 20px"
          borderRadius="0 0 10px 10px"
        >
          <EventsOverview />
        </Box>
      </Skeleton>
    </Box>
  );
};

export default EventCalendar;
