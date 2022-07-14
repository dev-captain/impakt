import { Box, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';
import MirrorAndStarsVideo from '../MirrorAndStarsVideo';
import NftCard from './NftCard';

const EarnCrypto = () => {
  const bgImage = useColorModeValue(Images.backgrounds.gradientBgRotated, Images.backgrounds.light);
  const { t } = useTranslation(`default`).i18n;

  return (
    <HeroLayout
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
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            w="full"
            rowGap={{ base: '24px', md: '48px' }}
            columnGap={{ base: '24px', md: '10px', lg: '48px' }}
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
            <Box />
            <VStack
              w="full"
              alignItems={{ base: 'center', lg: 'flex-start' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              id="righ-stack"
              ml="0 !important"
              padding={{ base: '0px', md: '0px 0px', lg: '0px' }}
            >
              <VStack
                rowGap={{ base: '0px', md: '32px' }}
                alignItems={{ base: 'flex-start', lg: 'flex-start' }}
                justifyContent={{ base: 'flex-start', lg: 'flex-start' }}
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
                <Box w="full" maxW="500px" id="info-card-box" mt="17px !important">
                  <InfoCard
                    tooltipLabel={t(Keys.toolTip.downloadLabel)}
                    isShowTooltip
                    LeftLogo={<YoutubeIcon />}
                  >
                    <VStack alignItems="flex-start" color="white" ml="0px !important">
                      <Text textStyle={{ base: 'semiBold15', md: 'regular201' }}>
                        {t(Keys.toolTip.earningCrypto)}
                      </Text>
                      <Text
                        color="gold"
                        fontWeight="bold"
                        textStyle={{ base: 'bold15', md: 'regular201' }}
                      >
                        {t(Keys.toolTip.godlBonus)}
                      </Text>
                      <Text textStyle="semiBold14" color="whiteAlpha.400">
                        {t(Keys.toolTip.description)}
                      </Text>
                    </VStack>
                  </InfoCard>
                </Box>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default EarnCrypto;
