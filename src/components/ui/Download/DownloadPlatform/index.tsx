import { memo } from 'react';
import { VStack, HStack, useColorModeValue, Box, Image } from '@chakra-ui/react';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I, C, Common } from 'components';
// import useModalStore from 'hooks/store/useModalStore';
import DownloadTitleItem from './DownloadTitleItem';
// import Gradient from './Gradient';

const DownloadPlatform = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const bgImage = useColorModeValue(
    Images.backgrounds.downloadAppBg,
    Images.backgrounds.downloadAppBg,
  );
  // const show = useModalStore((state) => state.setDownloadPage);
  // const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <C.HeroLayout
      showNavbar
      showFooterV2
      minH="80vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="center"
      justify="center"
    >
      <VStack color={text} w="full" pt={{ base: '20px', md: '0px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack w="full" justify="center">
            <VStack
              align={{ base: 'center' }}
              spacing="22px"
              w={{ base: '100%', lg: 'auto' }}
              paddingX={{ base: '0', md: '40px' }}
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <VStack align="inherit" marginBottom={{ base: '0', md: '15px' }}>
                <Box
                  bgClip="text"
                  color="white"
                  sx={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  background="linear-gradient(0deg, rgba(212, 35, 89, 0.35) 14.58%, rgba(212, 35, 89, 0) 45.1%), #FFFFFF"
                >
                  <DownloadTitleItem title={t(keys.downloadPlateform.download)} />
                </Box>
                <Image src={Images.Common.Vsport} w={{ base: '120px', md: '300px', lg: '400px' }} />
              </VStack>
              <HStack
                flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                background="rgba(28, 28, 40, 0.65)"
                display="flex"
                spacing={2}
                columnGap={3}
                padding="16px"
                borderRadius="24px"
                order={{ base: '3', md: '2' }}
              >
                <Box
                  width="60px"
                  height="60px"
                  d={{ base: 'none', md: 'flex' }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <I.DesktopIcon opacity="1" />
                </Box>

                <Common.DownloadButton
                  width={{ base: '100%', md: '315px' }}
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  isHorizontal
                  iconName="Windows"
                  title="Download for Windows"
                  link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.exe"
                  pe="auto"
                />

                <Box
                  width={{ base: '100%', md: '282px' }}
                  marginTop={{ base: '12px !important', md: '0px !important' }}
                  marginStart="0px !important"
                >
                  <Common.DownloadButton
                    width={{ base: '100%', md: '282px' }}
                    bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                    isHorizontal
                    iconName="Apple"
                    title="Download for Mac"
                    link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.pkg"
                    pe="auto"
                  />
                </Box>
              </HStack>
              <HStack
                flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                background="rgba(28, 28, 40, 0.65)"
                display="flex"
                spacing={2}
                columnGap={3}
                padding="16px"
                borderRadius="24px"
                order={{ base: '2', md: '3' }}
              >
                <Box
                  width="60px"
                  height="60px"
                  d={{ base: 'none', md: 'flex' }}
                  justifyContent="center "
                  alignItems="center"
                >
                  <I.MobileIcon opacity="1" />
                </Box>

                <Common.DownloadButton
                  width={{ base: '100%', md: '319px' }}
                  bg="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  isHorizontal
                  iconName="Android"
                  title="Download for Android"
                  link="https://play.google.com/store/apps/details?id=com.impakt.Minigames"
                  pe="auto"
                />
                <Box
                  width={{ base: '100%', md: '282px' }}
                  marginTop={{ base: '12px !important', md: '0px !important' }}
                  marginStart="0px !important"
                >
                  <Common.DownloadButton
                    width={{ base: '100%', md: '282px' }}
                    bg="rgba(255, 255, 255, 0.1)"
                    isHorizontal
                    iconName="Ios"
                    title="iOS coming soon"
                    link=""
                    pe="none"
                  />
                </Box>
              </HStack>
            </VStack>

            {/* <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
              <VStack pos="absolute" zIndex={2}>
                <I.Play />
              </VStack>
              <Image
                src={Images.downloadlaptop}
                maxH="636px"
                w="100%"
                pb={{
                  base: '32px',
                  lg: '0',
                }}
                zIndex={1}
              />
              <Gradient />
            </VStack> */}
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(DownloadPlatform);
