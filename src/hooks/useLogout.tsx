import { useAuthControllerLogout } from '../lib/impakt-dev-api-client/react-query/auth/auth';
import { clearMemberLocalStorages, usePersistedAuthStore } from '../lib/zustand';
import { renderToast } from '../utils';

export const useLogout = () => {
  const signOut = useAuthControllerLogout();
  const { setMember } = usePersistedAuthStore();

  const logout = async () => {
    setMember(null);
    clearMemberLocalStorages();
    await signOut.mutateAsync().finally(() => {
      renderToast('success', 'You have successfully logged out!');
    });
  };

  return logout;
};
