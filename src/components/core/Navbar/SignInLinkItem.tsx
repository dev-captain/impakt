import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { useUserContext } from '../../../context/UserContext';

const SignInButton: React.FC = () => {
  const { user } = useUserContext();

  return !user ? (
    <Box as="a" href="/signin">
      <Text>Sign In</Text>
    </Box>
  ) : null;
};
export default SignInButton;
