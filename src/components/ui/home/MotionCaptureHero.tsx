import { Box, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';

const MotionCaptureHero = () => {
  return (
    <HeroLayout>
      <SimpleGrid columns={2} justifyContent="center" alignItems="center">
        <GridItem display={{ base: 'none', md: 'flex' }}>
          <Image src="assets/images/motion-capture.png" />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <VStack
            textAlign={{ base: 'center', md: 'left' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px">
              Motion capture
            </Text>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="700">
              technology
            </Text>
            <Text fontSize="20px" lineHeight="32px" paddingTop={4} opacity="0.62" maxW="440px">
              Do some exercises with your friends and participate in exciting competitions
            </Text>
          </VStack>
          <HStack spacing="20px" justify={{ base: 'center', md: 'flex-start' }} paddingTop="64px">
            <SimpleGrid columns={2} columnGap={4} rowGap={4}>
              <GridItem
                colSpan={{
                  base: 2,
                  md: 1,
                }}
              >
                <MotionCard title="No VR needed, just a camera on your device" isVrGlass />
              </GridItem>
              <GridItem
                colSpan={{
                  base: 2,
                  md: 1,
                }}
              >
                <MotionCard title="Ultra-precise recognition gestures & activities" />
              </GridItem>
            </SimpleGrid>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

const MotionCard = ({ isVrGlass, title }: { isVrGlass?: boolean; title: string }) => {
  const Icon = isVrGlass ? Icons.VrGlass : Icons.Runner;

  return (
    <Box bgColor="#1F2024" borderRadius={20} position="relative" overflow="hidden">
      <VStack align="flex-start" maxW="240px" minH="200px" maxH="250px" justify="center" p={7}>
        <Icon />
        <Text>{title}</Text>
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

// background: radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%);
// opacity: 0.49;
// filter: blur(94px);

export default MotionCaptureHero;
