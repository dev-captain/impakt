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
      showNavbar
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack id="general" alignItems="flex-start" maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            w="full"
            rowGap="48px"
            columnGap="48px"
          >
            <Box id="left">
              <MirrorAndStarsVideo position="relative" height="788px" width="600px">
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
              rowGap="32px"
              alignItems={{ base: 'center', lg: 'flex-start' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              id="righ-stack"
            >
              <Box id="move-to-earn-box">
                <Text textStyle="semiBold3" letterSpacing="2px" color="#F04153" lineHeight="100%">
                  {t(Keys.burnAndEarn.burnAnd)}
                </Text>
              </Box>

              <Box id="earn-crypto-box">
                <Text letterSpacing="-2.5px" textStyle="TitleBold64" color="#fff">
                  {t(Keys.burnAndEarn.earn)}
                </Text>
              </Box>

              <Box
                id="earn-crypto-box"
                textStyle="regular201"
                color="rgba(255, 255, 255, 0.85);"
                fontWeight="400"
                lineHeight="32px"
              >
                <Text>Get the app, log in, start earning!</Text>
              </Box>
              <Box w="full" maxW="500px" id="info-card-box">
                <InfoCard
                  tooltipLabel={t(Keys.toolTip.downloadLabel)}
                  isShowTooltip
                  LeftLogo={<YoutubeIcon />}
                >
                  <VStack alignItems="flex-start" color="white">
                    <Text textStyle="regular201">Start earning CRYPTO now!</Text>
                    <Text color="gold" fontWeight="bold" textStyle="regular201">
                      {t(Keys.toolTip.godlBonus)}
                    </Text>
                    <Text textStyle="semiBold14" color="whiteAlpha.400">
                      {t(Keys.toolTip.description)}
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

export default EarnCrypto;
