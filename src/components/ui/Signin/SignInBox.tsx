import * as React from 'react';
import { Common } from 'components';
import { Text, Flex, Box } from '@chakra-ui/react';
import { t } from 'i18next';

import SignInForm from './SignInForm';

interface PropsI {}
const SignInBox: React.FC<PropsI> = () => {
  return (
    <Common.Card maxW="576px" minH="428px" h="100%" w="full">
      <SignInForm />
      <Flex mt="1em !important" justifyContent="center">
        <Text textStyle="semiBold5" pos="relative">
          First time?
          <Box
            // onClick={() => navigate('/register')}
            mx="5px"
            cursor="pointer"
            textColor="impaktRed"
            as="span"
          >
            Create an account
          </Box>
        </Text>
      </Flex>
    </Common.Card>
  );
};

export default SignInBox;
