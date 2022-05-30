import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Authentication: React.FC = ({ children }) => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!user) {
        navigate('/login');
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [user]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return user ? <>{children}</> : null;
};

export default Authentication;
