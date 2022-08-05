import { createSlice } from '@reduxjs/toolkit';
import { fetchLatestNews } from './fetchLatestNews';

interface DiscourseInitialI {
  isDiscourseLoading: boolean;
  news: any;
}

const discourseInitialState: DiscourseInitialI = {
  news: [],
  isDiscourseLoading: false,
};

const discourseSlice = createSlice({
  name: 'discourse',
  initialState: discourseInitialState as DiscourseInitialI,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.isDiscourseLoading = true;
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isDiscourseLoading = false;
      })
      .addCase(fetchLatestNews.rejected, (state) => {
        state.isDiscourseLoading = false;
      });
  },
});

// eslint-disable-next-line import/prefer-default-export
export default discourseSlice.reducer;
