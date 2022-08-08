import { VStack, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import { C } from 'components';
import ContactUsBox from './ContactUsBox';
import Images from '../../../assets/images';

const ContactUs: React.FC = () => {
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      showNavbar
      minH="100vh"
      pos="relative"
      customPadding="200"
      justify="flex-start"
      align="flex-start"
      bgImage={bgImage}
    >
      <VStack
        color={textColor}
        w="full"
        px={{ base: '1em', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
        mt={{ base: '10px', lg: '15px' }}
      >
        <VStack w="full">
          <VStack w="full">
            <Box
              sx={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
              minH="80px"
              id="hero-headline-box"
              bgClip="text"
              color="white"
            >
              <Text
                textAlign={{ base: 'center', lg: 'unset' }}
                letterSpacing={{ base: '-0.5px', md: '-2.5px' }}
                fontWeight="700"
                fontSize={{ base: '32px', md: '48px' }}
                lineHeight={{ base: '32px', md: '48px' }}
              >
                {t(keys.contact.getInTouch)} {t(keys.contact.withUs)}
              </Text>
            </Box>
          </VStack>
          <ContactUsBox />
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};
export default ContactUs;
