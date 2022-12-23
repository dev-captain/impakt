import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from 'components';

interface ChallengeCreateFormFooterPropsI {}

export const ChallengeCreateFormFooter: React.FC<ChallengeCreateFormFooterPropsI> = () => {
  return (
    <HStack w="full" justifyContent="flex-end">
      <Box>
        <Common.ImpaktButton
          form="create-challenge-form"
          variant="black"
          type="submit"
          padding="16px 48px"
          h="64px"
          borderRadius="16px"
        >
          <Text fontWeight="600">Create</Text>
        </Common.ImpaktButton>
      </Box>
    </HStack>
  );
};
