import { HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownItem from './TokenPriceDownItem';
import TokenPriceDownProgress from './TokenPriceDownProgress';

const TokenPriceDown: React.FC = () => {
  return (
    <VStack alignItems="center" justifyContent="center" position="relative" w="100%">
      <HStack
        zIndex="999"
        position="relative"
        justifyContent="space-between"
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
      <TokenPriceDownProgress value={43} />
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
