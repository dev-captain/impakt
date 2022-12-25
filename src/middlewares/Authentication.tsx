import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LogRocket from 'logrocket';
import { usePersistedAuthStore } from '../lib/zustand';

const Authentication: React.FC = ({ children }) => {
  const { member } = usePersistedAuthStore();

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!member) {
      navigate(`/signin?next=${location.pathname}`, { state: { wasGuest: true } });
    } else {
      LogRocket.identify(member.id.toString(), {
        email: member.email ?? '',
        name: member.username,
        emailVerified: member.emailVerified,
      });
    }
  }, [member]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return member ? <>{children}</> : null;
};

export default Authentication;
