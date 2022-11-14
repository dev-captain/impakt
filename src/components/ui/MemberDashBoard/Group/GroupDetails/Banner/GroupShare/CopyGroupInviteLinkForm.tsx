import * as React from 'react';
import { Box, Text, useClipboard } from '@chakra-ui/react';
import { I } from 'components';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';
import { renderToast } from '../../../../../../../utils';

const CopyGroupInviteLinkForm: React.FC = () => {
  const group = usePersistedGroupStore().activeGroup;

  /* eslint no-underscore-dangle: 0 */
  const inviteUrl = `${window.location.origin}/invite-link?group_id=${group?.id}&private=${group?.private}`;
  const { hasCopied, onCopy } = useClipboard(inviteUrl, { timeout: 3000 });

  const copyClipBoardInviteLink = () => {
    onCopy();
    renderToast('success', 'Your link has been copied successfully.', 'white');
  };

  return (
    <Box
      w="full"
      ml="0px !important"
      display="flex"
      justifyContent="space-between"
      bgColor="#F5F8FA"
      p="17px 24px"
      borderRadius="16px"
      alignItems="center"
      minH="64px"
      mt="8px"
    >
      <Box>
        <Text textStyle={{ base: 'regular2', sm: 'regular3' }} color="#4E6070">
          {inviteUrl}
        </Text>
      </Box>
      <Box onClick={copyClipBoardInviteLink}>
        {hasCopied ? null : (
          <I.CopyClipBoardIcon cursor="pointer" width="25" color="#4E6070" height="28" />
        )}
      </Box>
    </Box>
  );
};
export default CopyGroupInviteLinkForm;
