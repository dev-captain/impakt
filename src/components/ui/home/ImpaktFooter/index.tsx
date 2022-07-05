/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  GridItem,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  useColorMode,
  Image,
  Link,
} from '@chakra-ui/react';
import { Socials } from 'data';
import HeroLayout from 'components/layouts/HeroLayout';
import { useNavigate } from 'react-router-dom';
// import { parsePathname } from 'utils';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import Email from '../../../icons/Email';

const { dark, light } = Images;
const { Discord, Twitter, TwitterLight, DiscordLight, Logo, LogoLight, Youtube, YoutubeLight } =
  Images.Common;

const ImpaktFooter = ({
  showDarkOrLightModeButton = false,
}: {
  showDarkOrLightModeButton?: boolean;
}) => {
  const navigate = useNavigate();
  const { colorMode, setColorMode } = useColorMode();
  //   const path = parsePathname(location.pathname);
  const { t } = useTranslation(`default`).i18n;
  const isLight = colorMode === 'light';
  const youtube = isLight ? Youtube : YoutubeLight;
  const discord = isLight ? Discord : DiscordLight;
  const twitter = isLight ? Twitter : TwitterLight;
  //   const textColor = isLight ? 'glass.100' : 'glass.700';
  //   const activeColor = isLight ? 'glass.100' : 'glass.900';
  //   const passiveColor = isLight ? 'rgba(255,255,255)' : 'glass.700';
  //   const bgColor = isLight ? 'glass.700' : 'glass.100';
  const hover = {
    _hover: {
      transition: '0.2s ease',
      transform: 'scale(1.25)',
    },
  };

  //   useEffect(() => {
  //     if (path.path === 'dashboard') {
  //       setColorMode('light');
  //     }
  //   }, [path.path]);
  return (
    <HeroLayout
      showNavbar
      pos="relative"
      bgColor="#09090B"
      align="center"
      minH="auto !important"
      justify="flex-start"
    >
      <VStack minW={{ base: '100%', lg: '1200px', xl: '1200px' }}>
        <VStack w="full">
          <HStack
            justifyContent="center"
            alignItems="flex-start"
            w="full"
            paddingBottom="80px"
            borderBottom="1px solid rgba(255, 255, 255, 0.1)"
          >
            <SimpleGrid>
              <GridItem
                w={{ base: '100%', sm: '100%', md: '720px', lg: '720px' }}
                margin="auto"
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                <VStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  display="block"
                >
                  <Box mt="0 !important" mb="8px">
                    <Text color="#FFF" letterSpacing="-0.5px" textStyle="normal5">
                      Get Impakt updates!
                    </Text>
                  </Box>
                  <Box mt="0 !important" mb="32px !important">
                    <Text color="rgba(255, 255, 255, 0.4)" textStyle="regular201">
                      Unsubscribe anytime
                    </Text>
                  </Box>
                  <HStack spacing={4}>
                    <InputGroup border="none" background="#121216" borderRadius="12px">
                      <InputLeftElement
                        pointerEvents="none"
                        height="60px"
                        width="60px"
                        borderEnd="1px solid rgba(255, 255, 255, 0.1)"
                        marginRight="16px"
                      >
                        <Email />
                      </InputLeftElement>
                      <Input
                        border="none"
                        type="email"
                        height="60px"
                        pl="80px"
                        placeholder="your@mail.com"
                        color="rgba(255, 255, 255, 0.4)"
                        textStyle="regular201"
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.4)' }}
                      />
                    </InputGroup>
                    <Button
                      background="rgba(240, 65, 83, 0.12)"
                      _hover={{ background: 'rgba(240, 65, 83, 0.2)' }}
                      color="#F04153"
                      fontSize="20px"
                      lineHeight="32px"
                      fontWeight="500"
                      paddingX="32px"
                      height="60px"
                      minWidth="auto"
                    >
                      Stay updated
                    </Button>
                  </HStack>
                </VStack>
              </GridItem>
            </SimpleGrid>
          </HStack>
          <HStack justifyContent="flex-start" alignItems="flex-start" w="full" paddingTop="80px">
            <SimpleGrid w="full">
              <GridItem
                w="full"
                margin="auto"
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                <HStack
                  w="full"
                  padding={{ base: '0px 10px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  display="flex"
                  justify="space-between"
                >
                  <HStack w="full">
                    <Box onClick={() => navigate('/')} zIndex={100} mr="32px">
                      <Image minW="55px" h="32px" src={colorMode === 'light' ? Logo : LogoLight} />
                    </Box>
                    <Link href="/download">
                      <Button colorScheme="red">{t(Keys.navbar.download)}</Button>
                    </Link>
                  </HStack>

                  <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="8px" pl="64px">
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
                    {!showDarkOrLightModeButton && (
                      <Box
                        as="button"
                        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                      >
                        <Image
                          w="26px"
                          h="26px"
                          objectFit="contain"
                          src={colorMode === 'dark' ? dark : light}
                          {...hover}
                        />
                      </Box>
                    )}
                  </HStack>
                  {/* <Box mt="0 !important" mb="32px !important">
                    <Text color="rgba(255, 255, 255, 0.4)" textStyle="regular201">
                      Unsubscribe anytime
                    </Text>
                  </Box> */}
                  {/* <HStack spacing={4}>
                    <InputGroup border="none" background="#121216" borderRadius="12px">
                      <InputLeftElement
                        pointerEvents="none"
                        height="60px"
                        width="60px"
                        borderEnd="1px solid rgba(255, 255, 255, 0.1)"
                        marginRight="16px"
                      >
                        <Email />
                      </InputLeftElement>
                      <Input
                        border="none"
                        type="email"
                        height="60px"
                        pl="80px"
                        placeholder="your@mail.com"
                        color="rgba(255, 255, 255, 0.4)"
                        textStyle="regular201"
                        _placeholder={{ color: 'rgba(255, 255, 255, 0.4)' }}
                      />
                    </InputGroup>
                    <Button
                      background="rgba(240, 65, 83, 0.12)"
                      _hover={{ background: 'rgba(240, 65, 83, 0.2)' }}
                      color="#F04153"
                      fontSize="20px"
                      lineHeight="32px"
                      fontWeight="500"
                      paddingX="32px"
                      height="60px"
                      minWidth="auto"
                    >
                      Stay updated
                    </Button>
                  </HStack> */}
                </HStack>
              </GridItem>
            </SimpleGrid>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktFooter);
