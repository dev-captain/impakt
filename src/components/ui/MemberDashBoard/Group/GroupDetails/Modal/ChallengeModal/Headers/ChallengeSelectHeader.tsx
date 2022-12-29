import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { Common } from '../../../../../../..';

interface ChallengeSelectHeaderPropsI {
  onClick: () => void;
  areThereChallenges: boolean;
}

const ChallengeSelectHeader: React.FC<ChallengeSelectHeaderPropsI> = ({
  areThereChallenges,
  onClick,
}) => {
  return (
    <VStack alignItems="flex-start" mt="24px" mb="24px" rowGap="24px" padding="4px">
      {areThereChallenges && (
        <HStack w="full" justifyContent="flex-end">
          <Box minW="148px">
            <Common.ImpaktButton
              onClick={onClick}
              variant="orange-black"
              leftIcon={<AddIcon fontSize="10px" />}
            >
              Create
            </Common.ImpaktButton>
          </Box>
        </HStack>
      )}
    </VStack>
  );
};
export default ChallengeSelectHeader;
