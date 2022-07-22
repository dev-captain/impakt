/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { VStack, HStack, useColorModeValue, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { C } from 'components';
import Images from 'assets/images';
import StartEarningCryptoNowInfoCard from '../StartEarningCryptoNowInfoCard';

const SocialFitnessGamified: React.FC = ({ children }) => {
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  const { t } = useTranslation(`default`).i18n;

  return (
    <C.HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      removeBottomPadding={isLessThan1280}
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack
          paddingX={{ base: '1em', lg: '0' }}
          id="general"
          maxW={{ base: '100%', lg: '1200px' }}
          w="full"
        >
          <HStack
            flexDir={isLessThan1280 ? 'column' : 'row'}
            marginTop={{ base: '0px', lg: '96px' }}
            columnGap="48px"
            rowGap="48px"
            alignItems="flex-start"
            w="full"
          >
            <VStack
              w="full"
              rowGap="32px"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <Box
                id="hero-headline-box"
                backgroundClip="text"
                textAlign={{ base: 'center', lg: 'unset' }}
                css={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
                background="linear-gradient(302.56deg, rgba(140, 48, 155, 0.44) 3.86%, rgba(140, 48, 155, 0) 52.18%), linear-gradient(57.44deg, rgba(56, 4, 193, 0.55) -14.75%, rgba(56, 4, 193, 0) 32.81%), #FFFFFF;"
              >
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.social)}
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.fitness)}
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  {t(Keys.impaktGamesHero.gamified)}
                </Text>
              </Box>
              <Box
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
              </Box>
            </VStack>
            {children}
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default SocialFitnessGamified;
