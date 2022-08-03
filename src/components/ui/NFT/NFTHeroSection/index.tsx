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
import { useNavigate } from 'react-router-dom';
import { useParallax } from 'hooks';
// import useModalStore from 'hooks/store/useModalStore';
// import DownloadTitleItem from './DownloadTitleItem';
// import Gradient from './Gradient';

const NFTHeroSection = () => {
  const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.nft.nft_bg, Images.nft.nft_bg);
  const { oscar } = Images.nft;
  const { t } = useTranslation(`default`).i18n;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageBoxRef = React.useRef<HTMLDivElement>(null);
  useParallax(cardRef, [imageBoxRef], { range: 25 });
  const [isLessThan1040] = useMediaQuery('(max-width: 991px)');

  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="center"
      justify="center"
    >
      <VStack w="full" pt={{ base: '20px', md: '40px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            columnGap="auto"
            rowGap={{ base: '10px' }}
            alignItems="flex-start"
            w="full"
          >
            <VStack
              align={{ base: 'center', md: 'flex-start' }}
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}
              marginTop="50px"
              order={{ base: '2', md: '1' }}
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '32px' }}
                css={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
                background="linear-gradient(279.09deg, rgba(195, 45, 255, 0.35) 16.95%, rgba(195, 45, 255, 0) 45.26%), linear-gradient(80.91deg, rgba(192, 72, 74, 0.35) 1.01%, rgba(192, 72, 74, 0) 18%), #FFFFFF"
              >
                <Text
                  fontSize={{ base: '32px', md: '50px', lg: '64px' }}
                  lineHeight={{ base: '100%', md: '100%' }}
                  textStyle={{ base: 'black7', md: 'black8' }}
                  textAlign={{ base: 'center', md: 'left' }}
                  marginTop="0 !important"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
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
                >
                  A Dynamic NFT.
                </Text>
              </Box>
              <Box marginBottom={{ base: '24px !important', lg: '44px !important' }}>
                <Box
                  border="6px solid rgba(240, 65, 83, 0.3)"
                  borderRadius={{ base: '14px', md: '24px' }}
                >
                  <Common.ImpaktButton
                    as="a"
                    height="64px"
                    textStyle="regular201"
                    href="/download"
                    size={isLessThan1040 ? 'sm' : 'lg'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/download');
                    }}
                  >
                    How To Whitelist?
                  </Common.ImpaktButton>
                </Box>
              </Box>
              <Box
                display={{ base: 'flex', md: 'block' }}
                justifyContent={{ base: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', lg: 'flex-start' }}
                id="our-ai-card-box"
                w="full"
                marginTop="0px !important"
              >
                <Common.InfoCard LeftLogo={<I.RichIcon2 />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      {t(Keys.computerVision.aiDescription)}
                    </Text>
                  </VStack>
                </Common.InfoCard>
              </Box>
            </VStack>
            <VStack
              ref={cardRef}
              align={{ base: 'center' }}
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}
              order={{ base: '1', md: '2' }}
              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                ref={imageBoxRef}
                align="inherit"
                alignItems="flex-start"
                marginBottom={{ base: '0', md: '15px' }}
              >
                <Box>
                  <Image src={oscar} />
                </Box>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(NFTHeroSection);
