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

  const arr: any = [];
  data.forEach((d: any, i: number) => {
    if (selectedMonthEvents[i]?.date?.isSame(selectedDay, 'day')) {
      arr.push(d);
    }
  });

  return (
    <Box>
      {arr.map((a: any) => (
        <Box key={`${a.date}-yo`} display="flex" width="100%" marginBottom="10px">
          <Text fontSize="15px" w="70px">
            {a?.date?.format('HH:mm') !== '00:00'
              ? a?.date?.format('HH:mm')
              : moment().format('HH:mm')}
          </Text>
          <Text fontSize="15px" w="100%">
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
