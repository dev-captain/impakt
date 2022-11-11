import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import { I } from 'components';
import { convertMsToHM } from '../../../../../../../../utils';

interface ChallengePreviewItemCardPropsI {
  exerciseName: string;
  exerciseType: 'time' | 'count';
  lengthOfExercise: number;
}

const ChallengePreviewItemCard: React.FC<ChallengePreviewItemCardPropsI> = ({
  exerciseName,
  exerciseType,
  lengthOfExercise,
}) => {
  return (
    <HStack
      background="#F5F8FA"
      borderRadius="16px"
      padding="16px"
      gap="16px"
      justifyContent="space-between"
      alignItems="center"
      w="full"
    >
      <Box id="length-of-exercise-box">
        <Text color="#728BA3" fontWeight="500" fontSize="18px" lineHeight="100%">
          {`${convertMsToHM(lengthOfExercise).m}:${convertMsToHM(lengthOfExercise).s}`}
        </Text>
      </Box>
      <Box w="100%" id="exercise-title-box">
        <Text fontWeight="500" color="#29323B" fontSize="18px" lineHeight="100%">
          {exerciseName}
        </Text>
      </Box>
      <Box id="type-of-exercise-box">
        {exerciseType === 'count' && <I.CountExerciseIcon />}
        {exerciseType === 'time' && <I.TimeExerciseIcon />}
      </Box>
    </HStack>
  );
};
export default ChallengePreviewItemCard;
