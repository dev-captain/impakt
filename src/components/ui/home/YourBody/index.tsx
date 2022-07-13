/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';

import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';
import RichIcon2 from '../../../icons/RichIcon2';

const YourBody: React.FC = ({ children }) => {
  return (
    <HeroLayout
      spacing={0}
      pos="relative"
      bgColor="#09090B"
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack
          id="general"
          paddingX={{ base: '1em', lg: '0' }}
          maxW={{ base: '100%', lg: '1200px' }}
          w="full"
        >
          <HStack
            flexDir={{ base: 'column', lg: 'row' }}
            columnGap="48px"
            alignItems="flex-start"
            w="full"
          >
            <VStack
              w={{ base: '100%', lg: '80%' }}
              rowGap="32px"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Box id="our-ai-card-box" w="full">
                <InfoCard LeftLogo={<RichIcon2 />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      Our AI technology recognizes your gestures & movements in real time
                    </Text>
                  </VStack>
                </InfoCard>
              </Box>
              <Box id="computer-vision-box" w="full">
                <Text textStyle="semiBold5" letterSpacing="2px" color="#F04153">
                  COMPUTER VISION
                </Text>
              </Box>

              <Box id="your-body-headline-box" w="full">
                <Text textStyle="TitleBold64" letterSpacing="-2.5px" color="#fff">
                  Your body is
                </Text>
                <Text textStyle="TitleBold64" letterSpacing="-2.5px" color="#fff">
                  the controller.
                </Text>
              </Box>

              <Box id="your-body-headline-box" w="full">
                <Text textStyle="regular20" color="rgba(255, 255, 255, 0.75);">
                  All you need is a webcam or a phone camera.
                </Text>
              </Box>

              <Box display={{ base: 'none', lg: 'unset' }} id="get-the-bonus-box" w="full">
                <InfoCard
                  tooltipLabel="GODL is our in-game currency!
                  You’ll use it on our marketplace for whitelist spots, NFT discounts, Token exchange, and more!"
                  isShowTooltip
                  LeftLogo={<YoutubeIcon />}
                >
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
            {children}
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default YourBody;
