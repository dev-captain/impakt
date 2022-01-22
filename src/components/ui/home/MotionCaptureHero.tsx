/* eslint-disable prettier/prettier */
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  GridItem,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const MotionCaptureHero = () => {
  const [isLessThan850] = useMediaQuery('(max-width: 850px)');

  return (
    <HeroLayout hideBlur>
      <SimpleGrid
        columns={2}
        justifyContent="center"
        alignItems="center"
        px={layoutPadding}
        w={{ base: 'full', xl: 'auto' }}
      >
        <GridItem display={{ base: 'none', sm: 'none', md: isLessThan850 ? 'none' : 'flex' }}>
          <Image src="assets/images/motion-capture.png" />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: isLessThan850 ? 2 : 1,
            xl: 1,
          }}
        >
          <VStack align="flex-start" spacing="40px" alignItems={{ base: 'center', md: 'flex-start' }}>
            <VStack textAlign={{ base: 'center', md: 'left' }} alignItems={{ base: 'center', md: 'flex-start' }}>
              <Text
                fontSize={{ base: '40px', md: '56px' }}
                lineHeight={{ base: '56px', md: '60px' }}
                fontWeight="300"
              >
                Computer Vision
              </Text>
              <Text
                fontSize={{ base: '40px', md: '56px' }}
                lineHeight={{ base: '56px', md: '60px' }}
                fontWeight="700"
              >
                Technology
              </Text>
              <Text
                fontSize="20px"
                lineHeight="32px"
                paddingTop={4}
                opacity="0.62"
                maxW="440px"
                fontWeight="400"
              >
                Use your body as a controller - move, sweat, get fit.
              </Text>
            </VStack>
            <HStack spacing="20px" justify={{ base: 'center', sm: 'flex-start', md: 'flex-start' }}>
              <SimpleGrid columns={2} columnGap={4} rowGap={4}>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard title="No extra hardware necessary" isVrGlass />
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard title="Use the camera on your phone or laptop" />
                </GridItem>
              </SimpleGrid>
            </HStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

const MotionCard = ({ isVrGlass, title }: { isVrGlass?: boolean; title: string }) => {
  const Icon = isVrGlass ? Icons.VrGlass : Icons.Runner;

  return (
    <Box bgColor="#1F2024" borderRadius={20} position="relative" overflow="hidden">
      <VStack
        align="flex-start"
        maxW="240px"
        minH={{ base: '210px', xl: '180px' }}
        maxH="250px"
        justify="center"
        p={7}
        spacing="32px"
      >
        <Icon />
        <Text fontSize={{ base: '14px', md: '16px' }} lineHeight="20px">
          {title}
        </Text>
        <Box
          w="220px"
          h="196px"
          left="-70px"
          top="-100px"
          opacity={0.49}
          background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
        />
        <Box
          w="220px"
          h="196px"
          left="93px"
          top="100px"
          opacity={0.49}
          background="radial-gradient(50% 50% at 50% 50%, rgba(72, 123, 253, 1) 10%, rgba(184, 50, 108, 0) 100%)"
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
        />
      </VStack>
    </Box>
  );
};

export default MotionCaptureHero;
