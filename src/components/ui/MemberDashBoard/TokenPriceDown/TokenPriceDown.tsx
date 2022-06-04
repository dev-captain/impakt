import { HStack, useMediaQuery, VStack } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownItem from './TokenPriceDownItem';
import TokenPriceDownProgress from './TokenPriceDownProgress';

const TokenPriceDown: React.FC = () => {
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');
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
        mt="6.8em !important"
        w="100%"
        flexDir={{ base: 'column', lg: 'row' }}
        rowGap="20px"
      >
        {tokenPriceDownItems.map(({ numberOfMembersLabel, priceValue }) => (
          <TokenPriceDownItem
            key={`${priceValue}-price-down-item`}
            isAchieved={numberOfMembersLabel <= activeNumberOfMember}
            numberOfMembersLabel={
              numberOfMembersLabel === 0 ? '#active members' : numberOfMembersLabel.toLocaleString()
            }
            priceValue={priceValue}
          />
        ))}
      </HStack>

      {!isLessThan1040 && (
        <TokenPriceDownProgress
          numberOfActiveMembers={activeNumberOfMember.toLocaleString()}
          value={calculationOfIndicatorPosition()}
        />
      )}
    </VStack>
  );
};

const tokenPriceDownItems = [
  { numberOfMembersLabel: 0, priceValue: '0.01$' },
  { numberOfMembersLabel: 5000, priceValue: '0.009$' },
  { numberOfMembersLabel: 10000, priceValue: '0.008$' },
  { numberOfMembersLabel: 15000, priceValue: '0.007$' },
  { numberOfMembersLabel: 20000, priceValue: '0.006$' },
];

export default TokenPriceDown;
