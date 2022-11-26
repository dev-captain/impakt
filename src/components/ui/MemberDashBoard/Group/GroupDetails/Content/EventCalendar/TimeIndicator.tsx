import React from 'react';
import { Box } from '@chakra-ui/react';

const TimeIndicator: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" mb="3px">
      <Box background="#5C7FFF" w="8px" h="8px" borderRadius="50%" marginLeft="-6px" />
      <Box backgroundColor="#5C7FFF" borderRadius="0px 8px 8px 0px" h="2px" w="100%" />
    </Box>
  );
};

export default TimeIndicator;
