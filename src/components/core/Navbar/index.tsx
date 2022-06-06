/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  HStack,
  useDisclosure,
  useMediaQuery,
  useColorMode,
} from '@chakra-ui/react';
import { Socials } from 'data';
import Images from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import NavbarLinkItem from './NavbarLinkItem';
import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';
import DropDownProfileMenu from './DropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';

const { dark, light } = Images;
const { Discord, Twitter, TwitterLight, DiscordLight, Logo, LogoLight, Youtube, YoutubeLight } =
  Images.Common;

const Navbar = ({ showDarkOrLightModeButton = true }: { showDarkOrLightModeButton?: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');
  const { colorMode, setColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const youtube = isLight ? Youtube : YoutubeLight;
  const discord = isLight ? Discord : DiscordLight;
  const twitter = isLight ? Twitter : TwitterLight;
  const textColor = isLight ? 'glass.100' : 'glass.700';
  const activeColor = isLight ? 'glass.100' : 'glass.900';
  const passiveColor = isLight ? 'rgba(255,255,255)' : 'glass.700';
  const bgColor = isLight ? 'glass.700' : 'glass.100';
  const _hover = {
    _hover: {
      transition: '0.2s ease',
      transform: 'scale(1.25)',
    },
  };

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);

  return (
    <Box
      pos="absolute"
      zIndex="101"
      w="full"
      display={isLessThan1040 ? 'auto' : 'flex'}
      justifyContent="center"
      boxShadow="0px 4px 26px rgba(0, 0, 0, 0.25)"
    >
      {isOpen && <Gradient />}
      <Flex
        w="full"
        h="100px"
        maxW="1232px"
        flexDir="row"
        alignSelf="center"
        overflow="hidden"
        color={textColor}
        position="relative"
        alignItems="center"
        px="16px"
        bgColor={isOpen ? bgColor : 'transparent'}
      >
        <HStack w="full" justify="space-between">
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1040={isLessThan1040}
          />
          <Box onClick={() => navigate('/')} zIndex={100}>
            <Image minW="55px" h="32px" src={colorMode === 'light' ? Logo : LogoLight} />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="full"
            spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
          >
            <HStack w="full" align="space-between" justify="space-between">
              <HStack spacing={[0, 0, 3, 5, 8, 12]} pl="40px">
                <NavbarLinkItem
                  href="/"
                  title={t(Keys.navbar.impaktFitness)}
                  isActive={path.path === ''}
                  color={activeColor || textColor}
                  passiveColor={passiveColor}
                />
                <NavbarLinkItem
                  type="LINK"
                  onClose={onClose}
                  passiveColor={passiveColor}
                  title={t(Keys.navbar.knowledgeBase)}
                  href="https://knowledgebase.impakt.com"
                  isActive={path.path === 'knowledge-base'}
                />
                <NavbarLinkItem
                  href="/events"
                  onClose={onClose}
                  passiveColor={passiveColor}
                  title={t(Keys.navbar.events)}
                  isActive={path.path === 'events'}
                />
                <NavbarLinkItem
                  href="/contact"
                  onClose={onClose}
                  passiveColor={passiveColor}
                  title={t(Keys.navbar.contactUs)}
                  isActive={path.path === 'contact'}
                />
                {/* <Button variant="ghost" onClick={() => changeLanguage('en')}>
                  <Text>En</Text>
                </Button>
                <Button variant="ghost" onClick={() => changeLanguage('zh')}>
                  <Text>Zh</Text>
                </Button> */}
              </HStack>
              <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="32px" pl="64px">
                <Box as="a" target="_blank" href={Socials.twitter}>
                  <Image
                    maxW="35px"
                    minW="35px"
                    h="35px"
                    opacity={0.6}
                    objectFit="contain"
                    src={twitter}
                    {..._hover}
                  />
                </Box>
                <Box as="a" target="_blank" href={Socials.discord}>
                  <Image
                    maxW="32px"
                    minW="32px"
                    h="32px"
                    opacity={0.6}
                    objectFit="contain"
                    src={discord}
                    {..._hover}
                  />
                </Box>
                <Box as="a" target="_blank" href={Socials.youtube}>
                  <Image
                    maxW="32px"
                    minW="32px"
                    h="32px"
                    opacity={0.6}
                    objectFit="contain"
                    src={youtube}
                    {..._hover}
                  />
                </Box>
                {showDarkOrLightModeButton && (
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
                )}
                <Box display="flex">
                  <DropDownProfileMenu />
                </Box>

                <Box as="button">
                  <SignInLinkItem />
                </Box>
              </HStack>
            </HStack>
          </HStack>
          <HStack
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
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <CollapseMenu isOpen={isOpen} onClose={onClose} bg={bgColor} textColor={textColor} />
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
      w="967px"
      h="472px"
      left="-637px"
      top="-314px"
    />
  );
};
