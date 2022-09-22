import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common } from 'components';
import PermissionCard from './PermissionCard';

const PermissionTab: React.FC = () => {
  return (
    <Box>
      <Box
        height="470px"
        overflow="auto"
        paddingRight="8px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            visibility: 'initial',
            width: '10px',
            background: '#D3E2F0',
            borderRadius: '24px',
          },
        }}
      >
        <PermissionCard title="Is your group public or private?" />
      </Box>
      <Box mt="20px" textAlign="end">
        <Common.ImpaktButton
          variant="black"
          color="#fff"
          w="147px"
          h="60px"
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="500"
        >
          <Text
            ml={{ md: '11px', base: '6px' }}
            fontSize={{ md: '20px', base: '16px' }}
            fontWeight="600"
          >
            Save
          </Text>
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default PermissionTab;
