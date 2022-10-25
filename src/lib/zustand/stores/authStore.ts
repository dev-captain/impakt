import { StateCreator } from 'zustand';
import { GetUserRes } from '../../impakt-dev-api-client/react-query/types';

export interface AuthSlice {
  member: GetUserRes | null;
  setMember: (member: GetUserRes | null) => void;
}

export const authSlice: StateCreator<AuthSlice> = (set) => ({
  member: null,
  setMember: (member) => set(() => ({ member })),
});
