import React, { useEffect, useRef } from 'react';
import { Box, HStack, Skeleton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Day } from 'dayspan';

import { useEventCalendarContext } from 'context/EventCalendarContext';
import DayNames from './DayNames';
import EventsOverview from './EventsOverview';
import DayComponent from './Day';
import useNormalizedCalendarData from '../../../../../../../hooks/useNormalizedCalendarData';
import { useAppSelector } from '../../../../../../../hooks';
import CalendarDays from './CalendarDays';
// import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  const isGroupCalendarLoading = useAppSelector(
    (state) => state.calendarReducer.isGroupCalendarLoading,
  );

  const activeGroupCalendar = useNormalizedCalendarData();
  const runInitCalendarRef = useRef(true);
  const { addEvents, setSelectedDay } = useEventCalendarContext();

  const initCalendar = () => {
    if (activeGroupCalendar) {
      addEvents(activeGroupCalendar.Events);
    }
    // const dummyEvents = getDummyEvents();
    // addEvents(dummyEvents);
    setSelectedDay(Day.today());
  };

  useEffect(() => {
    if (runInitCalendarRef.current) {
      initCalendar();
    }

    return () => {
      runInitCalendarRef.current = true;
    };
  }, [activeGroupCalendar]);

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
