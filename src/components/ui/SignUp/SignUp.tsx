import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import SignUpBox from './SignUpBox';

const SignUp: React.FC = () => {
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
          minH="80px"
          id="hero-headline-box"
          bgClip="text"
          color="white"
        >
          <Text
            textAlign={{ base: 'center', lg: 'unset' }}
            letterSpacing="-2.5px"
            textStyle="TitleBold64"
          >
            {t(keys.signUp.createAn)}
          </Text>
        </Box>
      </VStack>
      <SignUpBox />
    </VStack>
  );
};
export default SignUp;
