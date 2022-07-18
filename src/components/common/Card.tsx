import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      backgroundColor="rgba(28, 28, 40, 0.65);"
      padding="2.5em"
      backdropFilter="blur(40px)"
      borderRadius="32px"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
