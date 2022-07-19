import * as React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../../hooks/useAppSelector';

const SignInButton: React.FC = () => {
  const navigate = useNavigate();
  const member = useAppSelector((state) => state.memberAuth.member);

  return !member ? (
    <Button
      width={{ base: '100%', md: 'auto' }}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(40px)"
      _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      as="a"
      href="/signin"
      onClick={(e) => {
        e.preventDefault();
        navigate('/signin');
      }}
    >
      <Text>Sign In</Text>
    </Button>
  ) : null;
};
export default SignInButton;
