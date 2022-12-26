import * as React from 'react';

import { Box, VStack, HStack } from '@chakra-ui/react';
import { useCountdown } from '@/hooks';

import CountdownTimer from './CountDownTimerItem';
import PhaseHeadlineText from './PhaseHeadlineText';

const CountdownTimerInvestment: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('7/20/2022'));

  return (
    <VStack
      bgColor="#FEC417"
      maxW="469px"
      maxHeight="242px"
      padding="34px"
      rowGap="25px"
      minH="242px"
      marginLeft="0 !important"
      id="investment-count-down-timer"
      borderRadius="24px"
      border="1px solid #F5F6FF"
      mt="30px !important"
    >
      <Box color="#000" id="end-is-headline">
        <PhaseHeadlineText>Ends in</PhaseHeadlineText>
      </Box>
      <HStack>
        <CountdownTimer label="Days" value={`${days}`} />
        <CountdownTimer label="Hours" value={`${hours}`} />
        <CountdownTimer label="Minutes" value={`${minutes}`} />
        <CountdownTimer label="Hours" value={`${hours}`} />
        <CountdownTimer label="Seconds" value={`${seconds}`} />
      </HStack>
    </VStack>
  );
};

export default CountdownTimerInvestment;
