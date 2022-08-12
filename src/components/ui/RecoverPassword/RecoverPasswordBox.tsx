import * as React from 'react';
import { Common } from 'components';
import { Text, Box } from '@chakra-ui/react';

import SignInForm from './RecoverPasswordForm';

const RecoverPasswordBox: React.FC = () => {
  return (
    <Common.Card
      display="flex"
      flexDir="column"
      rowGap={{ base: '16px', md: '32px' }}
      maxW="576px"
      mt={{ base: '0px !important', lg: '12px !important' }}
      h="100%"
      w="full"
    >
      <Box
        textAlign={{ base: 'left', md: 'center' }}
        display="flex"
        alignItems={{ base: 'left', md: 'center' }}
        justifyContent={{ base: 'left', md: 'center' }}
      >
        <Text
          color="rgba(255, 255, 255, 0.85)"
          textStyle={{ base: 'semiBold5', lg: 'regular201' }}
          pos="relative"
          lineHeight="32px !important"
        >
          We’ll email you instructions to reset your password
        </Text>
      </Box>
      <SignInForm />
    </Common.Card>
  );
};

export default RecoverPasswordBox;
