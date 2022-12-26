import React from 'react';
import { HStack, Box, Text } from '@chakra-ui/react';
import ChallengesCardScoreLabelsWrapper from '../../ChallengeModalTabs/ChallengesCard/ChallengesCardScoreLabelsWrapper';

interface ChallengePreviewHeaderPropsI {
  countExercises: number;
  estTime: number;
  likeCount?: number;
}

export const ChallengePreviewHeader: React.FC<ChallengePreviewHeaderPropsI> = ({
  countExercises,
  estTime,
  likeCount,
}) => {
  return (
    <HStack pl="0.5em" mt="24px" mb="24px" w="full" justifyContent="space-between">
      <Box>
        <Text
          fontWeight="500"
          color="fitnessGrayMinus1"
          letterSpacing="-0.01em"
          fontSize="24px"
          lineHeight="100%"
        >
          {countExercises} Exercises
        </Text>
      </Box>

      <Box>
        <ChallengesCardScoreLabelsWrapper
          estimationTimeScore={`${Math.ceil(estTime / 60)} min`}
          likeScore={likeCount ?? undefined}
        />
      </Box>
    </HStack>
  );
};
