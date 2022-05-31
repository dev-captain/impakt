import * as React from 'react';

import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import CountDownTimerItem from './CountDownTimerItem';

interface CoundDownTimerInvestMentPropsI {}

const CoundDownTimerInvestMent: React.FC<CoundDownTimerInvestMentPropsI> = () => {
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
      <Box id="end-is-headline">
        <Text color="rgba(11, 23, 37, 1)" textStyle="bold6">
          Ends in{' '}
        </Text>
      </Box>
      <HStack>
        <CountDownTimerItem label="Days" value="48" />
        <CountDownTimerItem label="Hours" value="10" />
        <CountDownTimerItem label="Minutes" value="30" />
        <CountDownTimerItem label="Second" value="11" />
      </HStack>
    </VStack>
  );
};

export default CoundDownTimerInvestMent;
