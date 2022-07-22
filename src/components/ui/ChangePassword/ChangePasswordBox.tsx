import * as React from 'react';
import { Common } from 'components';
import { Text, Box } from '@chakra-ui/react';

import ChangePasswordForm from './ChangePasswordForm';

const ChangePasswordBox: React.FC = () => {
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
          Choose a unique password to protect your account
        </Text>
      </Box>
      <ChangePasswordForm />
    </Common.Card>
  );
};

export default ChangePasswordBox;
