import { Box, BoxProps, Text } from '@chakra-ui/react';
import * as React from 'react';

const CounterItem: React.FC<
  BoxProps & { titleFontSize?: string; value: string; label: string }
> = ({ value, label, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      border="2px solid #4C2E54"
      width="80px"
      height="80px"
      justifyContent="center"
      background="#121216"
      borderRadius="10px"
      {...props}
    >
      <Text fontSize={{ base: '35px', md: props.titleFontSize || '48px' }} color="white">
        {value}
      </Text>
      <Text fontSize="12px" color="#717173" marginTop={{ base: '-8px', md: '-14px' }}>
        {label}
      </Text>
    </Box>
  );
};

export default CounterItem;
