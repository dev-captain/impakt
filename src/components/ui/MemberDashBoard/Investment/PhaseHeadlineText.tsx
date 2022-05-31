import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PhaseHeadlineText: React.FC = ({ children }) => {
  return (
    <Box textAlign="left" w="100%">
      <Text fontSize="32px" lineHeight="36px" fontWeight="700">
        {children}
      </Text>
    </Box>
  );
};

export default PhaseHeadlineText;
