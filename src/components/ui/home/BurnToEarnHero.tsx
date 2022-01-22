import { Box, Center, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import VideoModal from 'components/core/VideoModal';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { Videos } from 'data';
import { layoutPadding } from 'theme';

const BurnToEarnHero = () => {
  const disclosure = useDisclosure();
  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      sm: '32px',
      md: '40px',
      xl: '120px',
      base: '16px',
    },
    py: {
      base: '60px',
      md: '100px',
      xl: '180px',
      '2xl': '240px',
    },
  };

  return (
    <HeroLayout hideBlur={!disclosure.isOpen}>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <HStack
          w="full"
          bgSize="cover"
          bgPos={{ base: 'top', xl: 'center' }}
          justify="space-between"
          align="space-between"
          {...vStackSomeProps}
          backgroundImage={bgImage}
          overflow="hidden"
          position="relative"
          onClick={disclosure.onOpen}
        >
          <VStack zIndex={2} align="flex-start" spacing={{ base: '20px', md: '130px' }}>
            <VStack align="flex-start" spacing={8}>
              <Text fontSize={{ base: '40px', md: '56px' }} lineHeight="60px" fontWeight="300">
                Burn and
                <Text fontWeight="700">earn!</Text>
              </Text>
              <Play forMobile onClick={disclosure.onOpen} />
              <Text
                opacity="0.6"
                fontSize={{ base: '14px', md: '20px' }}
                maxW={{ base: '204px', md: '340px' }}
              >
                Connect ANYTIME with ANYONE, ANYWHERE, workout, battle and earn tokens and NFTs!
              </Text>
            </VStack>
          </VStack>
          <Play onClick={disclosure.onOpen} />
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
      <VideoModal showPlayer={false} {...disclosure} hideButtons path={Videos.burnAndEarn} />
    </HeroLayout>
  );
};

export default BurnToEarnHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 18.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/burn-to-earn-hero.png')";

const Play = ({ forMobile, onClick }: { forMobile?: boolean; onClick: () => void }) => (
  <Center
    w="80px"
    h="80px"
    zIndex={2}
    onClick={onClick}
    borderRadius="40px"
    alignSelf="center"
    bgColor="whiteAlpha.400"
    left={['30%', '50%', '50%', '50%']}
    boxShadow="4px 4px 10px rgba(0, 0, 0, 0.12)"
    position={forMobile ? 'initial' : 'absolute'}
    d={{ base: forMobile ? 'flex' : 'none', md: forMobile ? 'none' : 'flex' }}
  >
    <Icons.WhitePlay />
  </Center>
);
