import { memo } from 'react';
import { VStack, HStack, useColorModeValue, Box } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import ScreenVideo from './ScreenVideo';

const ImpaktGamesHero = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);

  return (
    <HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack w="full" justify="space-between">
            <Box>Left</Box>
            <ScreenVideo />
            {/* <Box></Box> */}
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktGamesHero);
