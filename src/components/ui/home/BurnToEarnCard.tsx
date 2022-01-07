import { Box, Container, Text, VStack, Image, HStack, AspectRatio } from '@chakra-ui/react';
import Icons from 'components/icons';

const BurnToEarnCard = () => {
  return (
    <Box bgColor="#1F2024" borderRadius={10} maxW="400px" overflow="hidden" position="relative">
      <Container px={8} py={3}>
        <HStack>
          <GradientGroup />
          <AspectRatio ratio={1} w={['80px', '80px', '100px']}>
            <Image zIndex={2} borderRadius="16px" src="assets/images/burntoearn.png" />
          </AspectRatio>
          <VStack align="flex-start">
            <VStack align="flex-start">
              <Text>Burn to earn! </Text>
              <Text>Let’s start with us be happy </Text>
            </VStack>
            <HStack align="center" justify="center">
              <Icons.Play />
              <Text fontSize="md" fontWeight="semibold" color="red">
                Play video
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

const GradientGroup = () => {
  return (
    <>
      <Container
        w="220px"
        zIndex={1}
        pos="absolute"
        height="196px"
        opacity="0.8"
        left="-250px"
        top="-100px"
        filter="blur(34px)"
        bgGradient="radial-gradient(rgba(184, 50, 108, 1), rgba(184, 50, 108, 0.5))"
      />
      <VStack
        pos="absolute"
        w="335px"
        height="116px"
        opacity="0.51"
        left="-40px"
        top="98px"
        filter="blur(94px)"
        bgGradient="radial-gradient(50% 50% at 50% 50%, #FD4857 58.11%, #FF7A00 100%)"
      />
    </>
  );
};

export default BurnToEarnCard;
