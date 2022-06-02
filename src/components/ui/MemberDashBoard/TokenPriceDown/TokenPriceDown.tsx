import { HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownItem from './TokenPriceDownItem';
import TokenPriceDownProgress from './TokenPriceDownProgress';

const TokenPriceDown: React.FC = () => {
  const activeNumberOfMember = 15000;
  const calculationOfIndicatorPosition = () => {
    const percentageOfSet = (100 * activeNumberOfMember) / 20000;
    if (percentageOfSet === 25) return percentageOfSet + 3.5;
    if (percentageOfSet === 50) return percentageOfSet + 2.25;
    if (percentageOfSet === 75) return percentageOfSet + 1.1;

    return percentageOfSet;
  };

  return (
    <VStack alignItems="center" justifyContent="center" position="relative" w="100%">
      <HStack
        zIndex="999"
        position="relative"
        justifyContent="space-between"
        mt="8em !important"
        w="100%"
      >
        {tokenPriceDownItems.map(({ numberOfMemberLabel, priceValue }) => (
          <TokenPriceDownItem
            key={`${priceValue}-price-down-item`}
            isAchieved={numberOfMemberLabel <= activeNumberOfMember}
            numberOfMemberLabel={
              numberOfMemberLabel === 0 ? '#active members' : numberOfMemberLabel.toLocaleString()
            }
            priceValue={priceValue}
          />
        ))}
      </HStack>
      <TokenPriceDownProgress
        numberOfActiveMembers={activeNumberOfMember.toLocaleString()}
        value={calculationOfIndicatorPosition()}
      />
    </VStack>
  );
};

const tokenPriceDownItems = [
  { numberOfMemberLabel: 0, priceValue: '0.01$', isAchieved: true },
  { numberOfMemberLabel: 5000, priceValue: '0.009$', isAchieved: true },
  { numberOfMemberLabel: 10000, priceValue: '0.008$', isAchieved: false },
  { numberOfMemberLabel: 15000, priceValue: '0.007$', isAchieved: false },
  { numberOfMemberLabel: 20000, priceValue: '0.006$', isAchieved: false },
];

export default TokenPriceDown;
