import { Box, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const MotionCaptureHero = () => {
  return (
    <HeroLayout hideBlur>
      <SimpleGrid
        columns={2}
        justifyContent="center"
        alignItems="center"
        px={layoutPadding}
        w={{ base: 'full', xl: 'auto' }}
      >
        <GridItem display={{ base: 'none', xl: 'flex' }}>
          <Image src="assets/images/motion-capture.png" />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 2,
            xl: 1,
          }}
        >
          <VStack align="flex-start" spacing="40px">
            <VStack textAlign="left" alignItems="flex-start">
              <Text
                fontSize={{ base: '40px', md: '56px' }}
                lineHeight={{ base: '56px', md: '60px' }}
                fontWeight="300"
              >
                Motion Capture
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
                Workout with your friends and battle in competitions.
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
                  <MotionCard title="No VR needed, just a camera on your device" isVrGlass />
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <MotionCard title="Highly accurate tracking of your movements" />
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
