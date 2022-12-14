import React from 'react';
import { Box } from '@chakra-ui/react';

interface DayProps {
  isCurrentMonth: boolean;
  isDaySelected: boolean;
  dayNumber: number;
  selectDay: () => void;
  dote: string;
}

const DayComponent: React.FC<DayProps> = ({
  isCurrentMonth,
  dayNumber,
  isDaySelected,
  selectDay,
  dote,
}) => {
  const getColor = () => {
    if (isDaySelected) return '#fff';

    return 'fg';
  };

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
        width="40px"
        minW="40px"
        height="50px"
        padding={{ base: '5px 8px', md: '10px 13px' }}
        display=" flex"
        fontSize="18px"
        justifyContent=" start"
        alignItems=" center"
        borderRadius="8px"
        fontWeight="500"
        transition=".3s"
        _hover={{
          bg: !isDaySelected ? 'softOrange' : '',
          color: !isDaySelected ? 'fg-1' : '',
          transition: '.3s',
        }}
        border="2px solid #ffffff"
        background={
          isDaySelected ? 'linear-gradient(180deg, #F04153 0%, #F27961 100%);' : '#ffffff'
        }
        color={getColor()}
        opacity={isCurrentMonth ? '1' : '.5'}
        flexDirection="column"
      >
        <Box>{dayNumber}</Box>
        <Box display="flex" marginTop="-20px" fontSize="22px">
          <Box color={isDaySelected ? 'white' : '#F27961'}>{dote}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DayComponent;
