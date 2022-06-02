import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PhaseDescriptionText: React.FC<{ isBold?: boolean }> = ({ children, isBold }) => {
  return (
    <Box w="full">
      <Text
        letterSpacing="-0.04em"
        fontSize="24px"
        lineHeight="32px"
        fontWeight={isBold ? '700' : '400'}
      >
        {children}
      </Text>
    </Box>
  );
};

export default PhaseDescriptionText;
