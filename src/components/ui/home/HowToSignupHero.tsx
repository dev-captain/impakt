import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const HowToSignUpHero = () => {
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
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
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
          <VStack
            zIndex={1}
            align="flex-start"
            spacing={{ base: '20px', md: '120px' }}
            maxW="500px"
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
              <Button
                px="64px"
                py="32px"
                borderRadius="10px"
                w={{ base: 'full', md: 'auto' }}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Sign Up
              </Button>
            </VStack>
          </VStack>
          <Box
            w="967px"
            h="472px"
            left="-307px"
            top="-204px"
            opacity={0.49}
            background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
            pos="absolute"
            zIndex={0}
          />
          <SocialIcons />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

const SocialIcons = ({ forMobile }: { forMobile?: boolean }) => {
  const StackComponent = forMobile ? HStack : VStack;

  return (
    <StackComponent
      right={{
        base: 10,
        md: 20,
        xl: 190,
      }}
      zIndex={1}
      align="center"
      justify="center"
      spacing="16px"
      flexDir={forMobile ? 'row' : 'column'}
      pos={forMobile ? 'inherit' : 'absolute'}
      paddingTop={{ base: forMobile ? 0 : 8, md: 0 }}
      display={{ base: forMobile ? 'flex' : 'none', md: forMobile ? 'none' : 'flex' }}
    >
      <SocialIcon name="Facebook" />
      <SocialIcon name="Google" />
      <SocialIcon name="Apple" />
    </StackComponent>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  const Icon = Icons?.[name];

  return (
    <Center backgroundColor="blackAlpha.400" w="40px" h="40px" borderRadius="8px" p={0}>
      <VStack w="full">{Icon && <Icon />}</VStack>
    </Center>
  );
};

export default HowToSignUpHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 1.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/how-to-signup-hero.png')";
