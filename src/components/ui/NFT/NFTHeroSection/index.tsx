import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { C, Common, I } from 'components';
import { useParallax } from 'hooks';
// import useModalStore from 'hooks/store/useModalStore';
// import DownloadTitleItem from './DownloadTitleItem';
// import Gradient from './Gradient';

const NFTHeroSection = () => {
  const [isLessThanMd] = useMediaQuery('(max-width:992px)');
  const bgImage = useColorModeValue(Images.nft.nft_bg, Images.nft.nft_bg);
  const { oscar } = Images.nft;
  const { t } = useTranslation(`default`).i18n;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageBoxRef = React.useRef<HTMLImageElement>(null);
  useParallax(cardRef, [imageBoxRef], { range: 25 });

  return (
    <C.HeroLayout
      showNavbar
      minH="100vh"
      pos="relative"
      bgImage={bgImage}
      justify="flex-start"
      align="flex-start"
    >
      <VStack px={{ base: '1em', lg: '0' }} mt={{ base: '38px', lg: '76px' }} w="full">
        <HStack
          rowGap="24px"
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          position="relative"
          alignItems="flex-start"
          maxW="1200px"
          w="full"
        >
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            w={{ base: '100%', md: '60%' }}
            paddingX={{ base: '0' }}
            rowGap="24px"
            // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
          >
            <Box
              bgClip="text"
              w={{ base: '81%', lg: '100%' }}
              color="white"
              marginBottom={{ base: '0px', md: '39px' }}
              sx={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              background="linear-gradient(302.56deg, rgba(140, 48, 155, 0.44) 3.86%, rgba(140, 48, 155, 0) 52.18%), linear-gradient(57.44deg, rgba(56, 4, 193, 0.55) -14.75%, rgba(56, 4, 193, 0) 32.81%), #FFFFFF"
              letterSpacing="-2.5px"
            >
              <Text
                fontSize={{ base: '32px', md: '50px', lg: '64px' }}
                lineHeight="100%"
                textAlign={{ base: 'center', md: 'left' }}
                marginTop="0 !important"
                paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                fontWeight="700 !important"
                letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
              >
                NFT Designed in Partnership with an Oscar Winner.
              </Text>
              <Text
                fontSize={{ base: '32px', md: '50px', lg: '64px' }}
                lineHeight={{ base: '100%', md: '100%' }}
                textStyle={{ base: 'black7', md: 'black8' }}
                textAlign={{ base: 'center', md: 'left' }}
                marginTop="20px"
                paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
              >
                A Dynamic NFT.
              </Text>
            </Box>
            <Box mb={{ base: '0px', lg: '1em' }} />
            {/* <Common.ImpaktButton
                as="a"
                height={{ base: '50px', md: '64px' }}
                textStyle="regular201"
                borderRadius="12px"
                minW={{ base: '168px', lg: '224px' }}
                maxW={{ base: '168px', lg: '224px' }}
                href={routes.download}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routes.download);
                }}
                boxShadow="0px 0px 0px 6px rgba(240, 65, 83, 0.3)"
              >
                How to Whitelist?
              </Common.ImpaktButton> */}
            {/* </Box> */}
            <Common.InfoCard
              alignItems="center"
              LeftLogo={
                <Box position="relative" top="10px">
                  <I.RichIcon2
                    width={isLessThanMd ? '40px' : '80'}
                    height={isLessThanMd ? '36px' : ''}
                  />
                </Box>
              }
            >
              <VStack justifyContent="flex-start" alignItems="flex-start" color="white">
                <Text color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                  {t(Keys.computerVision.aiDescription)}
                </Text>
              </VStack>
            </Common.InfoCard>
          </VStack>
          <Box
            right="-150px"
            position={{ base: 'unset', md: 'absolute' }}
            top="-2vw"
            ref={cardRef}
            align="inherit"
            alignItems="flex-start"
            alignSelf={{ base: 'center', lg: 'unset' }}
            marginBottom={{ base: '0', md: '15px' }}
            paddingX="2.45em"
          >
            <Image ref={imageBoxRef} src={oscar} />
          </Box>
        </HStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(NFTHeroSection);
