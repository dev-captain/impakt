import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from 'components';

interface ChallengePreviewRoutineFooterPropsI {
  onSelectClick: () => void;
}

export const ChallengePreviewRoutineFooter: React.FC<ChallengePreviewRoutineFooterPropsI> = ({
  onSelectClick,
}) => {
  return (
    <HStack w="full" justifyContent="flex-end">
      <Box>
        <Common.ImpaktButton
          id="select-routine-button"
          onClick={onSelectClick}
          variant="black"
          w="159px !important"
          h="64px"
          borderRadius="1em"
          type="submit"
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="700"
        >
          <Text>Select</Text>
        </Common.ImpaktButton>
      </Box>
    </HStack>
  );
};
