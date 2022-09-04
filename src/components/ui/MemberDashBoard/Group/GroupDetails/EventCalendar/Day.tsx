import React from 'react';
import { Box } from '@chakra-ui/react';

interface DayProps {
  day: any;
  selected: any;
  select: any;
}

const Day: React.FC<DayProps> = ({ day, selected, select }) => {
  // Declare a new state variable, which we'll call "count"

  return (
    <Box
      display="flex"
      height="100%"
      width="52px"
      justifyContent="center"
      alignItems="center"
      onClick={() => select(day)}
    >
      <Box
        padding={{ base: '5px 8px', md: '10px 13px' }}
        display=" flex"
        fontSize={{ base: '13px', md: '16px' }}
        justifyContent=" center"
        alignItems=" center"
        borderRadius={{ base: '10px', md: '16px' }}
        fontWeight=" 600"
        transition=".3s"
        _hover={{ backgroundColor: '#0090fc', color: 'white', transition: '.3s' }}
        border={day.isToday ? '2px solid #90caf9' : '2px solid #ffffff'}
        background={day?.date?.isSame(selected) ? '#0090fc' : '#ffffff'}
        // eslint-disable-next-line no-nested-ternary
        color={day.date.isSame(selected) ? '#fff' : day.hasEvents ? '#0090fc' : 'black'}
        opacity={day.isCurrentMonth ? '1' : '.5'}
      >
        {day.number}
      </Box>
    </Box>
  );
};

export default Day;
