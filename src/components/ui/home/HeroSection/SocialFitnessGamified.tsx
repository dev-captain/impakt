/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { VStack, HStack, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { C } from 'components';
// import Images from 'assets/images';
// import StartEarningCryptoNowInfoCard from '../StartEarningCryptoNowInfoCard';
// import Navbar from 'components/core/Navbar';
import NewNavbar from 'components/core/NewNavbar';
import HeroVideo from '../HeroVideo';

const SocialFitnessGamified: React.FC = () => {
  // const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  const { t } = useTranslation(`default`).i18n;

  return (
    <C.HeroLayout
      // showNavbar
      customPadding="0"
      spacing={10}
      pos="relative"
      removeBottomPadding={isLessThan1280}
      // bgImage={bgImage}
      bgColor="#F4F7F9"
      align="flex-start"
      justify="flex-start"
      removeTopPadding
    >
      <VStack w="full">
        <VStack paddingX={{ base: '1em', lg: '0' }} id="general" maxW="100%" w="full">
          <HStack
            flexDir={isLessThan1280 ? 'column' : 'row'}
            marginTop="0"
            columnGap="48px"
            rowGap="48px"
            display="block"
            alignItems="flex-start"
            w="full"
          >
            <VStack
              w="full"
              rowGap="32px"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <NewNavbar />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                marginTop={{ md: '100px !important', base: '50px !important' }}
              >
                <Box textAlign="center">
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '80px' }}
                    letterSpacing="-2px"
                    fontWeight="700"
                    lineHeight="100%"
                  >
                    My body.
                    <br />
                    My controller.
                  </Text>
                  <Box height="1px" background="#000" width="152px" margin="24px auto" />
                  <Text color="#1C1C28" fontWeight="500">
                    {t(Keys.impaktGamesHero.body)}
                  </Text>
                  <Text color="#1C1C28" fontWeight="500" maxWidth="618px">
                    {t(Keys.impaktGamesHero.body1)}
                  </Text>
                </Box>
              </Box>
              <Box
                id="hero-headline-box"
                backgroundClip="text"
                textAlign={{ base: 'center', lg: 'unset' }}
                margin="auto !important"
                padding={{ base: '0 10px 50px', md: '68px 10px' }}
                sx={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                background="linear-gradient(302.56deg, rgba(140, 48, 155, 0.44) 3.86%, rgba(140, 48, 155, 0) 52.18%), linear-gradient(57.44deg, rgba(56, 4, 193, 0.55) -14.75%, rgba(56, 4, 193, 0) 32.81%), #FFFFFF;"
              >
                <HeroVideo />
                {/* <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.social)}
                </Text> */}
                {/* <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.fitness)}
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.gamified)}
                </Text> */}
              </Box>
              {/* <Box
                ml="7px !important"
                mt="0 !important"
                id="hero-headline-description"
                backgroundClip="text"
                >
                <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular20">
                {t(Keys.impaktGamesHero.workout)}
                </Text>
                </Box>
                <Box ml="7px !important" maxW="500px" w="full" id="hero-info-card-box">
                <StartEarningCryptoNowInfoCard />
              </Box> */}
            </VStack>
            {/* {children} */}
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default SocialFitnessGamified;
