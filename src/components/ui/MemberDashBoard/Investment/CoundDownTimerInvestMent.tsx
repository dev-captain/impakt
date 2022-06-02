import * as React from 'react';

import { Box, VStack, HStack } from '@chakra-ui/react';
import CountDownTimerItem from './CountDownTimerItem';
import useCountdown from '../../../../hooks/useCountdown';
import PhaseHeadlineText from './PhaseHeadlineText';

interface CoundDownTimerInvestMentPropsI {}

const CoundDownTimerInvestMent: React.FC<CoundDownTimerInvestMentPropsI> = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('7/20/2022'));

  return (
    <VStack
      bgColor="#FEC417"
      maxW="469px"
      maxHeight="242px"
      padding="34px"
      rowGap="25px"
      minH="242px"
      id="investment-count-down-timer"
      borderRadius="24px"
      border="1px solid #F5F6FF"
      mt="30px !important"
    >
      <Box color="#000" id="end-is-headline">
        <PhaseHeadlineText>Ends in</PhaseHeadlineText>
      </Box>
      <HStack>
        <CountDownTimerItem label="Days" value={`${days}`} />
        <CountDownTimerItem label="Hours" value={`${hours}`} />
        <CountDownTimerItem label="Minutes" value={`${minutes}`} />
        <CountDownTimerItem label="Seconds" value={`${seconds}`} />
      </HStack>
    </VStack>
  );
};

export default CoundDownTimerInvestMent;
