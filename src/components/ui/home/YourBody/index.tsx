import React from 'react';
import { VStack, HStack, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { I, C, Common } from 'components';

import StartEarningCryptoNowInfoCard from '../StartEarningCryptoNowInfoCard';

const YourBody: React.FC = ({ children }) => {
  const [isSmall] = useMediaQuery('(max-width: 1280px)');
  const { t } = useTranslation(`default`).i18n;

  return (
    <C.HeroLayout
      spacing={0}
      removeTopPadding={isSmall}
      customPadding={0}
      pos="relative"
      bgColor="#09090B"
      align="flex-start"
      minH={isSmall ? '40vh' : '100vh'}
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
            rowGap="48px"
            alignItems="flex-start"
            w="full"
          >
            <VStack
              w={{ base: '100%', lg: '80%' }}
              rowGap={{ base: '16px', lg: '32px' }}
              justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
              alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
            >
              <Box
                display={{ base: 'block', md: 'flex', lg: 'block' }}
                justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                id="our-ai-card-box"
                w="full"
              >
                <Common.InfoCard LeftLogo={<I.RichIcon2 />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      {t(Keys.computerVision.aiDescription)}
                    </Text>
                  </VStack>
                </Common.InfoCard>
              </Box>
              <Box
                justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                display="flex"
                id="computer-vision-box"
                w="full"
              >
                <Text textStyle="semiBold5" letterSpacing="2px" color="#F04153">
                  {t(Keys.computerVision.computerVision)}
                </Text>
              </Box>

              <Box
                display={{ base: 'block', md: 'flex', lg: 'block' }}
                justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                id="your-body-headline-box"
                w="full"
              >
                <Text textStyle="TitleBold64" letterSpacing="-2.5px" color="#fff">
                  {t(Keys.computerVision.description)}
                </Text>
                <Text
                  textStyle="TitleBold64"
                  ml={{ base: '0px', md: '5px', lg: '0px' }}
                  letterSpacing="-2.5px"
                  color="#fff"
                >
                  {t(Keys.computerVision.description1)}
                </Text>
              </Box>

              <Box
                display={{ base: 'block', md: 'flex', lg: 'block' }}
                justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                id="your-body-headline-box"
                w="full"
              >
                <Text
                  textStyle={{ base: 'semiBold5', lg: 'regular20' }}
                  color="rgba(255, 255, 255, 0.75);"
                >
                  {t(Keys.computerVision.cameraCard)}
                </Text>
              </Box>

              <Box display={{ base: 'none', lg: 'unset' }} id="get-the-bonus-box" w="full">
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

export default YourBody;
