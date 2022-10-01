import React, { useEffect, useRef } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Day } from 'dayspan';

import { useEventCalendarContext } from 'context/EventCalendarContext';
import DayNames from './DayNames';
import EventsOverview from './EventsOverview';
import DayComponent from './Day';
import useNormalizedCalendarData from '../../../../../../../hooks/useNormalizedCalendarData';
import { getDummyEvents } from '../../../../../../../data';

const EventCalendar: React.FC = () => {
  const activeGroupCalendar = useNormalizedCalendarData();
  const runInitCalendarRef = useRef(true);
  const {
    addEvents,
    getCurrentMonthLabel,
    getCurrentYear,
    getDaysOfCurrentMonth,
    moveToNextMonth,
    moveToPreviousMonth,
    getStartDayOfCurrentMonth,
    setSelectedDay,
    setActiveEventId,
  } = useEventCalendarContext();

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
      <Box width="100%" height="30%" color="white" display="flex" flexWrap="wrap">
        <Box
          padding="15px 20px"
          height="70%"
          width="100%"
          whiteSpace="nowrap"
          fontSize="1.2em"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="white"
          color="#616161"
          borderRadius="10px 10px 0 0"
        >
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            boxShadow=" 0px 0px 12px -3px rgb(0 ,0 ,0 ,35%)"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={moveToPreviousMonth}
          />
          <Box>{[getCurrentMonthLabel(), getCurrentYear()].join(' ')}</Box>
          <ChevronRightIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            boxShadow=" 0px 0px 12px -3px rgb(0 ,0 ,0 ,35%)"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={moveToNextMonth}
          />
        </Box>
        <DayNames />
      </Box>
      <HStack
        width=" 100%;"
        height=" 70%;"
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        background=" #ffffff"
        padding={{ base: '0 12px', md: '16px 15px 10px 12px' }}
      >
        {/* {renderWeeks()} */}
        <>
          {getDaysOfCurrentMonth().map((day) => (
            <DayComponent
              key={day.dayIdentifier}
              isCurrentMonth={day.sameMonth(getStartDayOfCurrentMonth())}
              isToday={day.currentDay}
              isDaySelected={day.selectedDay}
              dayNumber={day.dayOfMonth}
              eventsCounts={day.events.length}
              dote={day.events.length <= 3 ? '.'.repeat(day.events.length) : '...'}
              selectDay={() => setSelectedDay(day)} // selectedDay
            />
          ))}
        </>
      </HStack>
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
