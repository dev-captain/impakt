import { useAuthControllerLogout } from '../lib/impakt-dev-api-client/react-query/auth/auth';
import { usePersistedAuthStore, usePersistedGroupStore } from '../lib/zustand';
import { renderToast } from '../utils';

export const useLogout = () => {
  const signOut = useAuthControllerLogout();
  const { setMember } = usePersistedAuthStore();
  const { setClear } = usePersistedGroupStore();

  const logout = async () => {
    await signOut.mutateAsync().finally(() => {
      setMember(null);
      setClear();
      renderToast('success', 'You have successfully logged out!');
    });
  };

  return logout;
};
