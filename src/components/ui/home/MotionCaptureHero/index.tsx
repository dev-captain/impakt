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
import HeroLayout from 'components/layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';
import { layoutPadding } from 'theme';
import colors from 'theme/colors';
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
                <Text fontWeight="300">Computer Vision</Text>
                <Text fontWeight="700">Technology</Text>
              </VStack>
              <Text maxW="440px" fontSize="20px" opacity="0.62" fontWeight="400" lineHeight="32px">
                Use your body as a controller - move, sweat, get fit.
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
                    iconColor={textColor}
                    bgColor={cardBg}
                    title="No extra hardware necessary"
                    isVrGlass
                  />
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard
                    iconColor={textColor}
                    bgColor={cardBg}
                    title="Use the camera on your phone or laptop"
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
