import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import SignInBox from './RecoverPasswordBox';

const RecoverPassword: React.FC = () => {
  const { t } = useTranslation().i18n;

  return (
    <VStack w="full">
      <VStack w="full">
        <Box
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
          minH={{ base: '0', md: '80px' }}
          id="hero-headline-box"
          bgClip="text"
          color="white"
          mb={{ base: '24px', md: '0' }}
        >
          <Text
            textAlign={{ base: 'center', lg: 'unset' }}
            letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
            fontWeight="700"
            lineHeight="100%"
            fontSize={{ base: '32px', md: '48px', lg: '64px' }}
          >
            {t(keys.password.recovery)}
          </Text>
        </Box>
      </VStack>
      <SignInBox />
    </VStack>
  );
};
export default RecoverPassword;
