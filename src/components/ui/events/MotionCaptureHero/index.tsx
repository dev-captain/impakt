import {
  Image,
  Text,
  HStack,
  VStack,
  GridItem,
  SimpleGrid,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/core/Layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';
import { useTranslation } from 'react-i18next';
import { layoutPadding } from 'theme';
import colors from 'theme/colors';
import keys from 'i18n/types';
import MotionCard from './MotionCard';

const commonProps: any = {
  width: 'full',
  textAlign: { base: 'center', md: 'left' },
  alignItems: { base: 'center', md: 'flex-start' },
};

const MotionCaptureHero = () => {
  const [isLessThan850] = useMediaQuery('(max-width: 850px)');
  const cardBg = useColorModeValue('glass.800', 'glass.100');
  const textColor = useColorModeValue(colors.glass[100], colors.glass[700]);
  const modal = useModalStore((state) => state);
  const { t } = useTranslation(`default`).i18n;

  return (
    <HeroLayout
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '64px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <SimpleGrid
        columns={2}
        px={layoutPadding}
        alignItems="center"
        justifyContent="center"
        color={textColor}
        w={{ base: 'full', xl: 'auto' }}
      >
        <GridItem
          display={{ base: 'none', sm: 'none', md: isLessThan850 ? 'none' : 'flex' }}
          onClick={modal.setComputerVision}
          cursor="pointer"
        >
          <Image
            zIndex={100}
            src={Images.motionCapture}
            _hover={{
              transition: '0.5s ease',
              transform: 'scale(1.15)',
            }}
          />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: isLessThan850 ? 2 : 1,
            xl: 1,
          }}
        >
          <VStack align="flex-start" alignItems="flex-start" spacing={{ base: '32px', md: '34px' }}>
            <VStack spacing="24px" {...commonProps}>
              <VStack
                {...commonProps}
                fontSize={{ base: '40px', md: '56px' }}
                lineHeight={{ base: '40px', md: '60px' }}
              >
                <Text fontWeight="300">{t(keys.computerVision.computerVision)}</Text>
                <Text fontWeight="700">{t(keys.computerVision.technology)}</Text>
              </VStack>
              <Text maxW="440px" fontSize="20px" opacity="0.62" fontWeight="400" lineHeight="32px">
                {t(keys.computerVision.description)}
              </Text>
            </VStack>
            <HStack
              w="full"
              spacing="20px"
              justify={{ base: 'center', sm: 'flex-start', md: 'flex-start' }}
            >
              <SimpleGrid
                columns={2}
                columnGap={4}
                rowGap={4}
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', md: 'auto' }}
              >
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard
                    isVrGlass
                    bgColor={cardBg}
                    iconColor={textColor}
                    title={t(keys.computerVision.hardwareCard)}
                  />
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard
                    bgColor={cardBg}
                    iconColor={textColor}
                    title={t(keys.computerVision.cameraCard)}
                  />
                </GridItem>
              </SimpleGrid>
            </HStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default MotionCaptureHero;
