import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

import useAppSelector from '../../../hooks/useAppSelector';

const SignInButton: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);

  return !member ? (
    <Box as="a" href="/signin">
      <Text>Sign In</Text>
    </Box>
  ) : null;
};
export default SignInButton;
