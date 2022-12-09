import React from 'react';
import { Box, BoxProps, HStack } from '@chakra-ui/react';
import { Socials } from 'data';
import { I } from 'components';

const SocialIcons: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <>
      <Box
        me="16px !important"
        _hover={{ color: 'rgba(255,255,255,1)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.discord}
        transition="color .2s , transform 0.2s ease"
        color="rgba(255,255,255,0.5)"
        {...props}
      >
        <I.DiscordIcon width="35px" height="35px" />
      </Box>

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(255,255,255,1)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.twitter}
        color="rgba(255,255,255,0.5)"
        transition="color .2s , transform 0.2s ease"
        {...props}
      >
        <I.TwitterIcon width="35px" height="35px" />
      </Box>

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(255,255,255,1)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.tiktok}
        color="rgba(255,255,255,0.5)"
        transition="color .2s , transform 0.2s ease"
        {...props}
      >
        <I.TikTokIcon width="35px" height="35px" />
      </Box>

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(255,255,255,1)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.youtube}
        color="rgba(255,255,255,0.5)"
        transition="color .2s , transform 0.2s ease"
        {...props}
      >
        <I.YoutubeSocialIcon width="35px" height="35px" />
      </Box>
    </>
  );
};

export default SocialIcons;
