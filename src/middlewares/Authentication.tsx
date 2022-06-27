import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useAppSelector from '../hooks/useAppSelector';

const Authentication: React.FC = ({ children }) => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!member) {
      navigate('/signin');
    }
  }, [member]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return member ? <>{children}</> : null;
};

export default Authentication;
