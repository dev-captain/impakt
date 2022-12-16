import { useAuthControllerLogout } from '../lib/impakt-dev-api-client/react-query/auth/auth';
import {
  usePersistedAuthStore,
  usePersistedBalanceScoreStore,
  usePersistedGroupStore,
} from '../lib/zustand';
import { renderToast } from '../utils';

type UseLogoutType = {
  silent?: boolean;
};
export const useLogout = (props?: UseLogoutType) => {
  const signOut = useAuthControllerLogout();
  const { setMember } = usePersistedAuthStore();
  const { setClear } = usePersistedGroupStore();
  const { setClearGodl, setClearKoin } = usePersistedBalanceScoreStore();

  const logout = async () => {
    await signOut.mutateAsync().finally(() => {
      setMember(null);
      setClear();
      setClearGodl();
      setClearKoin();
      if (!props?.silent) {
        renderToast('success', 'You have successfully logged out!', 'dark');
      }
    });
  };

  return logout;
};
