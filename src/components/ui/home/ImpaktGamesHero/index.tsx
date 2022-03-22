import { VStack, HStack, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import useModalStore from 'hooks/store/useModalStore';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { memo } from 'react';
import DownloadButton from 'components/core/DownloadButton';
import TitleItem from './TitleItem';
import ScreenAndVideo from './ScreenVideo';

const ImpaktGamesHero = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const { setImpaktGames } = useModalStore((state) => state);
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const Wrapper: any = useBreakpointValue({ base: VStack, md: HStack });

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
              <Wrapper>
                <DownloadButton
                  isHorizontal
                  iconName="Windows"
                  title="Download Windows"
                  link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Windows/Impakt_Windows_Installer_v1.0.0.zip"
                />
                <DownloadButton
                  isHorizontal
                  iconName="Apple"
                  title="Download for Mac"
                  link="https://impakt-build-artifacts.s3.us-east-2.amazonaws.com/Windows/Impakt_Windows_Installer_v1.0.0.zip"
                />
              </Wrapper>
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
