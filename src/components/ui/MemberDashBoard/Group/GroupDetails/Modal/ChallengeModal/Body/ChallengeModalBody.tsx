import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { ChallengeTabs } from '../../../../../../../../data';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { usePersistedChallengeStore } from '../../../../../../../../lib/zustand';
import { ChallengeModalScreens } from '../ChallengeModal';
import { ChallengeCreateBody } from './ChallengeCreateBody';
import { ChallengeCreateFormBody } from './ChallengeCreateFormBody';
import ChallengePreviewRoutineBody from './ChallengePreviewRoutineBody';
import { ChallengeSelectBody } from './ChallengeSelectBody';

interface ChallengeModalBodyPropsI {
  activeTab: ChallengeTabs;
  currentScreen: ChallengeModalScreens;
  moveToNextScreen: (newScreen: ChallengeModalScreens) => void;
  moveWithoutHistory: () => void;
  setPreviewChallenge: (challenge: GetChallengeRes | null) => void;
  setRoutinePreview: (routine: GetRoutineRes | null) => void;
  setActiveChallenge: (activeChallenge: GetChallengeRes) => void;
  onClose: () => void;
  previewRoutine: GetRoutineRes | null;
  previewChallenge: GetChallengeRes | null;
}

export const ChallengeModalBody: React.FC<ChallengeModalBodyPropsI> = ({
  moveWithoutHistory,
  currentScreen,
  activeTab,
  moveToNextScreen,
  setActiveChallenge,
  onClose,
  setPreviewChallenge,
  setRoutinePreview,
  previewRoutine,
  previewChallenge,
}) => {
  const { availableGroupChallenges, availableGroupRoutines } = usePersistedChallengeStore();

  return (
    <Box
      height="530px"
      overflowY="auto"
      overflowX="hidden"
      paddingRight="8px"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          visibility: 'initial',
          width: '10px',
          background: '#D3E2F0',
          borderRadius: '24px',
        },
      }}
    >
      {/* // SELECT BODY  */}
      {currentScreen === 'select' && activeTab === 'routine' && (
        <ChallengeSelectBody
          challenges={availableGroupChallenges}
          noItemCardCreateOnClick={() => moveToNextScreen('create')}
          selectOnClick={(challengeI) => {
            // setActiveGroupChallenge(challenge);
            setActiveChallenge(challengeI);
            onClose();
          }}
          previewOnClick={(challengeI) => {
            setPreviewChallenge(challengeI);
            moveToNextScreen('preview');
          }}
        />
      )}

      {/* // PREVIEW BODY  */}
      {currentScreen === 'preview' && activeTab === 'routine' && previewChallenge && (
        <ChallengePreviewRoutineBody
          previewRoutine={previewChallenge.Routine.TimelineBlocks ?? []}
        />
      )}

      {/* // PREVIEW ROUTINE BODY  */}

      {currentScreen === 'preview-routine' && activeTab === 'routine' && previewRoutine && (
        <ChallengePreviewRoutineBody previewRoutine={previewRoutine.TimelineBlocks ?? []} />
      )}

      {/* // CREATE CHALLENGE BODY  */}
      {currentScreen === 'create' && activeTab === 'routine' && (
        <ChallengeCreateBody
          routines={availableGroupRoutines}
          previewOnClick={(routine) => {
            setRoutinePreview(routine);
            moveToNextScreen('preview-routine');
          }}
          selectOnClick={(routine) => {
            setRoutinePreview(routine);
            moveToNextScreen('create-challenge-form');
          }}
        />
      )}

      {/* // CREATE CHALLENGE FORM BODY  */}
      {currentScreen === 'create-challenge-form' && activeTab === 'routine' && (
        <ChallengeCreateFormBody
          formCb={moveWithoutHistory}
          previewOnClick={() => {
            moveToNextScreen('preview-routine');
          }}
          replaceOnClick={() => {
            setRoutinePreview(null);
            moveToNextScreen('create');
          }}
          previewRoutine={previewRoutine}
        />
      )}
    </Box>
  );
};
