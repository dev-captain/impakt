import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from 'components';

interface ChallengeCreateFooterPropsI {}
export const ChallengeCreateFooter: React.FC<ChallengeCreateFooterPropsI> = () => {
  return (
    <HStack
      padding="1em"
      w="full"
      justifyContent="space-between"
      background="rgba(242, 121, 97, 0.1)"
      borderRadius="16px"
    >
      <Box>
        <Text fontWeight="400" fontSize="18px" lineHeight="26px" color="#CC4C33">
          Create your own routines in our app
        </Text>
      </Box>
      <Box>
        <Common.ImpaktButton
          as="a"
          href="impakt://"
          background="linear-gradient(90deg, #F04153 0%, #F27961 100%);"
          variant="orange-black"
        >
          Open App
        </Common.ImpaktButton>
      </Box>
    </HStack>
  );
};
