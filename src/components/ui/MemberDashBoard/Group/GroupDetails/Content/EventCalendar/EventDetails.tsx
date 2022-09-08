import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { I, Common } from 'components';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface EventDetailsProps {
  data: Function;
  name: String;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data, name }) => {
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
            onClick={() => data('first')}
            marginRight="5px"
          />
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            Power Training
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon fontSize="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            This event created for lorem ipsum dolor sit amet
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon width="20px" height="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            Friday, September 9
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            1:00 – 2:30pm
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.PeopleIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          {name === 'event' && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              39 members
            </Text>
          )}
          {name === 'unjoin' && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              <Text as="span" fontWeight="bold">
                You
              </Text>{' '}
              and 39 members more
            </Text>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="34px">
            <I.ArrowIcon w="15px" height="15px" color="#728BA3" />
          </Box>
          <Text color="#5C7FFF" fontSize="16px" fontWeight="500">
            impakt.com/e/ehF47bc
          </Text>
        </Box>
      </Box>
      {name === 'event' && (
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => data('unjoin')}
        >
          <I.CoolIcon fontSize="10px" />
          <Text marginLeft="10px">Going</Text>
        </Common.ImpaktButton>
      )}
      {name === 'unjoin' && (
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
        >
          <I.CloseIcon width="16px" height="16px" />
          <Text marginLeft="10px" fontWeight="600">
            Not going
          </Text>
        </Common.ImpaktButton>
      )}
    </>
  );
};

export default EventDetails;
