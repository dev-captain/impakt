import * as React from 'react';

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { Flex, Box, Center } from '@chakra-ui/react';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const IntegrateSocialMedia: React.FC = () => {
  const group = usePersistedGroupStore().activeGroup;
  /* eslint no-underscore-dangle: 0 */
  const inviteUrl = `${window.location.origin}/invite-link?group_id=${group?.id}&private=${group?.private}`;

  const title = "Hi, I'd like you to join this amazing social fitness group on Impakt";

  return (
    <Center>
      <Flex>
        <Box p="4">
          <TwitterShareButton url={inviteUrl} title={title}>
            <TwitterIcon size="50" round />
          </TwitterShareButton>
        </Box>
        <Box p="4">
          <FacebookShareButton url={inviteUrl} quote={title}>
            <FacebookIcon size="50" round />
          </FacebookShareButton>
        </Box>

        <Box p="4">
          <TelegramShareButton url={inviteUrl} title={title}>
            <TelegramIcon size="50" round />
          </TelegramShareButton>
        </Box>

        <Box p="4">
          <WhatsappShareButton url={inviteUrl} title={title}>
            <WhatsappIcon size="50" round />
          </WhatsappShareButton>
        </Box>
      </Flex>
    </Center>
  );
};

export default IntegrateSocialMedia;
