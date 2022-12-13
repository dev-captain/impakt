import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common } from 'components';
import { usePersistedAuthStore } from '../../../lib/zustand';

const SignInButton: React.FC = () => {
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();

  return !member ? (
    <Common.ImpaktButton
      as="a"
      variant="secondary"
      bgColor="rgba(28, 28, 40, 1)"
      href="/signin"
      onClick={(e) => {
        e.preventDefault();
        navigate('/signin');
      }}
    >
      Sign In
    </Common.ImpaktButton>
  ) : null;
};
export default SignInButton;
