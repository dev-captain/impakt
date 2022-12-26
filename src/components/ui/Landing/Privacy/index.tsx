/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { VStack, HStack, Box, Text, useMediaQuery, Image } from '@chakra-ui/react';
import Keys from '@/i18n/translations/en';
import { C, I } from '@/components';
import Images from '@/assets/images';

const Privacy: React.FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <C.HeroLayout
      customPadding="0"
      spacing={10}
      pos="relative"
      removeBottomPadding={isLessThan1280}
      bgColor="#fff"
      align="flex-start"
      justify="flex-start"
      removeTopPadding
    >
      <VStack w="full">
        <VStack paddingX={{ base: '1em', lg: '0' }} id="general" maxW="100%" w="full">
          <HStack
            flexDir={isLessThan1280 ? 'column' : 'row'}
            marginTop="0"
            columnGap="48px"
            rowGap="48px"
            display="block"
            alignItems="flex-start"
            w="full"
            p={{ lgx: '140px 170px', lg: '100px 50px', base: '50px 0' }}
            pb="0 !important"
          >
            <VStack w="full" rowGap="32px">
              <Box display="flex" width="100%">
                <Box textAlign="center" width="100%">
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '80px' }}
                    letterSpacing="-2px"
                    fontWeight="700"
                    lineHeight="100%"
                    textAlign={{ md: 'start', base: 'center' }}
                  >
                    {Keys.impaktGamesHero.privacyTitle}
                  </Text>
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '80px' }}
                    letterSpacing="-2px"
                    fontWeight="700"
                    lineHeight="100%"
                    textAlign={{ md: 'start', base: 'center' }}
                  >
                    {Keys.impaktGamesHero.privacyTitle1}
                  </Text>
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '80px' }}
                    letterSpacing="-2px"
                    fontWeight="700"
                    lineHeight="100%"
                    textAlign={{ md: 'start', base: 'center' }}
                  >
                    {Keys.impaktGamesHero.privacyTitle2}
                  </Text>
                  <Box
                    height="1px"
                    background="#000"
                    width="152px"
                    margin={{ md: '42px 0 28px 0', base: '42px auto 28px' }}
                  />
                  <Text
                    color="#1C1C28"
                    fontWeight="500"
                    maxWidth="418px"
                    textAlign={{ md: 'start', base: 'center' }}
                    margin={{ md: 'initial', base: 'auto' }}
                  >
                    {Keys.impaktGamesHero.privacyDescription}
                  </Text>
                </Box>
              </Box>
            </VStack>
            <Box
              display={{ md: 'flex', base: 'block' }}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              gap="25px"
              marginLeft="0 !important"
            >
              <Image
                src={Images.Privacy.PrivacyImg1}
                mt={{ md: '200px', base: '50px' }}
                width={{ md: '39%', base: '100%' }}
              />
              <Image
                src={Images.Privacy.PrivacyImg2}
                mt={{ md: '-130px', base: '50px' }}
                width={{ md: '27%', base: '100%' }}
              />
              <Image
                src={Images.Privacy.PrivacyImg3}
                mt={{ md: '-700px', base: '50px' }}
                width={{ md: '27%', base: '100%' }}
                mr="8px"
              />
            </Box>
            <Box
              marginTop="30px !important"
              marginBottom="60px !important"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <I.CameraIcon />
              <Text color="#000000" fontSize="21px" lineHeight="25px" fontWeight="600">
                Camera Off
              </Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default Privacy;
