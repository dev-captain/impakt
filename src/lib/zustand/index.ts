import create from 'zustand';
import { persist } from 'zustand/middleware';
import { authSlice, AuthSlice } from './stores/authStore';
import { godlSlice, GodlSlice } from './stores/godlStore';

export const useStore = create<GodlSlice>()((...a) => ({
  ...godlSlice(...a),
}));

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
