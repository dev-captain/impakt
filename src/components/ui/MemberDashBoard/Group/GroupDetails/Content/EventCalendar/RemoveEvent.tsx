import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DeleteIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import { I, Common } from 'components';

const RemoveEvent: React.FC = () => {
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
          <Box textAlign="center" marginLeft={{ base: '50px', md: '35px' }}>
            <Text color="#29323B" fontWeight="600" fontSize="20px">
              Are you sure?
            </Text>
            <Text color="#29323B" fontWeight="600" fontSize="20px">
              Event will be deleted.
            </Text>
          </Box>
        </Box>
        <Box background="#FEE1E3" p="8px" color="#C41F30" opacity="0.5" borderRadius="8px" mb="3px">
          <Text fontSize="14px" fontWeight="600">
            Good morning
          </Text>
          <Text fontSize="12px" fontWeight="500">
            09:00 AM - 10:00 AM
          </Text>
        </Box>
        <Box
          p="8px"
          color="#C41F30"
          opacity="0.5"
          borderRadius="8px"
          display="flex"
          alignItems="center"
        >
          <I.PeopleIcon cursor="pointer" width="26px" height="23px" marginRight="20px" />
          <Text fontSize="12px" fontWeight="500">
            24 members
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#F84153"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          marginRight="5px"
          _hover={{ backgroundColor: '#F84153' }}
        >
          <DeleteIcon width="18px" color="#fff" marginRight="5px" />
          Yes, delete
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          color="#29323B"
          _hover={{ backgroundColor: '#EEF4F6' }}
        >
          <DeleteIcon width="18px" color="#29323B" marginRight="5px" />
          No
        </Common.ImpaktButton>
      </Box>
    </>
  );
};

export default RemoveEvent;
