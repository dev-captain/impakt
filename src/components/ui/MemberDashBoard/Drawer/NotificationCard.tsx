import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { CloseIcon } from '@chakra-ui/icons';

interface NoitificationCardProps {
  name: string;
}

const NoitificationCard: React.FC<NoitificationCardProps> = ({ name }) => {
  return (
    <Box
      mt="16px"
      border="1px solid #DFEDF2"
      borderRadius="16px"
      p={{ md: '24px', base: '16px' }}
      pl="0"
    >
      <Text as="span" color="#5C7FFF" fontWeight="600">
        {name}{' '}
      </Text>
      <Text as="span" color="#4E6070">
        wants to join your group:
      </Text>
      <Box color="#728BA3" display="flex" alignItems="center" mt="16px">
        <I.PeopleIcon width="20px" mr="12px" />
        <Text fontWeight="600">Bodyweight Training</Text>
      </Box>
      <Box mt="16px" display="flex" justifyContent="space-between" width="100%">
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          w="47%"
          h="42px"
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontWeight="600"
        >
          <I.CheckIcon width="16px" height="16px" />
          <Text fontSize={{ md: '16px', base: '14px' }} ml="11px">
            Accept
          </Text>
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          w="47%"
          h="42px"
          backgroundColor="transparent"
          borderRadius="8px"
          fontSize={{ md: '16px', base: '14px' }}
          type="submit"
          fontWeight="600"
        >
          <CloseIcon color="#29323B" width="10px" height="10px" mr="11px" />
          Decline
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default NoitificationCard;
