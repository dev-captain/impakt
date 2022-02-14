import { HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import { HowToSignUpHeroGradient } from 'components/ui/gradients';
import SocialIcons from './SocialIcons';

const HowToSignUpHero = () => {
  const [isLessThan1600] = useMediaQuery('(max-width: 1600px)');

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
    <HeroLayout>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <HStack
          w="full"
          justify="space-between"
          align="space-between"
          {...vStackSomeProps}
          overflow="hidden"
          position="relative"
          backgroundImage={bgImage}
          backgroundSize={isLessThan1600 ? 'cover' : 'fill'}
          backgroundPosition={{ base: 'left', sm: 'center', md: 'left' }}
        >
          <VStack
            zIndex={1}
            maxW="500px"
            align="flex-start"
            spacing={{ base: '20px', md: '120px' }}
          >
            <VStack align="flex-start" spacing={10}>
              <VStack spacing="24px">
                <HStack
                  w="full"
                  zIndex={1}
                  align="flex-start"
                  justify="flex-start"
                  spacing={{ base: 0, md: 4 }}
                  flexDir={{ base: 'column', md: 'row' }}
                >
                  <Text
                    lineHeight={{ base: '44px', md: '60px' }}
                    fontSize={{ base: '40px', sm: '50px', md: '56px' }}
                  >
                    How to
                  </Text>
                  <Text
                    fontWeight="700"
                    lineHeight="60px"
                    fontSize={{ base: '40px', sm: '50px', md: '56px' }}
                  >
                    sign up
                  </Text>
                </HStack>
                <Text zIndex={2} opacity="0.6" fontSize={{ base: '14px', md: '20px' }}>
                  Join with your Google, Apple, Facebook accounts, or register with your email.
                </Text>
              </VStack>
              <SocialIcons forMobile />
              <GradientButton
                px="80px"
                py="32px"
                title="Sign Up"
                w={{ base: 'full', md: 'auto' }}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              />
            </VStack>
          </VStack>
          <HowToSignUpHeroGradient />
          <SocialIcons />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default HowToSignUpHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 1.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/how-to-signup-hero.png')";
