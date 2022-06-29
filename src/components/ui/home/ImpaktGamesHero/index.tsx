/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { VStack, HStack, useColorModeValue, Box, Text } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import HeroVideo from './HeroVideo';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';

const ImpaktGamesHero = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);

  return (
    <HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack w="full" justify="space-between">
            <VStack rowGap="32px" justifyContent="flex-start" alignItems="flex-start">
              <Box
                id="hero-headline-box"
                backgroundClip="text"
                css={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
                background="linear-gradient(302.56deg, rgba(140, 48, 155, 0.44) 3.86%, rgba(140, 48, 155, 0) 52.18%), linear-gradient(57.44deg, rgba(56, 4, 193, 0.55) -14.75%, rgba(56, 4, 193, 0) 32.81%), #FFFFFF;"
              >
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Social
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Fitness.
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Gamified.
                </Text>
              </Box>
              <Box mt="0 !important" id="hero-headline-description" backgroundClip="text">
                <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular20">
                  Work out! Get fit! Get paid!
                </Text>
              </Box>
              <Box w="500px" id="hero-info-card-box">
                <InfoCard isShowTooltip LeftLogo={<YoutubeIcon />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text textStyle="regular201">Start earning CRYPTO now!</Text>
                    <Text color="gold" fontWeight="bold" textStyle="regular201">
                      1000 GODL BONUS
                    </Text>
                    <Text textStyle="semiBold14" color="whiteAlpha.400">
                      *for new accounts
                    </Text>
                  </VStack>
                </InfoCard>
              </Box>
            </VStack>
            <Box>Right</Box>
            <HeroVideo />
            {/* <Box></Box> */}
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktGamesHero);
