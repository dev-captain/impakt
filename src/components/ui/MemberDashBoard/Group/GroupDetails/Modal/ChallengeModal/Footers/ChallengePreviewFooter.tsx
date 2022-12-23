import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import { Common } from '../../../../../../..';
import { getTimeDifference } from '../../../../../../../../utils';
import ChallengeCardMetaLabel from '../../ChallengeModalTabs/ChallengesCard/ChallengeCardMetaLabel';

interface ChallengePreviewFooterPropsI {
  validFrom: string;
  validUntil: string;
  selectOnClick: () => void;
}

export const ChallengePreviewFooter: React.FC<ChallengePreviewFooterPropsI> = ({
  validFrom,
  validUntil,
  selectOnClick,
}) => {
  return (
    <HStack w="full" justifyContent="space-between">
      <Box>
        <ChallengeCardMetaLabel
          // creatorName={member?.firstName ?? member?.username ?? ''}
          times={getTimeDifference(validFrom, validUntil)}
        />
      </Box>
      <Box>
        <Common.ImpaktButton
          onClick={selectOnClick}
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
