import { StateCreator } from 'zustand';
import { GetUserRes } from '../../impakt-dev-api-client/react-query/types';

export interface AuthSlice {
  member: GetUserRes | null;
  isWhitelistedCollection: {
    isWhitelisted: boolean;
    isDiscordConnected: boolean;
    isTwitterConnected: boolean;
    isWalletConnected: boolean;
  };
  setMember: (member: GetUserRes | null) => void;
  setIsWhitelistedCollection: ({
    isWhitelisted,
    isDiscordConnected,
    isTwitterConnected,
    isWalletConnected,
  }: {
    isWhitelisted: boolean;
    isDiscordConnected: boolean;
    isTwitterConnected: boolean;
    isWalletConnected: boolean;
  }) => void;
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
