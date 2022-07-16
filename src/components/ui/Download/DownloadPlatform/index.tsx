import { memo } from 'react';
import {
  VStack,
  HStack,
  useColorModeValue,
  Image,
  useMediaQuery,
  Box,
  SimpleGrid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import DownloadButton from 'components/common/DownloadButton';
import { I, C } from 'components';
import useModalStore from 'hooks/store/useModalStore';
import DownloadTitleItem from './DownloadTitleItem';
import Gradient from './Gradient';

const DownloadPlatform = () => {
  const { t } = useTranslation(`default`).i18n;
  const text = useColorModeValue('glass.100', 'glass.700');
  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
  const show = useModalStore((state) => state.setDownloadPage);
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <C.HeroLayout
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
              spacing="22px"
              w={{ base: '100%', lg: 'auto' }}
              paddingX={{ base: isLessThan768 ? '50px' : '0', md: '40px' }}
            >
              <VStack align="inherit" marginBottom={{ base: '0', md: '15px' }}>
                <DownloadTitleItem title={t(keys.downloadPlateform.download)} />
                <DownloadTitleItem title={t(keys.downloadPlateform.platform)} />
              </VStack>
              <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={5} columnGap={5} w="100%">
                <GridItem w="100%">
                  <DownloadButton
                    isHorizontal
                    iconName="Windows"
                    title="Download for Windows"
                    link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.exe"
                  />
                </GridItem>
                <GridItem w="full">
                  <DownloadButton
                    isHorizontal
                    iconName="Apple"
                    title="Download for Mac"
                    link="https://dyqq95qvqgziv.cloudfront.net/Impakt_Setup.pkg"
                  />
                </GridItem>
              </SimpleGrid>
              <Box w="full" textAlign="center">
                <Text textStyle="regular201">iOS/Android coming soon</Text>
              </Box>
            </VStack>

            <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
              <VStack pos="absolute" zIndex={2}>
                <I.Play />
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
    </C.HeroLayout>
  );
};

export default memo(DownloadPlatform);
