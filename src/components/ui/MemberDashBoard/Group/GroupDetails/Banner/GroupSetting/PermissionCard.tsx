import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common } from 'components';

interface ChallengesCardProps {
  title: string;
}

const PermissionCard: React.FC<ChallengesCardProps> = ({ title }) => {
  return (
    <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
      <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
        {title}
      </Text>
      <Box display="flex" width="100%" mt="12px">
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          w="120px"
          h="42px"
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="500"
        >
          <Text ml={{ md: '11px', base: '6px' }} fontSize={{ md: '16px', base: '12px' }}>
            Anybody
          </Text>
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          color="#728BA3"
          w="120px"
          h="42px"
          backgroundColor="transparent"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px', base: '14px' }}
          fontWeight="500"
        >
          Nobody
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default PermissionCard;
