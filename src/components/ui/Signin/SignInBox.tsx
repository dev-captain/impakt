import * as React from 'react';
import { Common } from 'components';
import { Text, Flex, Box } from '@chakra-ui/react';

import SignInForm from './SignInForm';

const SignInBox: React.FC = () => {
  return (
    <Common.Card
      maxW="576px"
      mt={{ base: '0px !important', lg: '12px !important' }}
      h="100%"
      w="full"
    >
      <SignInForm />
      <Flex mt="1em !important" justifyContent="center">
        <Text textStyle="semiBold5" pos="relative">
          First time?
          <Box as="a" href="register" mx="5px" cursor="pointer" textColor="impaktRed">
            Create an account
          </Box>
        </Text>
      </Flex>
    </Common.Card>
  );
};

export default SignInBox;
