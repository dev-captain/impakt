import React from 'react';
import { Box } from '@chakra-ui/react';

import UpdateGroupNameForm from './UpdateGroupNameForm';
import UpdateGroupImageForm from './UpdateGroupImageForm';

const EditGroupTab: React.FC = () => {
  return (
    <Box
      height={{ base: '550px', md: 'aut0' }}
      overflowY="auto"
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
      <UpdateGroupNameForm />
      <UpdateGroupImageForm />
    </Box>
  );
};

export default EditGroupTab;
