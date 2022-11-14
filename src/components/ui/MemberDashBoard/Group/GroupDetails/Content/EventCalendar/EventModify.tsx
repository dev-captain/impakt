import React from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { Forms, I } from 'components';

import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';

import ChallengeModal from '../../Modal/ChallengeModal';
import { GetChallengeRes } from '../../../../../../../lib/impakt-dev-api-client/react-query/types/getChallengeRes';

interface EventModifyPropsI {
  showGoBackButton?: boolean;
  title: string;
  type: 'create' | 'update';
}

const EventModify: React.FC<EventModifyPropsI> = ({ showGoBackButton = true, title, type }) => {
  const [activeChallenge, setActiveChallenge] = React.useState<GetChallengeRes | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { goBackToOverViewScreen } = useEventCalendarContext();

  return (
    <Box>
      <Box display="flex" justifyContent="left" alignItems="center" mb="16px">
        {showGoBackButton && (
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => goBackToOverViewScreen()}
            marginRight="5px"
          />
        )}
        <Text color="#29323B" fontWeight="600" fontSize="20px">
          {title}
        </Text>
      </Box>
      {type === 'create' && (
        <Forms.CreateEventForm
          onOpen={onOpen}
          clearAssoc={() => {
            setActiveChallenge(null);
          }}
          assocId={activeChallenge?.id ?? 0}
          assocName={activeChallenge?.name ?? ''}
        />
      )}
      {type === 'update' && (
        <Forms.UpdateEventForm
          onOpen={onOpen}
          clearAssoc={() => {
            setActiveChallenge(null);
          }}
          assocId={activeChallenge?.id ?? 0}
          assocName={activeChallenge?.name ?? ''}
        />
      )}
      <ChallengeModal
        setActiveChallenge={setActiveChallenge}
        key="2"
        open={isOpen}
        close={() => {
          onClose();
        }}
      />
    </Box>
  );
};
export default EventModify;
