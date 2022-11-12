import React from 'react';
import { Box, Text, HStack, StackProps } from '@chakra-ui/react';
import { I } from 'components';
import { convertMsToHM } from '../../../../../../../../utils';
import { GetTimelineBlockResType } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getTimelineBlockResType';

interface ChallengePreviewItemCardPropsI {
  exerciseName: string;
  exerciseType: GetTimelineBlockResType;
  lengthOfExercise: { m: string; s: string };
}

const ChallengePreviewItemCard: React.FC<ChallengePreviewItemCardPropsI & StackProps> = ({
  exerciseName,
  exerciseType,
  lengthOfExercise,
  ...props
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
      {...props}
    >
      <Box id="length-of-exercise-box">
        <Text color="#728BA3" fontWeight="500" fontSize="18px" lineHeight="100%">
          {`${lengthOfExercise.m}:${lengthOfExercise.s}`}
        </Text>
      </Box>
      <Box w="100%" id="exercise-title-box">
        <Text fontWeight="500" color="#29323B" fontSize="18px" lineHeight="100%">
          {exerciseName}
        </Text>
      </Box>
      <Box id="type-of-exercise-box">
        {exerciseType === 'Blitz' && <I.TimeExerciseIcon />}
        {exerciseType === 'Rest' && <I.RestExerciseIcon />}
        {exerciseType === 'HIIT' && <I.TimeExerciseIcon />}
        {exerciseType === 'HoldPose' && <I.HoldExerciseIcon />}
        {exerciseType === 'Rhythm' && <I.TimeExerciseIcon />}
      </Box>
    </HStack>
  );
};
export default ChallengePreviewItemCard;
