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
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
      backgroundSize="100% 100%"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#121216"
      removeTopPadding
      customPadding="96px"
    >
      <VStack px={{ base: '1em', lg: '0' }} w="full">
        <VStack maxW="1200px" w="full">
          <HStack flexDir="column" columnGap="auto" rowGap="30px" alignItems="center" w="full">
            <VStack
              align="flex-start"
              justifyContent="flex-start"
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}
            >
              <Box bgClip="text" color="white" width={{ base: '100%', md: '788px' }}>
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
                  marginTop="25px"
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
            <RarityTable />
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(Rarity);
