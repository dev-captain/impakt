/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { C } from 'components';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { Videos } from '../../../data';

const DiscordSupport = () => {
  const { t } = useTranslation().i18n;
  const mode = useColorModeValue('dark', 'light');
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      removeTopPadding
      minH="100vh"
      align="flex-start"
      justify="flex-start"
      pos="relative"
    >
      <Box
        m="0 !important"
        background="linear-gradient(180deg, rgba(18, 18, 22, 1) 0%, rgba(18, 18, 22, 0.75) 100%);"
        zIndex="1"
        w="full"
        position="absolute"
        top="0"
        h="100%"
        left="0"
      />
      <Box mt="0 !important" pos="absolute" zIndex="0" top="0" left="0" w="full">
        <video
          style={{ minWidth: '1920px' }}
          autoPlay
          loop
          muted
          playsInline
          // onLoadedData={() => {
          //   dispatch(setIsLoaded(true));
          // }}
        >
          <source src={Videos.backgroundBeachVideo} type="video/mp4" />
        </video>
      </Box>
      <VStack
        mt={{ base: '72px !important', lg: '120px !important' }}
        px={{ base: '1em', lg: '0' }}
        rowGap={{ base: '1.5em', lg: '2em' }}
        zIndex="2"
        w="full"
        color={textColor}
      >
        <Box
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
          id="hero-headline-box"
          bgClip="text"
          color="white"
          m="0 !important"
          textAlign="center"
          w="full"
        >
          <Text
            textAlign={{ base: 'center', lg: 'unset' }}
            letterSpacing={{ base: '-0.5px', md: '-2.5px' }}
            fontWeight="700"
            fontSize={{ base: '32px', md: '48px' }}
            lineHeight={{ base: '32px', md: '48px' }}
          >
            {t(keys.contact.joinOur)} <b>{t(keys.contact.discordSupport)}</b>
          </Text>
        </Box>

        <Box m="0 !important" h={{ base: '582px', lg: '625px' }} zIndex="1" w="full" maxW="856px">
          <iframe
            height="100%"
            width="100%"
            frameBorder="0"
            style={{ zIndex: 100 }}
            src={`https://discord.com/widget?id=923586211807895582&theme=${mode}`}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </Box>
      </VStack>
    </C.HeroLayout>
  );
};

export default DiscordSupport;
