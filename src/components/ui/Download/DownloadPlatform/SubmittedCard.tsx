import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { I } from 'components';

const SubmittedCard: React.FC = () => {
  return (
    <VStack
      spacing="0"
      rowGap="1em"
      w="full"
      minH={{ base: '284', md: '292px' }}
      justifyContent="center"
      alignItems="center"
      // minW={{ base: '304px', md: '328px' }}
    >
      <Box>
        <I.SubmittedIcon />
      </Box>
      <Box>
        <Text textStyle="regular201" color="fg-1">
          Thank you!
        </Text>
      </Box>
    </VStack>
  );
};
export default SubmittedCard;
