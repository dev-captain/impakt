import { Box, HStack, Progress, VStack } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownItem from './TokenPriceDownItem';

const TokenPriceDown: React.FC = () => {
  return (
    <VStack alignItems="center" justifyContent="center" position="relative" w="100%">
      <HStack
        zIndex="999"
        justifyContent="space-between"
        position="relative"
        mt="8em !important"
        w="100%"
      >
        {tokenPriceDownItems.map(({ isAchieved, numberOfMemberLabel, priceValue }) => (
          <TokenPriceDownItem
            key={`${priceValue}-price-down-item`}
            isAchieved={isAchieved}
            numberOfMemberLabel={numberOfMemberLabel}
            priceValue={priceValue}
          />
        ))}
      </HStack>
      <Box
        w="80%"
        top="56%"
        left="10%"
        zIndex="0"
        position="absolute"
        maxH="3.7px"
        id="progress-box"
      >
        <Box
          as="span"
          top="-5px"
          position="absolute"
          bgColor="#FEC417"
          borderRadius="50%"
          zIndex="9999"
          w="13px"
          h="13px"
          left="41%"
        />
        <Progress colorScheme="yellow" h="3.7px" value={41} w="full" />
      </Box>
    </VStack>
  );
};

const tokenPriceDownItems = [
  { numberOfMemberLabel: '#active member', priceValue: '0.01$', isAchieved: true },
  { numberOfMemberLabel: '5,000', priceValue: '0.009$', isAchieved: true },
  { numberOfMemberLabel: '10,000', priceValue: '0.008$', isAchieved: false },
  { numberOfMemberLabel: '15,000', priceValue: '0.007$', isAchieved: false },
  { numberOfMemberLabel: '20,000', priceValue: '0.006$', isAchieved: false },
];

export default TokenPriceDown;
