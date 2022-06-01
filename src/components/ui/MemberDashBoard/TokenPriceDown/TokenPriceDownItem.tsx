import * as React from 'react';

import { VStack, Box, Text } from '@chakra-ui/react';

interface TokenPriceDownPropsI {
  priceValue: string;
  numberOfMemberLabel: string;
  isAchieved: boolean;
}

const TokenPriceDownItem: React.FC<TokenPriceDownPropsI> = ({
  numberOfMemberLabel,
  priceValue,
  isAchieved,
}) => {
  return (
    <VStack rowGap="30px" position="relative" w="200px">
      <TokenPriceDownItemCircle isAchieved={isAchieved} priceValue={priceValue} />
      <Text fontSize="22px" fontWeight="700" color="#fff" lineHeight="29.59px">
        {numberOfMemberLabel}
      </Text>
    </VStack>
  );
};

const TokenPriceDownItemCircle: React.FC<{ priceValue: string; isAchieved: boolean }> = ({
  priceValue,
  isAchieved,
}) => {
  return (
    <Box
      w="109px"
      h="109px"
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      bgColor={isAchieved ? '#FEC417' : '#fff'}
      alignItems="center"
      textAlign="center"
    >
      <Text fontSize="24px" fontWeight="700" color="rgba(28, 44, 64, 1)">
        {priceValue}
      </Text>
    </Box>
  );
};

export default TokenPriceDownItem;
