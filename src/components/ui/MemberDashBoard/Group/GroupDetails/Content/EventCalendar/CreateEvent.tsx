import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { I, Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';

const CreateEvent: React.FC = () => {
  const { goBackToOverViewScreen } = useEventCalendarContext();

  return (
    <>
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
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.TextIcon width="20px" height="20px" />
          </Box>
          <Text color="#B0C3D6" fontSize="16px" fontWeight="500" maxW="258px">
            Add title
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon width="20px" height="20px" />
          </Box>
          <Text color="#B0C3D6" fontSize="16px" fontWeight="500">
            Add description
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            Thursday, September 1
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            10:00pm - 10:30pm
          </Text>
        </Box>
      </Box>
      <Common.ImpaktButton
        variant="black"
        colorScheme="#fff"
        h={{ md: '48px', base: '40px' }}
        backgroundColor="#29323B"
        borderRadius="8px"
        type="submit"
        fontSize={{ md: '16px' }}
        fontWeight="700"
      >
        <I.SendIcon fontSize="10px" />
        <Text marginLeft="10px">Create</Text>
      </Common.ImpaktButton>
    </>
  );
};

export default CreateEvent;
