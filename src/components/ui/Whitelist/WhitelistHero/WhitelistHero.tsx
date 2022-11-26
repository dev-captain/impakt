import * as React from 'react';
import { C } from 'components';
import { VStack, Image, Text, Box, HStack } from '@chakra-ui/react';
import Images from '../../../../assets/images';
import CounterItem from '../CounterItem';

const WhitelistHero: React.FC = () => {
  return (
    <C.HeroLayout
      showNavbar
      minH="100vh"
      spacing={10}
      pos="relative"
      align="center"
      justify="center"
      bgColor="#0A0A0B"
      removeBottomPadding
      removeTopPadding
    >
      <Box
        zIndex="1"
        w="full"
        minH="100vh"
        left="0"
        top="0"
        pos="absolute"
        backgroundSize="100% 100%"
        backgroundPosition="bottom"
        backgroungRepeat="no-repeat"
        background={`linear-gradient(180deg, rgba(9, 9, 11, 0) 60.73%, #09090B 100%), url(${Images.backgrounds.gradientBg}), #09090B;`}
        transform="matrix(-1, 0, 0, 1, 0, 0)"
      />
      <VStack zIndex="2" w="full" px="16px">
        <VStack maxW="1200px" w="full">
          <HStack flexDir={{ base: 'column', lg: 'row' }} w="full" columnGap="48px">
            <Box w="full" id="whitelist-hero-left">
              <VStack
                w="full"
                align={{ base: 'center', md: 'flex-start' }}
                paddingX={{ base: '0' }}
                rowGap="2em"
              >
                <VStack
                  mt={{ base: '100px', lg: '0' }}
                  alignSelf={{ base: 'center', lg: 'flex-start' }}
                  align={{ base: 'center', lg: 'flex-start' }}
                  justify="flex-start"
                  rowGap=""
                  bgClip="text"
                  w={{ base: '81%', lg: '100%' }}
                  color="white"
                  sx={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  background="linear-gradient(279.09deg, rgba(195, 45, 255, 0.35) 16.95%, rgba(195, 45, 255, 0) 45.26%), linear-gradient(80.91deg, rgba(192, 72, 74, 0.35) 1.01%, rgba(192, 72, 74, 0) 18%), #FFFFFF;"
                  fontSize={{ base: '32px', md: '50px', lg: '64px' }}
                  lineHeight={{ base: '100%', md: '100%' }}
                  textStyle={{ base: 'black7', md: 'black8' }}
                  textAlign={{ base: 'center', md: 'left' }}
                  letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
                >
                  <Text>Burn Calories.</Text>
                  <Text>Get Fit.</Text>
                  <Text>Get Whitelisted.</Text>
                </VStack>
                <VStack
                  w={{ base: 'full', lg: 'max-content' }}
                  backdropBlur={40}
                  bgColor="rgba(254, 196, 23, 0.15);"
                  p="12px 16px"
                  borderRadius="16px"
                  alignItems={{ base: 'center', lg: 'flex-start' }}
                  textAlign={{ base: 'center', lg: 'left' }}
                  align={{ base: 'center', lg: 'flex-start' }}
                >
                  <Text
                    textStyle="bold5"
                    letterSpacing="-0.5px"
                    lineHeight="100% !important"
                    color="#FEC417"
                  >
                    Get a free Impakt Pass NFT!
                  </Text>
                </VStack>
                <VStack
                  alignSelf={{ base: 'center', lg: 'flex-start' }}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  mt="0 !important"
                  rowGap="1em"
                >
                  <Box
                    w="full"
                    textAlign={{ base: 'center', lg: 'left' }}
                    id="whitelist-hero-headline-box"
                  >
                    <Text textStyle="semiBold20" color="whiteAlpha.800">
                      ETA July 8th 2022
                    </Text>
                  </Box>
                  <HStack
                    p="0.5em"
                    borderRadius="16px"
                    background="rgba(18, 18, 22, 0.4)"
                    id="whitelist-hero-counter-box"
                    mt="0 !important"
                  >
                    <CounterItem titleFontSize="40px" value="32" w="64px" h="64px" label="DAYS" />
                    <CounterItem titleFontSize="40px" value="10" w="64px" h="64px" label="HRS" />
                    <CounterItem titleFontSize="40px" value="24" w="64px" h="64px" label="MINS" />
                  </HStack>
                </VStack>
                {/* <Common.ImpaktButton
                as="a"
                height={{ base: '50px', md: '64px' }}
                textStyle="regular201"
                borderRadius="12px"
                minW={{ base: '168px', lg: '224px' }}
                maxW={{ base: '168px', lg: '224px' }}
                href="/download"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/download');
                }}
                boxShadow="0px 0px 0px 6px rgba(240, 65, 83, 0.3)"
              >
                How to Whitelist?
              </Common.ImpaktButton> */}
              </VStack>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mixBlendMode="overlay"
              marginLeft="0 !important"
              w="full"
              id="whitelist-hero-right"
            >
              <Image mixBlendMode="overlay" src="assets/heroill.svg" />
              {/* <Text>Hero section left</Text> */}
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default WhitelistHero;
