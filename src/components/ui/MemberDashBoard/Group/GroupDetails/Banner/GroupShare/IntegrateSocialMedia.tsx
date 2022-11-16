// @ts-nocheck
import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
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
import { Flex, Center } from '@chakra-ui/react';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const IntegrateSocialMedia: React.FC = () => {
  const group = usePersistedGroupStore().activeGroup;
  /* eslint no-underscore-dangle: 0 */
  const inviteUrl = `${window.location.origin}/invite-link?group_id=${group?.id}&private=${group?.private}`;

  const title = "Hi, I'd like you to join this amazing social fitness group on Impakt";

  const handleClick = (data: any) => {
    if (typeof window !== 'undefined') {
      // let url = 'https://www.';
      const windowFeatures = 'left=100,top=100,width=320,height=320';
      if (data === 'discord') {
        alert('1');
        const url = `https://instagram://send?text={ inviteUrl }`;
        window.open(url, 'newWindows', windowFeatures);
      }
    }
  };

  return (
    <Center>
      <Flex>
        <SocialIcon
          onClick={handleClick('discord')}
          url="https://discord.com"
          style={{ width: '60px', height: '60px', marginRight: '5px' }}
        />
        <TwitterShareButton url={inviteUrl} quote={title}>
          <TwitterIcon size="60" style={{ borderRadius: '50%', marginRight: '5px' }} />
        </TwitterShareButton>
        <FacebookShareButton url={inviteUrl} quote={title}>
          <FacebookIcon size="60" style={{ borderRadius: '50%', marginRight: '5px' }} />
        </FacebookShareButton>
        <TelegramShareButton url={inviteUrl} title={title}>
          <TelegramIcon size="60" style={{ borderRadius: '50%', marginRight: '5px' }} />
        </TelegramShareButton>
        <SocialIcon
          onClick={handleClick('instagram')}
          url="https://instagram.com"
          style={{ width: '60px', height: '60px', marginRight: '5px' }}
        />
        <WhatsappShareButton url={inviteUrl} title={title}>
          <WhatsappIcon size="60" style={{ borderRadius: '50%', marginRight: '5px' }} />
        </WhatsappShareButton>
      </Flex>
    </Center>
  );
};

export default IntegrateSocialMedia;
