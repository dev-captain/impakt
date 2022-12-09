import { StateCreator } from 'zustand';

export interface DiscourseSlice {
  news: [];
  setNews: (news: []) => void;
}

export const discourseStore: StateCreator<DiscourseSlice> = (set) => ({
  news: [],
  setNews: (news) => {
    set({ news });
  },
});
