import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';

interface EventProps {
  selectedMonthEvents: any;
  selectedDay: moment.Moment;
}

const Events: React.FC<EventProps> = ({ selectedMonthEvents, selectedDay }) => {
  const data = selectedMonthEvents.map((e: any) => e);

  const arr = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    if (selectedMonthEvents[i]?.date?.isSame(selectedDay, 'day')) {
      arr.push(data[i]);
    }
  }

  return (
    <Box>
      {arr.map((a: any) => (
        <Box key={a?.i} display="flex" padding=" 0 24px">
          <Text width="50%">{a?.date?.format('HH:mm')}</Text>
          <Text width="50%">{a?.title}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Events;
