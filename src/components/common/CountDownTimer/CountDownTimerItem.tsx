import React from 'react';
import { VStack, Box, Text, StackProps } from '@chakra-ui/react';

interface CountDownTimerItemProps {
  label: string;
  value: string;
  isWhite: boolean;
}

const CountDownTimerItem: React.FC<CountDownTimerItemProps & StackProps> = ({
  label,
  value,
  ...props
}) => {
  return (
    <VStack
      borderRadius="8px"
      spacing="0"
      p="8px 4px"
      bg="rgba(0, 0, 0, 0.25)"
      minW="56px"
      minH="56px"
      {...props}
    >
      <Box>
        <Text color="#FFFFFF" textStyle="bold5">
          {value}
        </Text>
      </Box>
      <Box>
        <Text color="white" fontSize="10px" lineHeight="100%" fontWeight="400">
          {label}
        </Text>
      </Box>
    </VStack>
  );
};
export default CountDownTimerItem;
