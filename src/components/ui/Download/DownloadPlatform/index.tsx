import { memo } from 'react';
import { VStack, HStack, useColorModeValue, useBreakpointValue, Image } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import DownloadButton from 'components/core/DownloadButton';
import DownloadTitleItem from './DownloadTitleItem';

const DownloadPlatform = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const Wrapper: any = useBreakpointValue({ base: VStack, md: HStack });
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
          <HStack
            w="full"
            justify="space-between"
            flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
          >
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing="20px">
              <VStack align="inherit">
                <DownloadTitleItem title={t(keys.downloadPlateform.download)} />
                <DownloadTitleItem title={t(keys.downloadPlateform.platform)} />
              </VStack>
              <Wrapper>
                <DownloadButton
                  isHorizontal
                  iconName="Windows"
                  title="Download from Windows"
                  link="https://discord.gg/e38WmMRK"
                />
                <DownloadButton
                  isHorizontal
                  iconName="Apple"
                  title="Download for Mac"
                  link="https://discord.gg/e38WmMRK"
                />
              </Wrapper>
            </VStack>
            <VStack marginBottom={{ base: '35px !important' }}>
              <Image zIndex={11} maxH="358px" d="flex" src={Images.downloadlaptop} />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(DownloadPlatform);
