// import { useState } from 'react';
import {
  // GridItem,
  // HStack,
  // SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Box,
  Image,
} from '@chakra-ui/react';
import { C, Common } from 'components';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';

const Evolving = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;

  return (
    <C.HeroLayout
      bgColor="#F3F3F4"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      removeTopPadding
      minH="70vh"
    >
      <VStack
        marginTop={{ md: '100px', base: '50px' }}
        spacing="0px"
        px="16px"
        maxW={{ base: '100%', lg: '1232px' }}
        w="full"
        color={textColor}
      >
        <VStack>
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxW={{ base: '100%', lg: '1232px' }}
            pb="16px"
          >
            <VStack
              w="full"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Box textAlign="center">
                <Text
                  color="#1C1C28"
                  fontSize={{ base: '30px', md: '50px' }}
                  textStyle="semiBold17"
                  fontWeight="700"
                  lineHeight="inherit"
                >
                  {t(keys.impaktGamesHero.evolving)}
                </Text>
                <Box height="1px" background="#000" width="152px" margin="24px auto" />
                <Text
                  color="#1C1C28"
                  fontSize="18px"
                  lineHeight="inherit"
                  fontWeight="500"
                  textStyle="TitleBold48"
                  maxWidth="670px"
                  margin="auto"
                >
                  {t(keys.impaktGamesHero.evolvingMsg)}
                </Text>
                <Common.ImpaktButton
                  color="#ffffff"
                  bg="#000000"
                  height="50px"
                  w={{ md: '300px', base: '170px' }}
                  marginTop="24px"
                  gap="8px"
                  padding="10px 14px"
                  _hover={{ bg: '#000', color: '#fff' }}
                >
                  What is Koin?
                </Common.ImpaktButton>
                <Image
                  src={Images.evolving.evolving}
                  objectFit="cover"
                  bottom="65px"
                  zIndex="0"
                  w="70%"
                  margin=" 20px auto 0"
                />
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default Evolving;
