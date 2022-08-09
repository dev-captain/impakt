import * as React from 'react';
import { C } from 'components';
import { VStack, Image, Text, Box, HStack } from '@chakra-ui/react';
import Images from '../../../../assets/images';

const WhitelistHero: React.FC = () => {
  return (
    <C.HeroLayout
      showNavbar
      minH="100vh"
      spacing={10}
      pos="relative"
      align="center"
      justify="center"
      bgColor="#121216"
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
          <HStack w="full" columnGap="48px">
            <Box w="full" id="whitelist-hero-left">
              <VStack
                w="full"
                align={{ base: 'center', md: 'flex-start' }}
                paddingX={{ base: '0' }}
                rowGap="2em"
              >
                <VStack
                  align="flex-start"
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
                <VStack w="full" alignItems="flex-start">
                  <Box
                    w="max-content"
                    display="flex"
                    backdropBlur={40}
                    bgColor="rgba(254, 196, 23, 0.15);"
                    p="12px 16px"
                    borderRadius="16px"
                    alignItems="center"
                  >
                    <Text
                      textStyle="bold5"
                      letterSpacing="-0.5px"
                      lineHeight="100% !important"
                      color="#FEC417"
                    >
                      Get a free Impakt Pass NFT!
                    </Text>
                  </Box>
                </VStack>
                <Box h="116px" />
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
