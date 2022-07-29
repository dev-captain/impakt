import { Box, HStack } from '@chakra-ui/react';
import { Socials } from 'data';
import { memo } from 'react';
import { I } from 'components';

// const { Discord, Twitter, TwitterLight, Tiktok, DiscordLight, Youtube, YoutubeLight } =
//   Images.Common;

const NavBarSocialIcons = () => {
  return (
    <HStack justify={{ base: 'center', md: 'flex-end' }}>
      <Box
        me="16px !important"
        _hover={{ color: 'rgba(255,255,255,1)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.discord}
        color="rgba(255,255,255,0.5)"
        transition="color .2s , transform 0.2s ease"
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
      >
        <I.YoutubeSocialIcon width="35px" height="35px" />
      </Box>
    </HStack>
  );
};

export default memo(NavBarSocialIcons);
