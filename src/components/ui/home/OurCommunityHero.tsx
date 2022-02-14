import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const OurCommunityHero = () => {
  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      base: '20px',
      lg: '120px',
    },
    py: {
      base: '20px',
      md: '120px',
      lg: '240px',
    },
  };

  return (
    <HeroLayout>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <HStack
          w="full"
          maxH="622px"
          bgSize="cover"
          overflow="hidden"
          bgPosition="center"
          position="relative"
          {...vStackSomeProps}
          backgroundImage={bgImage}
        >
          <Box
            bg="linear-gradient(90deg, rgba(31, 32, 36, 0.784) 50%, rgba(31, 32, 36, 0.7124) 63.01%, rgba(31, 32, 36, 0.608) 72.58%, rgba(31, 32, 36, 0) 100%)"
            minH="622px"
            minW="1200px"
            pos="absolute"
            top={0}
            left={0}
            zIndex={2}
          />
          <VStack zIndex={2} align="flex-start" spacing={{ base: '16px', md: '40px', xl: '80px' }}>
            <VStack align="flex-start" spacing="40px">
              <Text
                fontSize={{ base: '40px', md: '56px' }}
                lineHeight={{ base: '44px', md: '60px' }}
                fontWeight="300"
              >
                Our
                <Text fontWeight="700">community</Text>
              </Text>
              <VStack spacing="16px">
                <Center
                  w="80px"
                  h="80px"
                  zIndex={3}
                  borderRadius="40px"
                  alignSelf="center"
                  d={{ base: 'flex', md: 'none' }}
                  bgColor={{ base: 'whiteAlpha.300' }}
                >
                  <Icons.WhitePlay />
                </Center>
                <Text fontSize="20px" opacity="0.6" maxW="400px" fontWeight="400">
                  Join and participate in sports marathons remotely while earning NFT!
                </Text>
              </VStack>
            </VStack>
            <GradientButton
              title="Get started"
              w={{ base: 'full', md: 'auto' }}
              bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
            />
          </VStack>
          <Center
            w="80px"
            h="80px"
            borderRadius="40px"
            bgColor={{ base: 'whiteAlpha.300' }}
            alignSelf="center"
            position="absolute"
            zIndex={3}
            d={{ base: 'none', md: 'flex' }}
            left={['30%', '50%', '50%', '50%']}
          >
            <Icons.WhitePlay />
          </Center>
          <Box
            w="967px"
            h="472px"
            zIndex={2}
            left="-307px"
            top="-204px"
            opacity={0.2}
            pos="absolute"
            background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
          />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default OurCommunityHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 2.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/our-community-hero.png')";
