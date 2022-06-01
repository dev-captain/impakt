import { Box, Progress } from '@chakra-ui/react';
import * as React from 'react';

import TokenPriceDownIndicator from './TokenPriceDownIndicator';

interface TokenPriceDownProgressPropsI {
  value: number;
}

const TokenPriceDownProgress: React.FC<TokenPriceDownProgressPropsI> = ({ value }) => {
  return (
    <Box w="85%" top="56%" left="10%" zIndex="0" position="absolute" maxH="3.7px" id="progress-box">
      <TokenPriceDownIndicator numberOfActiveMembers="8,013" value={value} />
      <Progress colorScheme="yellow" h="3.7px" value={value} w="full" />
    </Box>
  );
};

export default TokenPriceDownProgress;
