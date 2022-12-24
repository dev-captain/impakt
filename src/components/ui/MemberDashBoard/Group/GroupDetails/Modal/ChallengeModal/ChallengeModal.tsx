import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';

import {
  // ChallengeTab,
  ChallengeTabs,
} from '../../../../../../../data';
import {
  // usePersistedAuthStore,
  usePersistedChallengeStore,
} from '../../../../../../../lib/zustand';
import ChallengeModalHeader from '../ChallengeModalTabs/ChallengeModalHeader';
// import ChallengeModalTabTitleText from './ChallengeModalTabs/ChallengeModalTabTitleText';
import { GetRoutineRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getRoutineRes';
import { GetChallengeRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';
import { ChallengeModalBody } from './Body/ChallengeModalBody';
import { ChallengeModalHeaders } from './Headers/ChallengeModalHeaders';
import { ChallengeModalFooters } from './Footers/ChallengeModalFooters';

export type ChallengeModalScreens =
  | 'select'
  | 'preview'
  | 'create'
  | 'create-event'
  | 'preview-routine'
  | 'create-challenge-form'
  | 'create-challenge-event-form'
  | 'update-challenge-event-form';

interface ChallengeModalProps {
  open: boolean;
  close: () => void;
  setActiveChallenge: (activeChallenge: GetChallengeRes) => void;
  initScreen?: ChallengeModalScreens;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({
  open,
  close,
  setActiveChallenge,
  initScreen,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [activeTab, _] = React.useState<ChallengeTabs>('routine');
  const [activeScreen, setActiveScreen] = React.useState<ChallengeModalScreens[]>([
    initScreen ?? 'select',
  ]);
  const [previewChallenge, setPreviewChallenge] = React.useState<GetChallengeRes | null>(null);
  const [previewRouitine, setRoutinePreview] = React.useState<GetRoutineRes | null>(null);

  const { availableGroupChallenges } = usePersistedChallengeStore();
  const currentScreen = activeScreen[activeScreen.length - 1];

  const moveToNextScreen = (newScreen: ChallengeModalScreens) => {
    setActiveScreen((prev) => [...prev, newScreen]);
  };

  const moveBackToPreviousScreen = () => {
    if (activeScreen.length > 1) {
      const shallow = [...activeScreen];
      shallow.pop();
      setActiveScreen(shallow);
    }
  };
  const moveToFirstScreenAndDeleteHistory = () => {
    setActiveScreen(['select']);
  };

  return (
    <Modal isOpen={open} scrollBehavior="inside" onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '720px' }}
        mt="140px"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <ChallengeModalHeader
          goBackOnClick={() => moveBackToPreviousScreen()}
          showGoBackIcon={activeScreen.length > 1}
          currentScreen={currentScreen}
          previewHeaderText={previewChallenge?.name ?? ''}
          createPreviewHeaderText={previewRouitine?.name ?? ''}
        >
          <ModalCloseButton
            onClick={close}
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </ChallengeModalHeader>

        {/* <Box position="relative" w="100%" display={{ base: 'block', md: 'none' }}>
          <Input
            mt="20px"
            placeholder="Search"
            background="#EEF4F6"
            border="0"
            _focus={{ border: '0' }}
            borderRadius="12px"
            mr="24px"
            pl="48px"
            w="100%"
          />
          <I.SearchIcon position="absolute" top="25px" left="18px" width="24px" color="#29323B" />
        </Box> */}
        <ModalBody overflowX="hidden" p="0">
          {/* MODAL BODY HEADER START HERE */}
          <ChallengeModalHeaders
            availableGroupChallenges={availableGroupChallenges}
            currentScreen={currentScreen}
            activeTab={activeTab}
            moveToNextScreen={moveToNextScreen}
            previewRoutine={previewRouitine}
            previewChallenge={previewChallenge}
          />
          {/* MODAL BODY HEADER END HERE */}
          {/* MODAL BODY CONTENT START HERE */}
          <ChallengeModalBody
            moveToNextScreen={moveToNextScreen}
            moveWithoutHistory={moveToFirstScreenAndDeleteHistory}
            onClose={close}
            setActiveChallenge={setActiveChallenge}
            setPreviewChallenge={setPreviewChallenge}
            setRoutinePreview={setRoutinePreview}
            previewRoutine={previewRouitine}
            previewChallenge={previewChallenge}
            activeTab={activeTab}
            currentScreen={currentScreen}
          />
          {/* MODAL BODY CONTENT END HERE */}
        </ModalBody>

        <ModalFooter
          mb="0 !important"
          px="0 !important"
          pb="0 !important"
          justifyContent="flex-start"
        >
          {/* MODAL FOOTER START HERE */}
          <ChallengeModalFooters
            moveToNextScreen={moveToNextScreen}
            onClose={close}
            setActiveChallenge={setActiveChallenge}
            previewRoutine={previewRouitine}
            previewChallenge={previewChallenge}
            activeTab={activeTab}
            currentScreen={currentScreen}
          />
          {/* MODAL FOOTER END HERE */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChallengeModal;
