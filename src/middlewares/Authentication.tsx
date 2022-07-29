import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';

const Authentication: React.FC = ({ children }) => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!member) {
      console.log(location.pathname);
      navigate(`/signin?next=${location.pathname}`);
    }
  }, [member]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return member ? <>{children}</> : null;
};

export default Authentication;
