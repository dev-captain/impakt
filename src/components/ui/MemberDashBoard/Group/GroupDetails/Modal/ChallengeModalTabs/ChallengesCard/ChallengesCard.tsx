import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Day } from 'dayspan';
import { getTimeDifference, truncateString } from '../../../../../../../../utils';
import ChallengesCardScoreLabelsWrapper from './ChallengesCardScoreLabelsWrapper';
import ChallengeCardMetaLabel from './ChallengeCardMetaLabel';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';

interface ChallengesCardProps {
  challenge: GetChallengeRes;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({ challenge, children }) => {
  return (
    <Box
      padding={{ base: '12px', md: '24px' }}
      border="2px solid #EEF4F6"
      borderRadius="24px"
      marginBottom="16px"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        lineHeight={{ base: '35px', md: 0 }}
      >
        <Text color="#29323B" fontSize={{ base: '18px', md: '24px' }} fontWeight="600">
          {truncateString(`${challenge.name}`, 23)}
        </Text>

        <ChallengesCardScoreLabelsWrapper
          attemptScore={challenge.Routine.TimelineBlocks?.length}
          estimationTimeScore={`${Math.ceil(challenge.Routine.estimatedTime / 60)} min`}
          likeScore={challenge.likes ?? undefined}
        />
      </Box>
      <Box
        mt={{ base: '14px', md: '20px' }}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <ChallengeCardMetaLabel
          times={getTimeDifference(challenge.validFrom, challenge.validUntil ?? '')}
        />
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap="12px"
          mt={{ base: '10px', md: 0 }}
        >
          {/* <Common.ImpaktButton
            variant="black"
            color="#29323B"
            h="38px"
            w="128px !important"
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight="700"
          >
            <Text>Preview</Text>
          </Common.ImpaktButton> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ChallengesCard;
