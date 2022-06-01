import { Box, Text } from '@chakra-ui/layout';
import * as React from 'react';

interface TokenPriceDownIndicatorPropsI {
  numberOfActiveMembers: string;
  value: number;
}

const TokenPriceDownIndicator: React.FC<TokenPriceDownIndicatorPropsI> = ({
  numberOfActiveMembers,
  value,
}) => {
  return (
    <Box id="indicator">
      <Box
        as="span"
        top="-5px"
        position="absolute"
        bgColor="#FEC417"
        borderRadius="50%"
        zIndex="9999"
        w="13px"
        h="13px"
        transition="all 2s linear"
        left={`${value}%`}
      />
      <Box
        as="span"
        top="-60px"
        position="absolute"
        bgColor="#FEC417"
        borderRadius="50%"
        zIndex="9999"
        w="122px"
        transform="rotate(90deg)"
        h="0.92px"
        transition="all 2s linear"
        left={`${value - 5.4}%`}
      >
        <Text
          fontWeight="700"
          fontSize="22px"
          lineHeight="30px"
          color="#fff"
          position="absolute"
          left="-12"
          top="-4"
          transform="rotate(270deg)"
        >
          {numberOfActiveMembers}
        </Text>
      </Box>
    </Box>
  );
};
export default TokenPriceDownIndicator;
