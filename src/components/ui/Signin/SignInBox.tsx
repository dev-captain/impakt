import * as React from 'react';
import { Common } from '@/components';
import { Text, Flex, Link } from '@chakra-ui/react';

import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

import SignInForm from './SignInForm';

const SignInBox: React.FC = () => {
  const navigateTo = `/register${useLocation().search}`;

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
          <Link
            as={ReactRouterLink}
            to={navigateTo}
            state={useLocation().state}
            textDecor="none !important"
            mx="5px"
            cursor="pointer"
            textColor="impaktRed"
          >
            Create an account
          </Link>
        </Text>
      </Flex>
    </Common.Card>
  );
};

export default SignInBox;
