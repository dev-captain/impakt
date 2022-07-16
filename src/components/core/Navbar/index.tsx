/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { FC, useEffect } from 'react';
import {
  Box,
  Flex,
  // Image,
  HStack,
  useDisclosure,
  useMediaQuery,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import { I } from 'components';
import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';
import DropDownProfileMenu from './DropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';
import useAppSelector from '../../../hooks/useAppSelector';
import NavBarLink from './NavBarLink';
import NavBarSocialIcons from './NavBarSocialIcons';

// const { dark, light } = Images;
const { Discord, Twitter, TwitterLight, DiscordLight, Youtube, YoutubeLight, Tiktok } =
  Images.Common;

const Navbar: FC<{ showDarkOrLightModeButton?: boolean }> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { colorMode, setColorMode } = useColorMode();
  const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);

  useEffect(() => {
    if (!isLessThan1280) {
      onClose();
    }
  }, [isLessThan1280, onClose]);

  useEffect(() => {
    if (path.path === 'dashboard') {
      setColorMode('light');
    }
  }, [path.path]);

  const isLight = colorMode === 'light';
  const youtube = isLight ? Youtube : YoutubeLight;
  const discord = isLight ? Discord : DiscordLight;
  const twitter = isLight ? Twitter : TwitterLight;
  const textColor = isLight ? 'glass.100' : 'glass.700';
  const bgColor = isScrolling ? 'rgba(28, 28, 40, 0.65)' : 'transparent';
  const _hover = {
    _hover: {
      transition: '0.2s ease',
      transform: 'scale(1.25)',
    },
  };

  return (
    <Box
      pos="absolute"
      zIndex="99999"
      w="full"
      paddingX="16px"
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      sx={{ position: 'fixed', top: '0' }}
    >
      {isOpen && <Gradient />}
      <Flex
        w="full"
        h="100px"
        maxW="1232px"
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        px="16px"
        borderRadius="16px"
        height="70px"
        marginTop="10px"
        transition="background-color 0.5s linear"
        bgColor={bgColor}
        backdropFilter={isScrolling ? 'blur(40px)' : 'blur(0px)'}
      >
        <HStack w="full" justify="space-between">
          <Box onClick={() => navigate('/')} zIndex={100} pr="40px">
            {/* <Image minW="55px" h="32px" src={colorMode === 'light' ? Logo : LogoLight} /> */}
            <I.ImpaktIcon cursor="pointer" width="111px" height="32px" />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="full"
            spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1280 ? 'none' : 'flex', 'flex']}
          >
            <HStack w="full" align="space-between" justify="space-between">
              <NavBarLink IsHeader />
              <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="8px" pl="64px">
                <NavBarSocialIcons />
                {/* {!showDarkOrLightModeButton && (
                  <Box
                    as="button"
                    onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                  >
                    <Image
                      w="26px"
                      h="26px"
                      objectFit="contain"
                      src={colorMode === 'dark' ? dark : light}
                      {..._hover}
                    />
                  </Box>
                )} */}
                <Box position="relative" display="flex">
                  <DropDownProfileMenu />
                </Box>
                <Box>
                  <SignInLinkItem />
                </Box>
                <Button
                  as="a"
                  href="/download"
                  _hover={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/download');
                  }}
                  colorScheme="red"
                >
                  {t(Keys.navbar.download)}
                </Button>
              </HStack>
            </HStack>
          </HStack>
          {/* <HStack
            align="center"
            spacing="44px"
            justify="flex-end"
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            <HStack
              pl={{ base: 0, md: '64px' }}
              spacing={{ base: '6px', md: '32px' }}
              justify={{ base: 'center', md: 'flex-end' }}
              display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
            >
              <Box as="a" target="_blank" href={Socials.twitter}>
                <Image
                  maxW="35"
                  w="35px"
                  h="35px"
                  opacity={0.6}
                  objectFit="contain"
                  src={twitter}
                  {..._hover}
                />
              </Box>
              <Box as="a" target="_blank" href={Socials.discord}>
                <Image
                  maxW="32"
                  w="32px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={discord}
                  {..._hover}
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
                  {..._hover}
                />
              </Box>
              <Box as="a" target="_blank" href={Socials.youtube}>
                <Image
                  maxW="32"
                  w="32px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={youtube}
                  {..._hover}
                />
              </Box>
              {path.path !== 'dashboard' && (
                <Box
                  as="button"
                  onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                >
                  <Image
                    w="26px"
                    h="26px"
                    minW="26px"
                    objectFit="contain"
                    src={colorMode === 'dark' ? dark : light}
                    {..._hover}
                  />
                </Box>
              )}
            </HStack>
          </HStack> */}
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1280={isLessThan1280}
          />
        </HStack>
      </Flex>
      <CollapseMenu
        isOpen={isOpen}
        onClose={onClose}
        bg={bgColor}
        textColor={textColor}
        isLessThan1040={isLessThan1280}
        twitter={twitter}
        discord={discord}
        hover={_hover}
        youtube={youtube}
        tiktok={Tiktok}
        isScrolling={isScrolling}
      />
    </Box>
  );
};

export default Navbar;

const Gradient = () => {
  return (
    <Box
      zIndex={10}
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      opacity="0.4"
      pos="absolute"
      w="930px"
      h="472px"
      left="-637px"
      top="-314px"
    />
  );
};
