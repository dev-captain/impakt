import * as React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LogRocket from 'logrocket';
import { usePersistedAuthStore } from '../lib/zustand';
import { useAuthControllerSignAccessToken } from '../lib/impakt-dev-api-client/react-query/auth/auth';
import { useLogout } from '../hooks';

const Authentication: React.FC = ({ children }) => {
  const logout = useLogout({ silent: true });
  const refreshToken = useAuthControllerSignAccessToken();
  const { member } = usePersistedAuthStore();

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const paramId = params.id;

  React.useEffect(() => {
    if (!member && !paramId) {
      navigate(`/signin?next=${location.pathname}`, { state: { wasGuest: true } });
    } else if (member) {
      refreshToken.mutate(
        { data: {} },
        {
          onSuccess: (user) => {
            if (member?.id !== user.id) {
              logout();

              return;
            }
            LogRocket.identify(user.id?.toString(), {
              email: user.email ?? '',
              name: user.username,
              emailVerified: user.emailVerified,
            });
          },
        },
      );
    }
  }, [member]);

  // eslint-disable-next-line react/jsx-no-useless-fragment, no-nested-ternary
  return member || paramId ? <>{children}</> : null;
};

export default Authentication;
