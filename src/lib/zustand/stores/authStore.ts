import { StateCreator } from 'zustand';
import { GetUserRes, IsWhitelistedRes } from '../../impakt-dev-api-client/react-query/types';

export interface AuthSlice {
  member: GetUserRes | null;
  isWhitelistedCollection: IsWhitelistedRes;
  setMember: (member: GetUserRes | null) => void;
  setIsWhitelistedCollection: (isWhitelistedCollection: IsWhitelistedRes) => void;
}

export const authSlice: StateCreator<AuthSlice> = (set) => ({
  member: null,
  isWhitelistedCollection: {
    isDiscordConnected: false,
    isTwitterConnected: false,
    isWalletConnected: false,
    isWhitelisted: false,
  },
  setMember: (member) => set(() => ({ member })),
  setIsWhitelistedCollection: (isWhitelistedCollection) => set(() => ({ isWhitelistedCollection })),
});
