import React from 'react';
import { Box } from '@chakra-ui/react';

interface DayProps {
  isToday: boolean;
  isCurrentMonth: boolean;
  isDaySelected: boolean;
  dayNumber: number;
  events: any;
  selectDay: () => void;
}

const DayComponent: React.FC<DayProps> = ({
  isToday,
  isCurrentMonth,
  dayNumber,
  events,
  isDaySelected,
  selectDay,
}) => {
  const getColor = () => {
    if (isDaySelected && !isToday) return '#fff';
    if (events.length !== 0) return '#0090fc';

    return 'black';
  };
  const dots: Object[] = [];
  events.forEach((d: any, i: number) => {
    if (i < 3) {
      dots.push('.');
    }
  });

  return (
    <Box
      margin="0 !important"
      display="flex"
      height="100%"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={selectDay}
    >
      <Box
        width="52px"
        minW="52px"
        height="50px"
        padding={{ base: '5px 8px', md: '10px 13px' }}
        display=" flex"
        fontSize={{ base: '13px', md: '16px' }}
        justifyContent=" start"
        alignItems=" center"
        borderRadius={{ base: '10px', md: '16px' }}
        fontWeight=" 600"
        transition=".3s"
        _hover={{
          backgroundColor: '#0090fc',
          color: 'white',
          transition: '.3s',
        }}
        border={isToday ? '2px solid #90caf9' : '2px solid #ffffff'}
        background={isDaySelected && !isToday ? '#0090fc' : '#ffffff'}
        color={getColor()}
        opacity={isCurrentMonth ? '1' : '.5'}
        flexDirection="column"
      >
        <Box>{dayNumber}</Box>
        <Box display="flex" marginTop="-15px" fontSize="22px">
          {dots.map((a: any) => (
            <Box>{events.length !== 0 && a}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DayComponent;
