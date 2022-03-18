import { Text, VStack, Button, HStack, useColorModeValue } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import useModalStore from 'hooks/store/useModalStore';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { memo } from 'react';
import TitleItem from './TitleItem';
import ScreenAndVideo from './ScreenVideo';

const ImpaktGamesHero = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const { setImpaktGames } = useModalStore((state) => state);
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);

  return (
    <HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack color={text} w="full" pt={{ base: '27px', md: '148px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack w="full" justify="space-between">
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing="37px">
              <ScreenAndVideo
                onPlay={() => {
                  setImpaktGames(true);
                }}
                view="mobile"
              />
              <VStack align="inherit">
                <TitleItem title={t(keys.impaktGamesHero.social)} />
                <TitleItem title={t(keys.impaktGamesHero.fitness)} />
                <TitleItem title={t(keys.impaktGamesHero.gamified)} />
              </VStack>
              <Button variant="accent" onClick={() => {}}>
                <Text textStyle="semiBold16" color="white">
                  Download Tutorial
                </Text>
              </Button>
            </VStack>
            <ScreenAndVideo
              onPlay={() => {
                setImpaktGames(true);
              }}
            />
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(ImpaktGamesHero);
