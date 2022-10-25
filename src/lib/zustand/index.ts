import create from 'zustand';
import { createUserSlice, UserSlice } from './stores/userStore';

export const useStore = create<UserSlice>()((...a) => ({
  ...createUserSlice(...a),
}));
