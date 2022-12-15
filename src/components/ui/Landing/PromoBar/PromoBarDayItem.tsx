import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

interface PromoBarDayItemPropsI {
  label: string;
  value: string;
}
const PromoBarDayItem: React.FC<PromoBarDayItemPropsI> = ({ label, value }) => {
  return (
    <VStack
      borderRadius="8px"
      spacing="0"
      p="8px 4px"
      bg="rgba(0, 0, 0, 0.25)"
      minW="56px"
      minH="56px"
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
export default PromoBarDayItem;
