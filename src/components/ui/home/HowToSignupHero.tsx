import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';

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
          <VStack
            zIndex={1}
            align="flex-start"
            spacing={{ base: '20px', md: '120px' }}
            maxW="500px"
          >
            <VStack align="flex-start" spacing={10}>
              <HStack zIndex={1}>
                <Text fontSize={{ base: '32px', sm: '50px', md: '56px' }} lineHeight="60px">
                  How to
                </Text>
                <Text
                  fontSize={{ base: '32px', sm: '50px', md: '56px' }}
                  fontWeight="700"
                  lineHeight="60px"
                >
                  sign up
                </Text>
              </HStack>
              <Text zIndex={2} opacity="0.6" fontSize="20px">
                Join with your Google, Apple, Facebook accounts, or register with your email.
              </Text>
              <Button
                px="64px"
                py="32px"
                borderRadius="10px"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Sign Up
              </Button>
              <VStack
                pos="absolute"
                right={{
                  base: 10,
                  md: 20,
                  xl: 190,
                }}
                zIndex={1}
                paddingTop={{ base: 8, md: 0 }}
              >
                <SocialIcon name="Facebook" />
                <SocialIcon name="Google" />
                <SocialIcon name="Apple" />
              </VStack>
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
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  const Icon = Icons?.[name];

  return (
    <Center
      backgroundColor={{ base: 'blackAlpha.700', md: 'whiteAlpha.300', xl: 'blackAlpha.400' }}
      w="40px"
      h="40px"
      borderRadius="8px"
    >
      {Icon && <Icon />}
    </Center>
  );
};

export default HowToSignUpHero;

const bgImage =
  "linear-gradient(90deg, #1F2024 1.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/how-to-signup-hero.png')";
