import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import moment from 'moment';
import { DeleteIcon } from '@chakra-ui/icons';

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
        <Box key={a?.i} display="flex" marginBottom="10px">
          <Text width="20%" fontSize="15px">
            {a?.date?.format('HH:mm') !== '00:00'
              ? a?.date?.format('HH:mm')
              : moment().format('HH:mm')}
          </Text>
          <Text width="80%" fontSize="15px">
            {a?.title}
          </Text>
          <Button
            height="100%"
            paddingTop="3px"
            background="transparent"
            _hover={{ background: 'transparent' }}
            _active={{ background: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Events;
