import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { ChallengeModalScreens } from '../ChallengeModal/ChallengeModal';
import ChallengeModalHeadlineText from './ChallengeModalHeadlineText';

interface ChallengeModalHeaderPropsI {
  showGoBackIcon: boolean;
  currentScreen: ChallengeModalScreens;
  previewHeaderText: string;
  createPreviewHeaderText: string;
  goBackOnClick: () => void;
}

const ChallengeModalHeader: React.FC<ChallengeModalHeaderPropsI> = ({
  children,
  showGoBackIcon,
  currentScreen,
  previewHeaderText,
  createPreviewHeaderText,
  goBackOnClick,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {showGoBackIcon && (
        <ChevronLeftIcon onClick={goBackOnClick} fontSize="30px" cursor="pointer" />
      )}
      <Box w="full" wordBreak="keep-all" minW="355px">
        {currentScreen === 'select' && <ChallengeModalHeadlineText title="Select Challenge" />}
        {currentScreen === 'select-challenge-event' && (
          <ChallengeModalHeadlineText title="Create Event" />
        )}
        {currentScreen === 'create' && <ChallengeModalHeadlineText title="Create Challenge" />}
        {currentScreen === 'create-challenge-event' && (
          <ChallengeModalHeadlineText title="Create Event" />
        )}
        {(currentScreen === 'preview' ||
          currentScreen === 'preview-challenge-event' ||
          currentScreen === 'preview-challenge-replace-event-form') && (
          <ChallengeModalHeadlineText ml="24px" title={previewHeaderText} />
        )}

        {currentScreen === 'preview-routine' && (
          <ChallengeModalHeadlineText ml="24px" title={createPreviewHeaderText} />
        )}

        {currentScreen === 'create-challenge-form' && (
          <ChallengeModalHeadlineText ml="24px" title="Create Challenge" />
        )}

        {currentScreen === 'create-challenge-event-form' && (
          <ChallengeModalHeadlineText ml="24px" title="Create Event" />
        )}

        {currentScreen === 'update-challenge-event-form' && (
          <ChallengeModalHeadlineText ml="24px" title="Edit Event" />
        )}

        {currentScreen === 'update-challenge-replace-event-form' && (
          <ChallengeModalHeadlineText ml="24px" title="Edit Event" />
        )}
      </Box>
      <Box position="relative" w="100%" display={{ base: 'none', md: 'block' }} />
      {children}
    </Box>
  );
};

export default ChallengeModalHeader;
