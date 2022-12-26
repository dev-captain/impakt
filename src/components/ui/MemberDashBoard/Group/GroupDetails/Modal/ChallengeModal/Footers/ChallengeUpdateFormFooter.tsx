import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from '@/components';
import { updateEventFormName } from '../../../../../../../forms/groups/UpdateEventForm';

interface ChallengeUpdateFormFooterPropsI {
  formName: typeof updateEventFormName;
}

export const ChallengeUpdateFormFooter: React.FC<ChallengeUpdateFormFooterPropsI> = ({
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
          <Text fontWeight="600">Update</Text>
        </Common.ImpaktButton>
      </Box>
    </HStack>
  );
};
