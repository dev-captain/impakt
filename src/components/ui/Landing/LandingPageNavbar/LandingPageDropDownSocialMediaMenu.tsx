import React from 'react';
import { Menu, MenuButton, MenuItem, useDisclosure, Box, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
// import { useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { I } from 'components';
import { Socials } from 'data';

type SocialIconProps = {
  titleColor?: string;
  bgColor?: string;
  iconColor?: string;
};
const DropDownSocialMediaMenu: React.FC<SocialIconProps> = ({ titleColor, bgColor, iconColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} placement="bottom" autoSelect={false}>
      <MenuButton
        color={titleColor ?? 'fg'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _hover={{ color: 'white', bg: 'orangeGradient' }}
        textAlign="center"
        w="170px"
        h="35px"
        borderRadius="10px"
      >
        Social Media{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList
        borderRadius="8px"
        border="none"
        bg={bgColor}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <MenuItem
          isFocusable={false}
          borderRadius="8px"
          flexDir="column"
          justifyContent="space-between"
          w="100%"
          h="200px"
          alignItems="center"
          _hover={{ bg: bgColor }}
        >
          <Box
            me="16px !important"
            _hover={{ transform: 'scale(1.25)' }}
            as="a"
            target="_blank"
            href={Socials.insta}
            color={iconColor}
            transition="color .2s , transform 0.2s ease"
          >
            <I.IGIcon width="30px" height="30px" />
          </Box>

          <Box
            me="16px !important"
            _hover={{ transform: 'scale(1.25)' }}
            as="a"
            target="_blank"
            href={Socials.twitter}
            color={iconColor}
            transition="color .2s , transform 0.2s ease"
          >
            <I.TwitterIcon width="30px" height="30px" />
          </Box>

          <Box
            me="16px !important"
            _hover={{ transform: 'scale(1.25)' }}
            as="a"
            target="_blank"
            href={Socials.tiktok}
            color={iconColor}
            transition="color .2s , transform 0.2s ease"
          >
            <I.TikTokIcon width="30px" height="30px" />
          </Box>

          <Box
            me="16px !important"
            _hover={{ transform: 'scale(1.25)' }}
            as="a"
            target="_blank"
            href={Socials.youtube}
            color={iconColor}
            transition="color .2s , transform 0.2s ease"
          >
            <I.YoutubeSocialIcon width="30px" height="30px" />
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default DropDownSocialMediaMenu;
