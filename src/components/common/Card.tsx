import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      backgroundColor="rgba(28, 28, 40, 0.65);"
      padding={{ base: '1.5em 1em', lg: '2.5em' }}
      borderRadius="32px"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
