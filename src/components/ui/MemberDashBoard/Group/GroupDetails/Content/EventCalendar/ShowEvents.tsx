import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common } from 'components';
import { AddIcon } from '@chakra-ui/icons';

interface ShowEventsProps {
  data: Function;
}

const ShowEvents: React.FC<ShowEventsProps> = ({ data }) => {
  return (
    <>
      <Box>
        <Box display="flex" mb="16px">
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            September 9, 2022
          </Text>
        </Box>
        <Box
          background="#E7ECFF"
          p="8px"
          color="#4364D9"
          borderRadius="8px"
          mb="3px"
          onClick={() => data('join')}
        >
          <Text fontSize="14px" fontWeight="600">
            Good morning
          </Text>
          <Text fontSize="12px" fontWeight="500">
            09:00 AM - 10:00 AM
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="3px">
          <Box background="#5C7FFF" w="8px" h="8px" borderRadius="50%" marginLeft="-6px" />
          <Box backgroundColor="#5C7FFF" borderRadius="0px 8px 8px 0px" h="2px" w="100%" />
        </Box>
        <Box
          background="#E7ECFF"
          p="8px"
          color="#4364D9"
          borderRadius="8px"
          onClick={() => data('event')}
        >
          <Text fontSize="14px" fontWeight="600">
            Power Training
          </Text>
          <Text fontSize="12px" fontWeight="500">
            1:00 PM - 2:00 pM
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
        onClick={() => data('create')}
      >
        <AddIcon marginRight="11px" fontSize="10px" />
        Create
      </Common.ImpaktButton>
    </>
  );
};

export default ShowEvents;
