import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import CreateEventForm from '../Forums/CreateEventForm';

const CreateEvent: React.FC = () => {
  const { goBackToOverViewScreen } = useEventCalendarContext();

  return (
    <Box>
      <Box display="flex" justifyContent="left" alignItems="center" mb="16px">
        <ChevronLeftIcon
          fontSize="30px"
          padding="3px"
          backgroundColor=" #ffffff"
          borderRadius=" 8px"
          cursor=" pointer"
          onClick={() => goBackToOverViewScreen()}
          marginRight="5px"
        />
        <Text color="#29323B" fontWeight="600" fontSize="20px">
          Create event
        </Text>
      </Box>
      <CreateEventForm />
    </Box>
  );
};

export default CreateEvent;
