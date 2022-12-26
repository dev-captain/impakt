import { Box, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Keys from '@/i18n/translations/en';

import Images from '@/assets/images';
import { C } from '@/components';

import MirrorAndStarsVideo from '../MirrorAndStarsVideo';
import NftCard from './NftCard';
import StartEarningCryptoNowInfoCard from '../StartEarningCryptoNowInfoCard';

const EarnCrypto = () => {
  const bgImage = useColorModeValue(Images.backgrounds.gradientBgRotated, Images.backgrounds.light);

  return (
    <C.HeroLayout
      backgroundSize="100% 100%"
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
                    {Keys.burnAndEarn.burnAnd}
                  </Text>
                </Box>

                <Box id="earn-crypto-box">
                  <Text
                    letterSpacing="-2.5px"
                    textStyle={{ base: 'TitleBold48', md: 'TitleBold64' }}
                    color="#fff"
                  >
                    {Keys.burnAndEarn.earn}
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
                  <StartEarningCryptoNowInfoCard />
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
