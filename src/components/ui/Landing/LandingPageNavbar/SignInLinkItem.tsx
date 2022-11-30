import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import { usePersistedAuthStore } from '../../../../lib/zustand';

const SignInButton: React.FC = () => {
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();

  return !member ? (
    <Common.ImpaktButton
      as="a"
      variant="secondary"
      href="/signin"
      onClick={(e) => {
        e.preventDefault();
        navigate('/signin');
      }}
      color="#fff"
      bg="rgba(28, 28, 40, 0.65)"
      gap="8px"
    >
      <I.SignInIcon color="#fff" width="15px" />
      Sign In
    </Common.ImpaktButton>
  ) : null;
};
export default SignInButton;
