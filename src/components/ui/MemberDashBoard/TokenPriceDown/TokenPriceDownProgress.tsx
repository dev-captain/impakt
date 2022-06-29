import { Box, Progress } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownIndicator from './TokenPriceDownIndicator';

interface TokenPriceDownProgressPropsI {
  value: number;
  numberOfActiveMembers: string;
}

const TokenPriceDownProgress: React.FC<TokenPriceDownProgressPropsI> = ({
  value,
  numberOfActiveMembers,
}) => {
  return (
    <Box w="87%" top="56%" left="8%" zIndex="0" position="absolute" maxH="3.7px" id="progress-box">
      <TokenPriceDownIndicator numberOfActiveMembers={numberOfActiveMembers} value={value} />
      <Progress transition="all 2s linear" colorScheme="yellow" h="3.7px" value={value} w="full" />
    </Box>
  );
};

export default TokenPriceDownProgress;
