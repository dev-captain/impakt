import * as React from 'react';
import { Button, Text } from '@chakra-ui/react';

import useAppSelector from '../../../hooks/useAppSelector';

const SignInButton: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);

  return !member ? (
    <Button colorScheme="whiteAlpha" as="a" href="/signin">
      <Text>Sign In</Text>
    </Button>
  ) : null;
};
export default SignInButton;
