import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';

const BurnToEarnHero = () => {
  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      base: '20px',
      lg: '220px',
    },
    py: {
      base: '20px',
      md: '120px',
      lg: '240px',
    },
  };

  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <HStack
          w="full"
          bgSize="cover"
          justify="space-between"
          align="space-between"
          {...vStackSomeProps}
          backgroundImage={bgImage}
          overflow="hidden"
          position="relative"
        >
          <VStack zIndex={2} align="flex-start" spacing={{ base: '20px', md: '130px' }}>
            <VStack align="flex-start" spacing={8}>
              <Text fontSize="56px" lineHeight="60px" fontWeight="300">
                Burn and
                <Text fontWeight="700">earn!</Text>
              </Text>
              <Text fontSize="20px" opacity="0.6" maxW="340px">
                Connect ANYTIME with ANYONE, ANYWHERE, workout, battle and earn tokens and NFTs!
              </Text>
            </VStack>
          </VStack>
          <Center
            w="80px"
            h="80px"
            borderRadius="40px"
            bgColor={{ base: 'black', md: 'whiteAlpha.300' }}
            alignSelf="center"
            position="absolute"
            zIndex={2}
            left={['30%', '50%', '50%', '50%']}
          >
            <Icons.WhitePlay />
          </Center>
          <Box
            w="967px"
            h="472px"
            zIndex={1}
            left="-307px"
            top="-204px"
            opacity={0.49}
            pos="absolute"
            background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
          />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default BurnToEarnHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 18.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/burn-to-earn-hero.png')";
