import { memo } from 'react';
import { C, Common, I } from 'components';
import { VStack, Box, Text, useColorModeValue, HStack } from '@chakra-ui/react';
import Images from 'assets/images';

const ImapktPass = () => {
  const bgImage = useColorModeValue(Images.whitelist.impaktIconBg, Images.whitelist.impaktIconBg);

  return (
    <C.HeroLayout
      showNavbar
      minH="unset"
      removeTopPadding
      removeBottomPadding
      customTopPadding="50px"
      spacing={10}
      pos="relative"
      align="center"
      justify="center"
      bgImage={bgImage}
      bgPosition="top"
      backgroundSize="auto"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#0A0A0B"
    >
      <VStack w="full" px="1em">
        <VStack maxW="1200px" w="full">
          <HStack flexDir={{ base: 'column', lg: 'row' }} rowGap="48px" columnGap="48px">
            <Box
              w="100%"
              backgroundColor="rgba(28, 28, 40, 0.65)"
              p={{ base: '20px', lg: '40px' }}
              borderRadius="32px"
            >
              <Box>
                <Text as="h1" color="#fff" fontWeight="700" fontSize="32px">
                  How can you get the Impakt Pass?
                </Text>
                <Text as="p" color="rgba(255, 255, 255, 0.85)" fontSize="20px" marginBottom="24px">
                  Follow us on all platforms so you can get a channel:
                </Text>
                <Common.ImpaktButton
                  as="a"
                  leftIcon={
                    <Box marginRight="8px">
                      <I.DiscordIcon />
                    </Box>
                  }
                  size="lg"
                  variant="secondary"
                  justifyContent="center"
                  fontSize={{ base: '16px', lg: '20px' }}
                  lineHeight={{ base: '24px', lg: '32px' }}
                  marginBottom="12px"
                >
                  Join our Discord
                </Common.ImpaktButton>
                <Common.ImpaktButton
                  as="a"
                  leftIcon={
                    <Box marginRight="8px">
                      <I.TwitterIcon />
                    </Box>
                  }
                  size="lg"
                  variant="secondary"
                  justifyContent="center"
                  fontSize={{ base: '16px', lg: '20px' }}
                  lineHeight={{ base: '24px', lg: '32px' }}
                  marginBottom="12px"
                >
                  Follow us on Twitter
                </Common.ImpaktButton>
                <Common.ImpaktButton
                  as="a"
                  leftIcon={
                    <Box marginRight="8px">
                      <I.IGIcon />
                    </Box>
                  }
                  size="lg"
                  variant="secondary"
                  justifyContent="center"
                  fontSize={{ base: '16px', lg: '20px' }}
                  lineHeight={{ base: '24px', lg: '32px' }}
                  marginBottom="12px"
                >
                  Follow us on IG
                </Common.ImpaktButton>
                <Common.ImpaktButton
                  as="a"
                  leftIcon={
                    <Box marginRight="8px">
                      <I.TikTokIcon />
                    </Box>
                  }
                  size="lg"
                  variant="secondary"
                  justifyContent="center"
                  fontSize={{ base: '16px', lg: '20px' }}
                  lineHeight={{ base: '24px', lg: '32px' }}
                  marginBottom="12px"
                >
                  Follow us on TikTok
                </Common.ImpaktButton>
              </Box>
            </Box>
            <Box
              w="100%"
              m="0 !important"
              backgroundColor="rgba(28, 28, 40, 0.65)"
              p={{ base: '20px', lg: '40px' }}
              borderRadius="32px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignSelf="stretch"
            >
              <Box>
                <Text as="h1" color="#fff" fontWeight="700" fontSize="32px">
                  Join The Whitelist Challenge
                </Text>
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  color="#fff"
                  marginTop="24px"
                  marginBottom="24px"
                >
                  How To get Started
                </Text>
                <Text as="p" color="rgba(255, 255, 255, 0.85)" fontSize="20px">
                  This is not your average whitelist grind! You’re going to sweat for it! No joke!
                  Join our whitelist challenge, exercise with your community, and earn your place on
                  the leaderboard! Let’s get started!
                </Text>
              </Box>
              <Box mt={{ base: '1em', lg: '0' }}>
                <Common.ImpaktButton
                  as="a"
                  leftIcon={
                    <Box marginRight="8px">
                      <I.DownloadIcon />
                    </Box>
                  }
                  size="lg"
                  justifyContent="center"
                  fontSize={{ base: '16px', lg: '20px' }}
                  lineHeight={{ base: '24px', lg: '32px' }}
                  marginBottom="12px"
                >
                  Install the Impakt app
                </Common.ImpaktButton>
              </Box>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(ImapktPass);
