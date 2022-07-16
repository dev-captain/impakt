import { Box, HStack, Text, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import Images from 'assets/images';
import { I, C, Common } from 'components';
import MirrorAndStarsVideo from '../MirrorAndStarsVideo';
import NftCard from './NftCard';

const EarnCrypto = () => {
  const bgImage = useColorModeValue(Images.backgrounds.gradientBgRotated, Images.backgrounds.light);
  const { t } = useTranslation(`default`).i18n;
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <C.HeroLayout
      customPadding={0}
      // showNavbar
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack
          id="general"
          alignItems="flex-start"
          maxW={{ base: '100%', lg: '1200px' }}
          px="16px"
          w="full"
        >
          <HStack
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            w="full"
            rowGap={{ base: '12px', md: '48px', lg: '48px' }}
            columnGap={{ base: '12px', md: '10px', lg: '48px' }}
          >
            <Box id="left">
              <MirrorAndStarsVideo
                position="relative"
                height={{ base: '450px', md: '699px', lg: '788px' }}
                width={{ base: '343px', md: '518px', lg: '600px' }}
              >
                <Box
                  id="box-nft"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  height="100%"
                  width="100%"
                >
                  <NftCard />
                </Box>
              </MirrorAndStarsVideo>
            </Box>
            <VStack
              w="full"
              alignItems={{ base: 'center', lg: 'flex-start' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              id="righ-stack"
              ml="0 !important"
              padding={{ base: '0px', md: '0px 0px', lg: '0px' }}
            >
              <VStack
                w="full"
                rowGap={{ base: '0px', md: '32px' }}
                justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
              >
                <Box id="move-to-earn-box">
                  <Text textStyle="semiBold3" letterSpacing="2px" color="#F04153" lineHeight="100%">
                    {t(Keys.burnAndEarn.burnAnd)}
                  </Text>
                </Box>

                <Box id="earn-crypto-box">
                  <Text
                    letterSpacing="-2.5px"
                    textStyle={{ base: 'TitleBold48', md: 'TitleBold64' }}
                    color="#fff"
                  >
                    {t(Keys.burnAndEarn.earn)}
                  </Text>
                </Box>

                <Box
                  id="earn-crypto-box"
                  color="rgba(255, 255, 255, 0.85);"
                  fontWeight="400"
                  lineHeight="32px"
                >
                  <Text textStyle={{ base: ' semiBold5', md: 'regular201' }}>
                    Get the app, log in, start earning!
                  </Text>
                </Box>
                <Box
                  w="full"
                  display="flex"
                  justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                  alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start' }}
                  maxW={{ base: 'unset', lg: '500px' }}
                  id="info-card-box"
                  mt="17px !important"
                  mb="48px !important"
                >
                  <Common.InfoCard
                    tooltipLabel={t(Keys.toolTip.downloadLabel)}
                    isShowTooltip
                    LeftLogo={<I.YoutubeIcon isMobile={isLessThan1280} />}
                  >
                    <VStack alignItems="flex-start" color="white">
                      <Text textStyle={{ base: 'semiBold15', lg: 'regular201' }}>
                        {t(Keys.toolTip.earningCrypto)}
                      </Text>
                      <Text
                        color="gold"
                        fontWeight="700 !important"
                        textStyle={{ base: 'semiBold15', lg: 'regular201' }}
                      >
                        {t(Keys.toolTip.godlBonus)}
                      </Text>
                      <Text
                        textStyle={{ base: 'semiBold12', lg: 'semiBold14' }}
                        color="whiteAlpha.400"
                      >
                        {t(Keys.toolTip.description)}
                      </Text>
                    </VStack>
                  </Common.InfoCard>
                </Box>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default EarnCrypto;
