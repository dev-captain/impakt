import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import SignUpBox from './SignUpBox';

const SignUp: React.FC = () => {
  const { t } = useTranslation().i18n;

  return (
    <VStack rowGap={{ base: '1.5em', lg: '2em' }} w="full">
      <VStack w="full">
        <Box
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
          id="hero-headline-box"
          bgClip="text"
          color="white"
        >
          <Text
            textAlign={{ base: 'center', lg: 'unset' }}
            letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
            fontSize={{ base: '32px', lg: '64px' }}
            lineHeight={{ base: '32px', lg: '64px' }}
            fontWeight="700"
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
