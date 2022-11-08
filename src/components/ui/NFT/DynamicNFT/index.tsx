import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import { VStack, HStack, useColorModeValue, Box, Text, useMediaQuery } from '@chakra-ui/react';
import Images from 'assets/images';
import { C, Common, I } from 'components';
import { useParallax } from 'hooks';
import PlansCarousel from './plansCarousel';

const DynamicNFT = () => {
  // const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.nft.dynamicNftBg, Images.nft.dynamicNftBg);
  const [isLessThanMd] = useMediaQuery('(max-width:992px)');
  const { t } = useTranslation(`default`).i18n;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageBoxRef = React.useRef<HTMLDivElement>(null);
  useParallax(cardRef, [imageBoxRef], { range: 25 });
  // const [isLessThan1040] = useMediaQuery('(max-width: 991px)');

  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      pos="relative"
      align="flex-end"
      justify="flex-end"
      bgImage={bgImage}
      backgroundSize="100% 100%"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#121216"
      customTopPadding="20px"
      customPadding="100px"
    >
      <VStack w="full" px={{ base: '1em', lg: '0' }}>
        <VStack maxW="1200px" w="full">
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
          >
            <VStack
              align="flex-start"
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '16px' }}
                width={{ base: '100%', md: '445px' }}
              >
                <Text
                  fontSize={{ base: '32px', md: '40px', lg: '48px' }}
                  lineHeight={{ base: '56px', md: '56px' }}
                  textStyle={{ base: 'black7', md: 'black8' }}
                  textAlign="left"
                  marginTop="0 !important"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                >
                  {t(Keys.DynamicNFT.title)}
                </Text>
                <Text
                  textStyle={{ base: 'semiBold5', md: 'regular18' }}
                  textAlign="left"
                  marginTop="32px"
                  color="rgba(255, 255, 255, 0.85)"
                  dangerouslySetInnerHTML={{ __html: t(Keys.DynamicNFT.description) }}
                />
              </Box>
              <Box
                display={{ base: 'flex', md: 'block' }}
                justifyContent={{ base: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', lg: 'flex-start' }}
                id="our-ai-card-box"
                w="100%"
                marginTop="10px !important"
              >
                <Common.InfoCard
                  LeftLogo={
                    <I.RichIconBody
                      width={isLessThanMd ? '40px' : '100px'}
                      height={isLessThanMd ? '36px' : '91px'}
                    />
                  }
                >
                  <VStack alignItems="flex-start" color="white">
                    <Text color="#FEC417" textStyle={{ base: 'semiBold5', md: 'bold20' }}>
                      {t(Keys.DynamicNFT.cardInfo)}
                    </Text>
                  </VStack>
                </Common.InfoCard>
              </Box>
            </VStack>
            <VStack
              ref={cardRef}
              align={{ base: 'center' }}
              spacing="22px"
              w={{ base: '100%', md: '80%', lg: '100%' }}
              paddingX={{ base: '24px', md: '51px' }}
              paddingY={{ base: '51px', md: '51px' }}
              background=" rgba(28, 28, 40, 0.65)"
              backdropFilter="blur(40px)"
              borderRadius="16px"
              marginStart="0px !important"
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                align="inherit"
                alignItems="flex-start"
                marginBottom={{ base: '0', md: '15px' }}
                ref={imageBoxRef}
              >
                <PlansCarousel />
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(DynamicNFT);
