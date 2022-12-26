import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import { GetTimelineBlockRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getTimelineBlockRes';
import { normalizeExerciseNames } from '../../../../../../../../utils';
import ChallengePreviewItemCard from '../../ChallengeModalTabs/ChallengesCard/ChallengePreviewItemCard';

interface ChallengePreviewRoutineBodyPropsI {
  previewRoutine: GetTimelineBlockRes[];
}

const ChallengePreviewRoutineBody: React.FC<ChallengePreviewRoutineBodyPropsI> = ({
  previewRoutine,
}) => {
  return (
    <VStack rowGap="24px" pl="0.5em" justifyContent="flex-start" alignItems="flex-start">
      <VStack w="full" id="exercise-card-item-s" justifyContent="space-between">
        {normalizeExerciseNames(previewRoutine).map((exercise) => (
          <ChallengePreviewItemCard
            key={exercise.id}
            exerciseName={exercise.Exercise?.name ?? ''}
            timeLineBlockType={exercise.TimelineBlockAttributes[0].type}
            timeLineBlockValue={exercise.TimelineBlockAttributes[0].value}
            exerciseType={exercise.type}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default ChallengePreviewRoutineBody;
