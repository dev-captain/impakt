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
import { layoutPadding } from 'theme';
import { Socials } from 'data';
import Images from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import NavbarLinkItem from './NavbarLinkItem';
import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';

const { dark, light } = Images;
const { Discord, Twitter, TwitterLight, DiscordLight, Logo, LogoLight, Youtube, YoutubeLight } =
  Images.Common;

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');
  const { colorMode, setColorMode } = useColorMode();
  const youtube = colorMode === 'light' ? Youtube : YoutubeLight;
  const discord = colorMode === 'light' ? Discord : DiscordLight;
  const twitter = colorMode === 'light' ? Twitter : TwitterLight;
  const textColor = colorMode === 'light' ? 'glass.100' : 'glass.700';
  const activeColor = colorMode === 'light' ? 'glass.100' : 'glass.900';
  const passiveColor = colorMode === 'light' ? 'rgba(255,255,255)' : 'glass.700';
  const location = useLocation();
  const path = parsePathname(location.pathname);

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);

  return (
    <Box pos="absolute" zIndex="100" w="full" boxShadow="0px 4px 26px rgba(0, 0, 0, 0.25)">
      {isOpen && <Gradient />}
      <Flex
        h="100px"
        minW="full"
        flexDir="row"
        overflow="hidden"
        position="relative"
        alignItems="center"
        color={textColor}
        bgColor={isOpen ? 'rgba(31, 32, 36, 1)' : 'blackAlpha.200'}
      >
        <HStack w="full" justify="space-between" px={layoutPadding}>
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
                  title="Impakt Games"
                  href="/"
                  isActive={path.path === ''}
                  color={activeColor || textColor}
                  passiveColor={passiveColor || 'rgba(255,255,255, 0.3)'}
                />
                <NavbarLinkItem
                  title="White Paper"
                  target="_blank"
                  href="https://joker-5.gitbook.io/impakt/"
                  color={activeColor || textColor}
                  passiveColor={passiveColor || 'rgba(255,255,255, 0.3)'}
                />
                <NavbarLinkItem
                  title="Knowledge Base"
                  href="/knowledge-base"
                  isActive={path.path === 'knowledge-base'}
                  color={activeColor || textColor}
                  passiveColor={passiveColor || 'rgba(255,255,255, 0.3)'}
                />
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
                  />
                </Box>
                <Box
                  as="button"
                  onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                >
                  <Image
                    w="26px"
                    h="26px"
                    objectFit="contain"
                    src={colorMode === 'dark' ? dark : light}
                  />
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
                />
              </Box>
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <CollapseMenu isOpen={isOpen} onClose={onClose} />
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
