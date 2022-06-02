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
  const indicatorTextValuePosition = () => {
    if (numberOfActiveMembers.length === 1 || numberOfActiveMembers.length === 2) {
      return '-0.7em';
    }
    if (numberOfActiveMembers.length === 3) {
      return '-0.8em';
    }
    if (numberOfActiveMembers.length === 5) {
      return '-0.5em';
    }
    if (numberOfActiveMembers.length === 6) {
      return '-1em';
    }

    return '0';
  };

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
        textAlign="center"
        left={`${value - 5.3}%`}
      >
        <Text
          fontWeight="700"
          fontSize="22px"
          lineHeight="30px"
          color="#fff"
          position="relative"
          left="-80px"
          top={indicatorTextValuePosition()}
          transform="rotate(270deg)"
        >
          {numberOfActiveMembers}
        </Text>
      </Box>
    </Box>
  );
};
export default TokenPriceDownIndicator;
