import { Box } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import Day from './Day';

interface WeekProps {
  previousCurrentNextView: moment.Moment;
  currentMonthView: moment.Moment;
  selected: moment.Moment;
  select: any;
  monthEvents: any;
}

const Week: React.FC<WeekProps> = ({
  previousCurrentNextView,
  currentMonthView,
  selected,
  select,
  monthEvents,
}) => {
  // Declare a new state variable, which we'll call "count"
  const days = [];
  let date = previousCurrentNextView;
  const currentMonthViewSet = currentMonthView;
  const selectedSet = selected;
  const selectSet = select;
  const monthEventsSet = monthEvents;

  for (let i: number = 0; i < 7; i += 1) {
    let dayHasEvents = false;

    for (let j: number = 0; j < monthEventsSet.length; j += 1) {
      if (monthEventsSet[j]?.date?.isSame(date, 'day')) {
        dayHasEvents = true;
      }
    }

    const day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === currentMonthViewSet.month(),
      isToday: date?.isSame(new Date(), 'day'),
      date,
      hasEvents: dayHasEvents,
    };

    days.push(<Day day={day} selected={selectedSet} select={selectSet} />);
    date = date.clone();
    date.add(1, 'd');
  }

  return (
    <Box
      display="flex"
      height={{ base: '50px', md: '15%' }}
      justifyContent={{ base: 'space-between', md: 'center' }}
      padding={{ base: '0 12px', md: '0' }}
      alignItems="center"
    >
      {days}
    </Box>
  );
};

export default Week;
