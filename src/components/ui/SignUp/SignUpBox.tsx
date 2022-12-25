import React from 'react';
import { Common } from 'components';
import { Text, Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

import SignUpForm from './SignUpForm';

const SignUpBox: React.FC = () => {
  const navigateTo = `/signin${useLocation().search}`;

  return (
    <Common.Card m="0 !important" maxW="576px" h="100%" w="full">
      <SignUpForm />
      <Flex mt="1em !important" justifyContent="center">
        <Text textStyle="semiBold5" pos="relative">
          Already have an account?
          <Link
            as={ReactRouterLink}
            to={navigateTo}
            state={useLocation().state}
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
