/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';

const YourBody: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);

  return (
    <HeroLayout
      spacing={10}
      pos="relative"
      bgColor="#121117"
      align="flex-start"
      justify="flex-start"
    >
      <VStack id="your-body-section" all="inherit" w="full">
        <VStack id="general" maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack columnGap="48px" alignItems="flex-start" w="full">
            <VStack w="full" rowGap="32px" justifyContent="flex-start" alignItems="flex-start">
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
                  Your
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Body
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  is Controller.
                </Text>
              </Box>
              <Box
                ml="7px !important"
                mt="0 !important"
                id="hero-headline-description"
                backgroundClip="text"
              >
                <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular20">
                  Work out! Get fit! Get paid!
                </Text>
              </Box>
              <Box ml="7px !important" maxW="500px" w="full" id="hero-info-card-box">
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
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default YourBody;
