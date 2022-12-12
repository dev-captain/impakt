import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import CopyGroupInviteLinkForm from './CopyGroupInviteLinkForm';
import IntegrateSocialMedia from './IntegrateSocialMedia';
// import InvitationByEmail from './InvitationByEmail';

const GroupInviteLink: React.FC = () => {
  return (
    <VStack justifyContent="center" alignItems="center" w="full" paddingRight="8px">
      <Text
        w="100%"
        fontSize={{ base: 'regular2', md: 'regular3' }}
        color="#4E6070"
        fontWeight="500"
      >
        Copy link:
      </Text>
      <CopyGroupInviteLinkForm />
      <IntegrateSocialMedia />
      {/* <InvitationByEmail /> */}
    </VStack>
  );
};

export default GroupInviteLink;
