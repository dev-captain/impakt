import { StateCreator } from 'zustand';
import { GetPostRes } from '../../impakt-dev-api-client/react-query/types';

export interface ForumSlice {
  posts: GetPostRes[];
  setPosts: (posts: GetPostRes[]) => void;
  addToPosts: (post: GetPostRes) => void;
  activePost: GetPostRes | null;
  setActivePost: (activePost: GetPostRes | null) => void;
}

export const forumStore: StateCreator<ForumSlice> = (set, get) => ({
  posts: [],
  setPosts: (posts) => {
    set({ posts });
  },
  addToPosts: (post) => {
    set({ posts: [post, ...get().posts] });
  },
  activePost: null,
  setActivePost: (activePost) => {
    set({ activePost });
  },
});
