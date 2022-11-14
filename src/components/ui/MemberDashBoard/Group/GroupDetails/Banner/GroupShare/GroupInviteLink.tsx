import React from 'react';
import { VStack } from '@chakra-ui/react';
import CopyGroupInviteLinkForm from './CopyGroupInviteLinkForm';
import IntegrateSocialMedia from './IntegrateSocialMedia';
// import InvitationByEmail from './InvitationByEmail';

const GroupInviteLink: React.FC = () => {
  return (
    <VStack justifyContent="center" alignItems="center" w="full" paddingRight="8px">
      <CopyGroupInviteLinkForm />
      <IntegrateSocialMedia />
      {/* <InvitationByEmail /> */}
    </VStack>
  );
};

export default GroupInviteLink;
