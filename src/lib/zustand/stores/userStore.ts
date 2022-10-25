import { StateCreator } from 'zustand';
import { GetUserRes } from '../../impakt-dev-api-client/react-query/types';

export interface UserSlice {
  user: GetUserRes | null;
  setUser: (user: GetUserRes) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
});
