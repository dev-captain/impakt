import React from 'react';
import { Common } from 'components';
import { Text, Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import SignUpForm from './SignUpForm';

const SignUpBox: React.FC = () => {
  return (
    <Common.Card m="0 !important" maxW="576px" h="100%" w="full">
      <SignUpForm />
      <Flex mt="1em !important" justifyContent="center">
        <Text textStyle="semiBold5" pos="relative">
          Already have an account?
          <Link
            as={ReactRouterLink}
            to="/signin"
            textDecor="none !important"
            mx="5px"
            cursor="pointer"
            textColor="impaktRed"
          >
            Sign in.
          </Link>
        </Text>
      </Flex>
    </Common.Card>
  );
};

export default SignUpBox;
