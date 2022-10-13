import { GetPostRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './post_actions/createPost';
import { deletePost } from './post_actions/deletePost';
import { fetchPostDetail } from './post_actions/fetchPostDetail';
import { fetchPosts } from './post_actions/fetchPosts';
import { updatePost } from './post_actions/updatePost';

interface PostsInitialState {
  posts: GetPostRes[];
  postDetails: GetPostRes[];
  isPostsLoading: boolean;
}

const postsInitialState: PostsInitialState = {
  posts: [],
  postDetails: [],
  isPostsLoading: false,
};

const postSlices = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    cleanForums(state: PostsInitialState) {
      state.posts = [];
      state.postDetails = [];
      state.isPostsLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isPostsLoading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(createPost.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
        state.isPostsLoading = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(deletePost.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload.id);
        state.isPostsLoading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(updatePost.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const a = state.posts.findIndex((post) => post.id === action.payload.id);
        const b = state.postDetails.findIndex((post) => post.id === action.payload.id);
        if (a !== -1 && b !== -1) {
          state.posts[a] = action.payload;
          state.posts[b] = action.payload;
        }
        state.isPostsLoading = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(fetchPostDetail.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.postDetails = [...state.postDetails, action.payload];
        state.isPostsLoading = false;
      })
      .addCase(fetchPostDetail.rejected, (state) => {
        state.isPostsLoading = false;
      });
  },
});
export const { cleanForums } = postSlices.actions;
export default postSlices.reducer;
