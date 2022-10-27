import create from 'zustand';
import { persist } from 'zustand/middleware';
import { authSlice, AuthSlice } from './stores/authStore';
import { godlSlice, GodlSlice } from './stores/godlStore';
import { KoinSlice, koinSlice } from './stores/koinStore';

// export const useStore = create<>()((...a) => ({}));

export const usePersistedBalanceScoreStore = create<GodlSlice & KoinSlice>()(
  persist(
    (set, get, ...a) => ({
      ...godlSlice(set, get, ...a),
      ...koinSlice(set, get, ...a),
    }),
    {
      name: 'coin-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedAuthStore = create<AuthSlice>()(
  persist(
    (set, get, ...a) => ({
      ...authSlice(set, get, ...a),
    }),
    {
      name: 'auth-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);
