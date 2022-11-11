import React from 'react';
import { Box } from '@chakra-ui/react';
import CopyGroupInviteLinkForm from './CopyGroupInviteLinkForm';
import IntegrateSocialMedia from './IntegrateSocialMedia';
import InvitationByEmail from './InvitationByEmail';

const GroupInviteLink: React.FC = () => {
  return (
    <Box
      height={{ base: 'unset', md: 'aut0' }}
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
      <CopyGroupInviteLinkForm />
      <IntegrateSocialMedia />
      <InvitationByEmail />
    </Box>
  );
};

export default GroupInviteLink;
