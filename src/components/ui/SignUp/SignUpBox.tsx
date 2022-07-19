import React from 'react';
import { Common } from 'components';
import { Text, Flex, Box } from '@chakra-ui/react';

import SignUpForm from './SignUpForm';

const SignUpBox: React.FC = () => {
  console.log('yo');

  return (
    <Common.Card
      maxW="576px"
      mt={{ base: '0px !important', lg: '12px !important' }}
      h="100%"
      w="full"
    >
      <SignUpForm />
      <Flex mt="1em !important" justifyContent="center">
        <Text textStyle="semiBold5" pos="relative">
          Already have an account?
          <Box as="a" href="register" mx="5px" cursor="pointer" textColor="impaktRed">
            Sign in.
          </Box>
        </Text>
      </Flex>
    </Common.Card>
  );
};

export default SignUpBox;
