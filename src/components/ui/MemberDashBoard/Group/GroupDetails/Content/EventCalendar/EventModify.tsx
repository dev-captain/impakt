import React from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { Forms, I } from 'components';

import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';

import ChallengeModal from '../../Modal/ChallengeModal';

interface EventModifyPropsI {
  showGoBackButton?: boolean;
  title: string;
  type: 'create' | 'update';
}

const EventModify: React.FC<EventModifyPropsI> = ({ showGoBackButton = true, title, type }) => {
  const [assocId, setAssocId] = React.useState<number>(NaN);
  const [assocName, setAssocName] = React.useState<string>('');
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
            setAssocId(NaN);
            setAssocName('');
          }}
          assocId={assocId}
          assocName={assocName}
        />
      )}
      {type === 'update' && (
        <Forms.UpdateEventForm
          onOpen={onOpen}
          clearAssoc={() => {
            setAssocId(NaN);
            setAssocName('');
          }}
          assocId={assocId}
          assocName={assocName}
        />
      )}
      <ChallengeModal
        setAssocId={setAssocId}
        setAssocName={setAssocName}
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
