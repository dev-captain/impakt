/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { VStack, HStack, useColorModeValue, Box, Text, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { I, C, Common } from 'components';
import Keys from 'i18n/types';
import Images from 'assets/images';
import AOS from 'aos';

import '../../../../theme/styles.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const ImpaktNFT = () => {
  const bgImage = useColorModeValue(Images.impaktNFT.Header, Images.impaktNFT.light);
  const { t } = useTranslation(`default`).i18n;

  return (
    <C.HeroLayout
      // showNavbar
      minH="auto"
      backgroundSize="100% 100%"
      pos="relative"
      bgImage={bgImage}
      removeBottomPadding
      removeTopPadding
      align="flex-start"
      justify="flex-start"
    >
      <VStack mt={{ base: '160px', lg: '0' }} w="full">
        <VStack alignSelf="flex-end" maxW={{ base: '100%', lg: '1600px' }} w="full">
          <HStack
            flexDir={{ base: 'column', lg: 'row' }}
            columnGap={{ base: 'auto', lg: '155px' }}
            rowGap={{ base: '48px' }}
            alignItems="flex-start"
            w="full"
          >
            <VStack
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="200"
              data-aos-delay="50"
              w="full"
              h={{ base: '100%', lg: '100vh' }}
              minW={{ base: 'unset', lg: '626px' }}
              maxW="625px"
              rowGap="24px"
              justifyContent="flex-end"
              alignItems="flex-end"
              px="1em"
            >
              <Box display="flex" w="full" justifyContent="flex-start" mt="0 !important">
                <Text color="gold" textTransform="uppercase" textStyle="reguler2">
                  {t(Keys.impaktNFT.impaktDesign)}
                </Text>
              </Box>
              <Box mt="0 !important">
                <Text
                  color="white"
                  letterSpacing="-1.5px"
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                >
                  {t(Keys.impaktNFT.impaktlabel)}
                  <Text display="inline-block" letterSpacing="-1.5px" className="gradient-text">
                    {t(Keys.impaktNFT.impaktChris)}
                  </Text>
                </Text>
              </Box>
              <Box mt="0 !important" id="hero-headline-description" backgroundClip="text">
                <Text
                  color="rgba(255, 255, 255, 0.85);"
                  textStyle={{ base: 'semiBold5', md: 'regular18' }}
                >
                  {t(Keys.impaktNFT.description)}
                </Text>
              </Box>
              <Box mt="0 !important" w="full" id="hero-info-card-box">
                <Common.InfoCard wFull LeftLogo={<I.RichIcon />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text
                      textStyle={{ base: 'semiBold5', md: 'regular18' }}
                      color="rgba(255, 255, 255, 0.75);"
                    >
                      {t(Keys.impaktNFT.description1)}
                    </Text>
                  </VStack>
                </Common.InfoCard>
              </Box>
              <Box mt="0 !important" id="hero-headline-description" backgroundClip="text">
                <Text
                  color="rgba(255, 255, 255, 0.85);"
                  textStyle={{ base: 'semiBold5', md: 'regular18' }}
                >
                  {t(Keys.impaktNFT.careerdescription)}
                  <Text color="gold" as="a" target="_blank" href="#">
                    {t(Keys.impaktNFT.careerdescription1)}
                  </Text>
                </Text>
              </Box>
            </VStack>
            <VStack
              h={{ base: '100%', lg: '100vh' }}
              w="full"
              paddingTop={{ base: 0, lg: '82px' }}
              id="right"
            >
              <Box display="flex" justifyContent="flex-end" alignItems="flex-end" h="full" w="full">
                <Image
                  maxW={{ base: '625px', md: '625px', lg: '100vw' }}
                  minW={{ base: '359px', lg: '785px' }}
                  maxH={{ base: '100%', md: 'unset', lg: '800px' }}
                  w="full"
                  h="full"
                  src="assets/images/Chris-Armsden.png"
                  className="imgTopBlur"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="200"
                  data-aos-delay="50"
                />
              </Box>
            </VStack>
            {/* <SimpleGrid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
              <GridItem
                w="full"
                alignItems="center"
                justifyContent="center"
                display="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="200"
                data-aos-delay="50"
              >
                <VStack
                  w="full"
                  padding={{ base: '0px 16px', md: '0px 40px', lg: '0px' }}
                  rowGap="24px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Box mt="0 !important">
                    <Text color="gold" textTransform="uppercase" textStyle="reguler2">
                      {t(Keys.impaktNFT.impaktDesign)}
                    </Text>
                  </Box>
                  <Box mt="0 !important">
                    <Text
                      color="white"
                      letterSpacing="-1.5px"
                      textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                    >
                      {t(Keys.impaktNFT.impaktlabel)}
                      <Text display="inline-block" letterSpacing="-1.5px" className="gradient-text">
                        {t(Keys.impaktNFT.impaktChris)}
                      </Text>
                    </Text>
                  </Box>
                  <Box mt="0 !important" id="hero-headline-description" backgroundClip="text">
                    <Text
                      color="rgba(255, 255, 255, 0.85);"
                      textStyle={{ base: 'semiBold5', md: 'regular18' }}
                    >
                      {t(Keys.impaktNFT.description)}
                    </Text>
                  </Box>
                  <Box mt="0 !important" w="full" id="hero-info-card-box">
                    <Common.InfoCard LeftLogo={<I.RichIcon />}>
                      <VStack alignItems="flex-start" color="white">
                        <Text
                          textStyle={{ base: 'semiBold5', md: 'regular18' }}
                          color="rgba(255, 255, 255, 0.75);"
                        >
                          {t(Keys.impaktNFT.description1)}
                        </Text>
                      </VStack>
                    </Common.InfoCard>
                  </Box>
                  <Box mt="0 !important" id="hero-headline-description" backgroundClip="text">
                    <Text
                      color="rgba(255, 255, 255, 0.85);"
                      textStyle={{ base: 'semiBold5', md: 'regular18' }}
                    >
                      {t(Keys.impaktNFT.careerdescription)}
                      <Text
                        color="gold"
                        as="a"
                        target="_blank"
                        href="https://www.imdb.com/name/nm1942545"
                      >
                        {t(Keys.impaktNFT.careerdescription1)}
                      </Text>
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
              <GridItem w="full" alignItems="center" justifyContent="center" display="flex">
                <VStack
                  padding={{ base: '0px 16px', md: '0px 40px', lg: '0px' }}
                  w="full"
                  rowGap="24px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Box
                    position={{ base: 'static', lg: 'absolute' }}
                    top="85px"
                    right="0"
                    width={{ base: '100%', lg: '60%', xl: '60%' }}
                    display="flex"
                    justifyContent={{ base: 'center', md: 'center', lg: 'end' }}
                  >
                    <Image
                      height={{ base: 'auto', lg: '90%' }}
                      width={{ base: '100%', md: '50%', lg: '67%', xl: '67%' }}
                      src="assets/images/Chris-Armsden.png"
                      className="imgTopBlur"
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-offset="200"
                      data-aos-delay="50"
                    />
                  </Box>
                </VStack>
              </GridItem>
            </SimpleGrid> */}
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(ImpaktNFT);
