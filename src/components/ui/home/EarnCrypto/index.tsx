import React, { useRef } from 'react';
import { Box, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';
import StarsVideo from '../ImpaktGamesHero/StarsVideo';
import NftCard from './NftCard';
// import { StatusQuoBlurs } from './StatusQuoBlurs';

const EarnCrypto = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header3, Images.impaktGames.light);
  const navigate = useNavigate();

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
              <Box id="mirror">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  height="788px"
                  width="600px"
                >
                  <NftCard />
                  <Box zIndex={0} position="absolute" h="100%">
                    <StarsVideo />
                  </Box>
                  <div
                    className="shadow"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      boxShadow: 'inset 0px 0px 20px rgba(232, 219, 202, 0.5)',
                      top: '0',
                      left: '0',
                      borderRadius: '150px 150px 0px 0',
                    }}
                  />
                </Box>
              </Box>
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
                  MOVE TO EARN
                </Text>
              </Box>

              <Box id="earn-crypto-box">
                <Text letterSpacing="-2.5px" textStyle="TitleBold64" color="#fff">
                  Earn crypto.
                </Text>
              </Box>

              <Box
                id="earn-crypto-box"
                textStyle="regular201"
                color="rgba(255, 255, 255, 0.85);"
                fontWeight="400"
                lineHeight="32px"
              >
                <Text>Get the app,log in,start earning!</Text>
              </Box>
              <Box w="full" maxW="500px" id="info-card-box">
                <InfoCard
                  tooltipLabel="Download"
                  onToolTipClick={() => navigate('/download')}
                  isShowTooltip
                  LeftLogo={<YoutubeIcon />}
                >
                  <VStack alignItems="flex-start" color="white">
                    <Text textStyle="regular201" display="inline-block">
                      Get the
                      <Text
                        display="inline-block"
                        m="5px"
                        color="gold"
                        fontWeight="bold"
                        textStyle="regular201"
                      >
                        1000 GODL BONUS
                      </Text>
                    </Text>
                    <Text textStyle="semiBold14" color="whiteAlpha.400">
                      *download App & create account
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
