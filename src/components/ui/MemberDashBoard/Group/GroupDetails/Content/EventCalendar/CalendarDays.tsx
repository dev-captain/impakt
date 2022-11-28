import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';
import DayComponent from './Day';
import DayNames from './DayNames';

const CalendarDays: React.FC = () => {
  const {
    getCurrentMonthLabel,
    getCurrentYear,
    getDaysOfCurrentMonth,
    moveToNextMonth,
    moveToPreviousMonth,
    getStartDayOfCurrentMonth,
    setSelectedDay,
    goToOverViewScreen,
  } = useEventCalendarContext();

  return (
    <>
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
            onClick={() => {
              moveToPreviousMonth();
              goToOverViewScreen('empty');
            }}
          />
          <Box>{[getCurrentMonthLabel(), getCurrentYear()].join(' ')}</Box>
          <ChevronRightIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            boxShadow=" 0px 0px 12px -3px rgb(0 ,0 ,0 ,35%)"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => {
              moveToNextMonth();
              goToOverViewScreen('empty');
            }}
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
              selectDay={
                !day.currentMonth
                  ? () => {
                      if (day.month > getDaysOfCurrentMonth()[15].month) {
                        moveToNextMonth();
                      }
                      if (day.month < getDaysOfCurrentMonth()[15].month) {
                        moveToPreviousMonth();
                      }
                      setSelectedDay(day);
                    }
                  : () => setSelectedDay(day)
              } // selectedDay
            />
          ))}
        </>
      </HStack>
    </>
  );
};
export default CalendarDays;
