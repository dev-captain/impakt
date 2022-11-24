import React from 'react';
import { Box, Text, HStack, StackProps } from '@chakra-ui/react';
import { I } from 'components';
import { GetTimelineBlockResType } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getTimelineBlockResType';
import { GetTimelineBlockAttributeResType } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types';
import { padTo2Digits } from '../../../../../../../../utils';

interface ChallengePreviewItemCardPropsI {
  exerciseName: string;
  exerciseType: GetTimelineBlockResType;
  timeLineBlockType: GetTimelineBlockAttributeResType;
  timeLineBlockValue: number;
}

const ChallengePreviewItemCard: React.FC<ChallengePreviewItemCardPropsI & StackProps> = ({
  exerciseName,
  exerciseType,
  timeLineBlockType,
  timeLineBlockValue,
  ...props
}) => {
  const value =
    // eslint-disable-next-line no-nested-ternary
    timeLineBlockType === 'CountConstraint' || timeLineBlockType === 'CountGoal'
      ? timeLineBlockValue
      : timeLineBlockType === 'TimeConstraint' || timeLineBlockType === 'TimeGoal'
      ? `${padTo2Digits(Math.floor(timeLineBlockValue / 60))}:${padTo2Digits(
          Math.ceil(timeLineBlockValue / 1000),
        )}`
      : 0;

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
      <Box display="flex" w="100%" id="exercise-title-box">
        <Box w="52px">
          <Text color="#728BA3" fontWeight="500" fontSize="18px" lineHeight="100%">
            {value}
          </Text>
        </Box>
        <Box w="12px" />
        <Text fontWeight="500" color="#29323B" fontSize="18px" lineHeight="100%">
          {exerciseName}
        </Text>
      </Box>
      <Box id="type-of-exercise-box">
        {exerciseType === 'Blitz' && <I.SpeedExerciseIcon />}
        {exerciseType === 'Rest' && <I.RestExerciseIcon />}
        {exerciseType === 'HIIT' && <I.TimeExerciseIcon />}
        {exerciseType === 'HoldPose' && <I.HoldExerciseIcon />}
        {exerciseType === 'Rhythm' && <I.TimeExerciseIcon />}
      </Box>
    </HStack>
  );
};
export default ChallengePreviewItemCard;
