import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common } from 'components';

import useAppSelector from '../../../hooks/useAppSelector';

const SignInButton: React.FC = () => {
  const navigate = useNavigate();
  const member = useAppSelector((state) => state.memberAuth.member);

  return !member ? (
    <Common.ImpaktButton
      as="a"
      variant="secondary"
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
