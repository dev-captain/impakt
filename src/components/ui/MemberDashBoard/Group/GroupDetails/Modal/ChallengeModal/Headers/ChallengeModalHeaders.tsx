import React from 'react';
import { ChallengeTabs } from '../../../../../../../../data';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { ChallengeModalScreens } from '../ChallengeModal';
import ChallengeCreateHeader from './ChallengeCreateHeader';
import { ChallengePreviewHeader } from './ChallengePreviewHeader';
import ChallengeSelectHeader from './ChallengeSelectHeader';

interface ChallengeModalHeadersPropsI {
  currentScreen: ChallengeModalScreens;
  availableGroupChallenges: GetChallengeRes[];
  moveToNextScreen: (newScreen: ChallengeModalScreens) => void;
  activeTab: ChallengeTabs;
  previewChallenge: GetChallengeRes | null;
  previewRoutine: GetRoutineRes | null;
}

export const ChallengeModalHeaders: React.FC<ChallengeModalHeadersPropsI> = ({
  currentScreen,
  availableGroupChallenges,
  moveToNextScreen,
  activeTab,
  previewChallenge,
  previewRoutine,
}) => {
  return (
    <>
      {currentScreen === 'select' && (
        <ChallengeSelectHeader
          areThereChallenges={availableGroupChallenges.length > 0}
          onClick={() => {
            moveToNextScreen('create');
          }}
        />
      )}

      {(currentScreen === 'create' || currentScreen === 'create-event') && (
        <ChallengeCreateHeader />
      )}

      {currentScreen === 'preview' && activeTab === 'routine' && (
        <ChallengePreviewHeader
          estTime={previewChallenge?.Routine.estimatedTime ?? 60}
          likeCount={previewChallenge?.likes}
          countExercises={previewChallenge?.Routine.TimelineBlocks?.length ?? 0}
        />
      )}

      {currentScreen === 'preview-routine' && activeTab === 'routine' && (
        <ChallengePreviewHeader
          estTime={previewRoutine?.estimatedTime ?? 60}
          countExercises={previewRoutine?.TimelineBlocks?.length ?? 0}
        />
      )}
    </>
  );
};
