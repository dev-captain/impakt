import * as React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

interface CountDownTimerItemPropsI {
  value: string;
  label: string;
}

const CountDownTimerItem: React.FC<CountDownTimerItemPropsI> = ({ value, label }) => {
  return (
    <VStack
      justifyContent="center"
      bgColor="#0B1725"
      w="88px"
      borderRadius="8px"
      alignItems="center"
      h="98px"
    >
      <Box id="count-down-timer-value-box">
        <Text textStyle="bold6" color="#FEC417">
          {value}
        </Text>
      </Box>
      <Box id="count-down-timer-label-box">
        <Text textStyle="regular2" color="#fff">
          {label}
        </Text>
      </Box>
    </VStack>
  );
};

export default CountDownTimerItem;
