import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PhaseDescriptionText: React.FC = ({ children }) => {
  return (
    <Box>
      <Text fontSize="24px" lineHeight="32px" fontWeight="400">
        {children}
      </Text>
    </Box>
  );
};

export default PhaseDescriptionText;
