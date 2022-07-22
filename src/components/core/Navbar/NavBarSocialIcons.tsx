import { Box, HStack, Image, useColorMode } from '@chakra-ui/react';
import { Socials } from 'data';
import React, { memo } from 'react';
import Images from 'assets/images';

const { Discord, Twitter, TwitterLight, Tiktok, DiscordLight, Youtube, YoutubeLight } =
  Images.Common;

const NavBarSocialIcons = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const youtube = isLight ? Youtube : YoutubeLight;
  const discord = isLight ? Discord : DiscordLight;
  const twitter = isLight ? Twitter : TwitterLight;
  const hover = {
    _hover: {
      transition: '0.2s ease',
      transform: 'scale(1.25)',
    },
  };

  return (
    <HStack justify={{ base: 'center', md: 'flex-end' }}>
      <Box mr="24px !important" as="a" target="_blank" href={Socials.twitter}>
        <Image
          maxW="35px"
          minW="35px"
          h="35px"
          opacity={0.6}
          objectFit="contain"
          src={twitter}
          {...hover}
        />
      </Box>
      <Box me="24px !important" as="a" target="_blank" href={Socials.discord}>
        <Image
          maxW="32px"
          minW="32px"
          h="32px"
          opacity={0.6}
          objectFit="contain"
          src={discord}
          {...hover}
        />
      </Box>
      <Box me="24px !important" as="a" target="_blank" href={Socials.tiktok}>
        <Image
          maxW="21px"
          minW="24px"
          h="24px"
          opacity={0.6}
          objectFit="contain"
          src={Tiktok}
          {...hover}
        />
      </Box>
      <Box me="24px !important" as="a" target="_blank" href={Socials.youtube}>
        <Image
          maxW="32px"
          minW="32px"
          h="32px"
          opacity={0.6}
          objectFit="contain"
          src={youtube}
          {...hover}
        />
      </Box>
    </HStack>
  );
};

export default memo(NavBarSocialIcons);
