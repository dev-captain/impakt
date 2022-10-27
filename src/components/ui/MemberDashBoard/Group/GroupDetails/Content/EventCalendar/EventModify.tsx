import React from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { useEventCalendarContext } from '../../../../../../../context/EventCalendarContext';
import { Forms } from '../../../../../..';

interface EventModifyPropsI {
  showGoBackButton?: boolean;
  title: string;
  type: 'create' | 'update';
}

const EventModify: React.FC<EventModifyPropsI> = ({ showGoBackButton = true, title, type }) => {
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
      {type === 'create' && <Forms.CreateEventForm />}
      {type === 'update' && <Forms.UpdateEventForm />}
    </Box>
  );
};
export default EventModify;
