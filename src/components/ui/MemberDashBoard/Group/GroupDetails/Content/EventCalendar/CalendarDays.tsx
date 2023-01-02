import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';
import routes from '../../../../../../../data/routes';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import { renderToast } from '../../../../../../../utils';
import MemberDashboardHeadlineText from '../../../../MemberDashBoardHeadlineText';
import DayComponent from './Day';
import DayNames from './DayNames';

const CalendarDays: React.FC = () => {
  const navigate = useNavigate();
  const { activeGroup, role } = usePersistedGroupStore();
  const {
    getCurrentMonthLabel,
    getCurrentYear,
    getDaysOfCurrentMonth,
    moveToNextMonth,
    moveToPreviousMonth,
    getStartDayOfCurrentMonth,
    pickSelectedDay,
    goToOverViewScreen,
  } = useEventCalendarContext();

  const isGuest = role === 'Guest';

  return (
    <>
      <Box width="100%" height="30%" color="white" display="flex" flexWrap="wrap">
        <Box
          padding="15px 0"
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
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => {
              moveToPreviousMonth();
              goToOverViewScreen('empty');
            }}
          />
          <Box>
            <MemberDashboardHeadlineText>
              {[getCurrentMonthLabel(), getCurrentYear()].join(' ')}
            </MemberDashboardHeadlineText>
          </Box>
          <ChevronRightIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => {
              moveToNextMonth();
              goToOverViewScreen('empty');
            }}
          />
        </Box>
      </Box>

      <HStack
        width={{ base: '312px', md: '100%' }}
        height=" 70%;"
        flexWrap="wrap"
        display="flex"
        alignSelf="center"
        justifyContent="center"
        alignItems="start"
        background=" #ffffff"
        padding={{ base: '0 12px', md: '8px 0' }}
      >
        {/* {renderWeeks()} */}

        <Box display="flex" w="full">
          <DayNames />
        </Box>
        <>
          {getDaysOfCurrentMonth().map((day) => (
            <DayComponent
              key={day.dayIdentifier}
              isCurrentMonth={day.sameMonth(getStartDayOfCurrentMonth())}
              isDaySelected={day.selectedDay}
              dayNumber={day.dayOfMonth}
              dote={day.events.length <= 3 ? '.'.repeat(day.events.length) : '...'}
              selectDay={
                // eslint-disable-next-line no-nested-ternary
                isGuest
                  ? () => {
                      renderToast(
                        'warning',
                        'You have to be member of the group to see calendar event.',
                        'dark',
                        2200,
                      );
                      navigate(routes.guestRedirect(activeGroup?.id));
                    }
                  : !day.currentMonth
                  ? () => {
                      if (day.month > getDaysOfCurrentMonth()[15].month) {
                        moveToNextMonth();
                      }
                      if (day.month < getDaysOfCurrentMonth()[15].month) {
                        moveToPreviousMonth();
                      }
                      pickSelectedDay(day);
                    }
                  : () => pickSelectedDay(day)
              } // selectedDay
            />
          ))}
        </>
      </HStack>
    </>
  );
};
export default CalendarDays;
