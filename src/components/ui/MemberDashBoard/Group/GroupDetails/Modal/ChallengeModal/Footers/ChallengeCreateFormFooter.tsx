import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from '@/components';
import { createEventFormName } from '../../../../../../../forms/groups/CreateEventForm';
import { createChallengeFormName } from '../../../../../../../forms/groups/CreateChallengeForm';

interface ChallengeCreateFormFooterPropsI {
  formName: typeof createEventFormName | typeof createChallengeFormName;
}

export const ChallengeCreateFormFooter: React.FC<ChallengeCreateFormFooterPropsI> = ({
  formName,
}) => {
  return (
    <HStack w="full" justifyContent="flex-end">
      <Box>
        <Common.ImpaktButton
          form={formName}
          // "create-challenge-form"
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
