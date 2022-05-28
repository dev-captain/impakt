import { memo } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import DownloadButton from 'components/core/DownloadButton';
import Play from 'components/icons/Play';
import useModalStore from 'hooks/store/useModalStore';
import DownloadTitleItem from './DownloadTitleItem';
import Gradient from './Gradient';

const DownloadPlatform = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const Wrapper: any = useBreakpointValue({ base: VStack, md: HStack });
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const show = useModalStore((state) => state.setDownloadPage);
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');

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
      <VStack color={text} w="full" pt={{ base: '20px', md: '135px' }}>
        <VStack maxW="1232px" w="full" px="16px">
          <HStack
            w="full"
            justify="space-between"
            flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
          >
            <VStack
              align={{ base: 'center', md: 'flex-start' }}
              spacing="20px"
              w={{ base: isLessThan768 ? 'full' : 'auto', md: 'auto' }}
              paddingX={{ base: isLessThan768 ? '50px' : '0', md: '40px' }}
            >
              <VStack align="inherit" marginBottom={{ base: '0', md: '15px' }}>
                <DownloadTitleItem title={t(keys.downloadPlateform.download)} />
                <DownloadTitleItem title={t(keys.downloadPlateform.platform)} />
              </VStack>
              <Wrapper width="full">
                <DownloadButton
                  isHorizontal
                  iconName="Windows"
                  title="Download for Windows"
                  link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.exe"
                />
                <DownloadButton
                  isHorizontal
                  iconName="Apple"
                  title="Download for Mac"
                  link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.pkg"
                />
              </Wrapper>
            </VStack>

            <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
              <VStack pos="absolute" zIndex={2}>
                <Play />
              </VStack>
              <Image
                src={Images.downloadlaptop}
                maxH="636px"
                w="100%"
                pb={{
                  base: '32px',
                  lg: '0',
                }}
                zIndex={1}
              />
              <Gradient />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default memo(DownloadPlatform);
