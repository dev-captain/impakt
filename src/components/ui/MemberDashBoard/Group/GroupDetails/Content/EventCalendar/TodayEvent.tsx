import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { I, Common } from 'components';
import { DeleteIcon, ChevronLeftIcon } from '@chakra-ui/icons';

interface TodayEventProps {
  data: Function;
  name: String;
}

const TodayEvent: React.FC<TodayEventProps> = ({ data, name }) => {
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
          <Box display="flex" justifyContent="space-between" alignContent="center">
            <Text color="#29323B" fontWeight="600" fontSize="20px" marginRight="50px">
              Good morning
            </Text>
            {name === 'join' && (
              <Box background="#5C7FFF" borderRadius="16px" textAlign="center" p="2px 14px">
                <Text color="#fff" fontWeight="700">
                  LIVE
                </Text>
              </Box>
            )}
          </Box>
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
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            17 members
          </Text>
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
      {name === 'join' && (
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => data('todayEvent')}
        >
          <I.ArrowIcon fontSize="12px" />
          <Text marginLeft="10px">Join Now</Text>
        </Common.ImpaktButton>
      )}
      {name === 'todayEvent' && (
        <Box display="flex" gap="8px">
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
            <I.CoolIcon fontSize="12px" />
            <Text marginLeft="10px">Going</Text>
          </Common.ImpaktButton>
          <Common.ImpaktButton
            variant="black"
            w="48px"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <I.PenIcon width="18px" />
          </Common.ImpaktButton>
          <Common.ImpaktButton
            variant="black"
            w="48px"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#FEE1E3"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <DeleteIcon width="18px" color="#F84153" onClick={() => data('remove')} />
          </Common.ImpaktButton>
        </Box>
      )}
    </>
  );
};

export default TodayEvent;
