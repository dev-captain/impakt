import { memo, useState } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Text,
  SimpleGrid,
  GridItem,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { C, Common, I } from 'components';
import GenesisCard from './GenesisCard';

const NFTGenesis = () => {
  const [isLessThanMd] = useMediaQuery('(max-width:992px)');
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.nft.nft_genesis_bg, Images.nft.nft_genesis_bg);
  const bgImageMobile = Images.nft.nft_genesis_mobile_bg;
  const [isLessThan1040] = useMediaQuery('(max-width: 1080px)');
  let Genesis = useState<object[]>();
  Genesis = t('NFTGenesis.Genesis', { returnObjects: true });

  return (
    <C.HeroLayout
      //   showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={isLessThan1040 ? bgImageMobile : bgImage}
      align="center"
      justify="center"
      backgroundSize="contain"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#121216"
      removeBottomPadding={isLessThan1040}
    >
      <VStack px={{ base: '1em', lg: '0' }} w="full">
        <VStack maxW="1200px" w="full">
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            columnGap="auto"
            rowGap={{ base: '10px' }}
            alignItems="flex-start"
            w="full"
          >
            <VStack
              align={{ base: 'center', md: 'flex-end' }}
              justifyContent="space-between"
              w="100%"
              flexDir={{ base: 'column', md: 'row' }}
              paddingX={{ base: '0' }}

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                color="white"
                width={{ base: '100%', md: '43%' }}
                marginBottom={{ base: '24px', md: '0px' }}
              >
                <Box width={{ base: '100%', md: '468px' }}>
                  <Text
                    fontSize={{ base: '32px', md: '35px', lg: '48px' }}
                    lineHeight={{ base: '100%', md: '100%' }}
                    textStyle={{ base: 'black7', md: 'black8' }}
                    marginTop="0 !important"
                    letterSpacing="-1.5px"
                    paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                  >
                    {t(keys.NFTGenesis.Title)}
                  </Text>
                  <Text
                    textStyle={{ base: 'semiBold5', md: 'regular18' }}
                    marginTop="32px"
                    color="rgba(255, 255, 255, 0.85)"
                  >
                    {t(keys.NFTGenesis.description)}
                  </Text>
                </Box>
              </Box>
              <Box
                display={{ base: 'flex', md: 'block' }}
                justifyContent={{ base: 'center', lg: 'flex-start' }}
                alignItems={{ base: 'flex-start', lg: 'flex-start' }}
                width={{ base: '100%', md: '48%' }}
                id="our-ai-card-box"
                w="full"
                marginTop="0px !important"
              >
                <Common.InfoCard
                  wFull
                  LeftLogo={
                    <I.RichIconK
                      width={isLessThanMd ? '40' : ''}
                      height={isLessThanMd ? '36' : ''}
                    />
                  }
                >
                  <VStack alignItems="flex-start" color="white">
                    <Text
                      textStyle={{ base: 'semiBold5', md: 'regular18' }}
                      color="rgba(255, 255, 255, 0.75);"
                    >
                      {t(keys.NFTGenesis.infoDescription)}
                    </Text>
                  </VStack>
                </Common.InfoCard>
              </Box>
            </VStack>
          </HStack>
          <HStack>
            <SimpleGrid
              w="full"
              columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
              alignContent="center"
              alignItems="center"
              marginTop="40px"
              columnGap={{ base: '8px', sm: '24px', md: '24px ' }}
              rowGap={{ base: '24px', sm: '24px' }}
            >
              {Genesis.map((genesis: any) => (
                <GridItem key={genesis.image} w="full">
                  <HStack w={{ base: '100%', md: 'full' }} align="center" justify="center">
                    <GenesisCard {...genesis} />
                  </HStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(NFTGenesis);
