import { Box, HStack } from '@chakra-ui/react';
import { Socials } from 'data';
import { memo } from 'react';
import { I } from 'components';

// const { Discord, Twitter, TwitterLight, Tiktok, DiscordLight, Youtube, YoutubeLight } =
//   Images.Common;

const NavBarSocialIcons = () => {
  return (
    <HStack justify={{ base: 'center', md: 'flex-end' }}>
      {/* <Box
        me="16px !important"
        _hover={{ color: 'rgba(28, 28, 40, 0.65)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.discord}
        color=" rgba(28, 28, 40, 0.65)"
        transition="color .2s , transform 0.2s ease"
      >
        <I.DiscordIcon width="20px" height="20px" />
      </Box> */}

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(28, 28, 40, 0.65)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.twitter}
        color=" rgba(28, 28, 40, 0.65)"
        transition="color .2s , transform 0.2s ease"
      >
        <I.TwitterIcon width="20px" height="20px" />
      </Box>

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(28, 28, 40, 0.65)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.tiktok}
        color=" rgba(28, 28, 40, 0.65)"
        transition="color .2s , transform 0.2s ease"
      >
        <I.TikTokIcon width="20px" height="20px" />
      </Box>

      <Box
        me="16px !important"
        _hover={{ color: 'rgba(28, 28, 40, 0.65)', transform: 'scale(1.25)' }}
        as="a"
        target="_blank"
        href={Socials.insta}
        color=" rgba(28, 28, 40, 0.65)"
        transition="color .2s , transform 0.2s ease"
      >
        <I.IGIcon width="20px" height="20px" />
      </Box>
    </HStack>
  );
};

export default memo(NavBarSocialIcons);
