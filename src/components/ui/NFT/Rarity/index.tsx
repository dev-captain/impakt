import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import Keys from 'i18n/types';

import { VStack, HStack, useColorModeValue, Box, Text, useMediaQuery } from '@chakra-ui/react';
import Images from 'assets/images';
import { C } from 'components';
import RarityTable from './rarityTable';

const Rarity = () => {
  // const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.nft.rarityBg, Images.nft.rarityBg);
  //   const { t } = useTranslation(`default`).i18n;
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
      removeTopPadding
      backgroundSize="cover"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#121216"
      removeBottomPadding={isLessThan1040}
    >
      <VStack w="full" pt={{ base: '0px', md: '80px' }}>
        <VStack maxW="1200px" w="full" px="16px">
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
          >
            <VStack
              align="flex-start"
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}
              marginTop="50px"

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '16px' }}
                width={{ base: '100%', md: '788px' }}
              >
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  textAlign="left"
                  marginTop="0 !important"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                >
                  How will rarity work?
                </Text>
                <Text
                  textStyle={{ base: 'semiBold5', md: 'regular18' }}
                  textAlign="left"
                  marginTop="32px"
                  color="rgba(255, 255, 255, 0.85)"
                  //   dangerouslySetInnerHTML={{ __html: t(Keys.DynamicNFT.description) }}
                >
                  Rarity will have cosmetic effects: determines design material of NFT, Impakt
                  platform utility & worlds that can be accessed. They are based on passion and
                  effort. Upgrading to a higher rarity will mean burning your current NFT for a
                  higher rarity one! For in-game use, all Genesis NFT holders will have an 8x
                  earning rate vs. non-NFT holders
                </Text>
              </Box>
            </VStack>
            <VStack
              align={{ base: 'center' }}
              spacing="22px"
              w={{ base: '100%' }}
              backdropFilter="blur(40px)"
              borderRadius="16px"
              background="#1b1b26"
              marginStart="0px !important"
              display={isLessThan1040 ? 'none' : 'flex'}
            >
              <RarityTable />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(Rarity);
