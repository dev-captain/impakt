import * as React from 'react';
import { ChallengeTabs } from '../../../../../../../../data';
import { GetChallengeRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { GetRoutineRes } from '../../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { ChallengeModalScreens } from '../ChallengeModal';
import { ChallengeCreateFooter } from './ChallengeCreateFooter';
import { ChallengeCreateFormFooter } from './ChallengeCreateFormFooter';
import { ChallengePreviewFooter } from './ChallengePreviewFooter';
import { ChallengePreviewRoutineFooter } from './ChallengePreviewRoutineFooter';

interface ChallengeModalFootersPropsI {
  currentScreen: ChallengeModalScreens;
  activeTab: ChallengeTabs;
  previewChallenge: GetChallengeRes | null;
  previewRoutine: GetRoutineRes | null;
  onClose: () => void;
  moveToNextScreen: (newScreen: ChallengeModalScreens) => void;
  setActiveChallenge: (activeChallenge: GetChallengeRes) => void;
  setPreviewChallenge: (previewChallenge: GetChallengeRes) => void;
}
export const ChallengeModalFooters: React.FC<ChallengeModalFootersPropsI> = ({
  activeTab,
  currentScreen,
  moveToNextScreen,
  onClose,
  previewChallenge,
  previewRoutine,
  setActiveChallenge,
  setPreviewChallenge,
}) => {
  return (
    <>
      {(currentScreen === 'preview' || currentScreen === 'preview-challenge-event') &&
        activeTab === 'routine' &&
        previewChallenge && (
          <ChallengePreviewFooter
            selectOnClick={() => {
              // setActiveGroupChallenge(challenge);
              setActiveChallenge(previewChallenge);

              if (currentScreen === 'preview') {
                onClose();
              }
              if (currentScreen === 'preview-challenge-event') {
                setPreviewChallenge(previewChallenge);
                moveToNextScreen('create-challenge-event-form');
              }
            }}
            validFrom={previewChallenge.validFrom}
            validUntil={previewChallenge.validUntil ?? ''}
          />
        )}

      {currentScreen === 'create' && activeTab === 'routine' && <ChallengeCreateFooter />}

      {currentScreen === 'preview-routine' && activeTab === 'routine' && previewRoutine && (
        <ChallengePreviewRoutineFooter
          onSelectClick={() => {
            // setActiveGroupChallenge(challenge);
            // setchallengeName(previewChallenge.challenge.name);
            // setchallengeId(previewChallenge.challenge.id);
            moveToNextScreen('create-challenge-form');
          }}
        />
      )}

      {currentScreen === 'create-challenge-form' && activeTab === 'routine' && previewRoutine && (
        <ChallengeCreateFormFooter formName="create-challenge-form" />
      )}

      {currentScreen === 'create-challenge-event-form' &&
        activeTab === 'routine' &&
        previewChallenge && <ChallengeCreateFormFooter formName="create-challenge-event-form" />}
    </>
  );
};
