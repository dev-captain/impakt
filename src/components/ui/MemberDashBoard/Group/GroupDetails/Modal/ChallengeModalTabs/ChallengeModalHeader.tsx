import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { OverViewScreenTypes } from '../../../../../../../context/EventCalendarContext';
import ChallengeModalHeadlineText from './ChallengeModalHeadlineText';

interface ChallengeModalHeaderPropsI {
  showGoBackIcon: boolean;
  currentScreen:
    | 'select'
    | 'create'
    | 'preview'
    | 'preview-routine'
    | 'create-challenge-form'
    | 'create-event-form'
    | OverViewScreenTypes;
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
        {currentScreen === 'create' && <ChallengeModalHeadlineText title="Create Challenge" />}
        {currentScreen === 'preview' && (
          <ChallengeModalHeadlineText ml="24px" title={previewHeaderText} />
        )}
        {currentScreen === 'preview-routine' && (
          <ChallengeModalHeadlineText ml="24px" title={createPreviewHeaderText} />
        )}

        {currentScreen === 'create-challenge-form' && (
          <ChallengeModalHeadlineText ml="24px" title="Create Challenge" />
        )}
      </Box>
      <Box position="relative" w="100%" display={{ base: 'none', md: 'block' }} />
      {children}
    </Box>
  );
};

export default ChallengeModalHeader;
