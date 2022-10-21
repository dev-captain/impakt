import { GetPostRes } from '@impakt-dev/api-client';
import { createSlice } from '@reduxjs/toolkit';
import { createComment } from './comment_actions/createComment';
import { deleteComment } from './comment_actions/deleteComment';
import { createPost } from './post_actions/createPost';
import { deletePost } from './post_actions/deletePost';
import { fetchPosts } from './post_actions/fetchPosts';
import { updatePost } from './post_actions/updatePost';

interface PostsInitialState {
  posts: GetPostRes[];
  isPostsLoading: boolean;
}

const postsInitialState: PostsInitialState = {
  posts: [],
  isPostsLoading: false,
};

const postSlices = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    cleanForums(state: PostsInitialState) {
      state.posts = [];
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
        if (a !== -1) {
          state.posts[a] = action.payload;
        }
        state.isPostsLoading = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(createComment.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        const a = state.posts.findIndex((post) => post.id === action.payload.postId);
        if (a !== -1) {
          state.posts[a] = {
            ...state.posts[a],
            comment: [...state.posts[a]?.comment, action.payload],
          };
        }
        // state.postDetails = [...state.postDetails, action.payload];
        state.isPostsLoading = false;
      })
      .addCase(createComment.rejected, (state) => {
        state.isPostsLoading = false;
      });

    builder
      .addCase(deleteComment.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const a = state.posts.findIndex((post) => post.id === action.payload.postId);
        if (a !== -1 && action.payload.success) {
          state.posts[a] = {
            ...state.posts[a],
            comment: state.posts[a].comment.filter(
              (comment) => comment.id !== action.payload.commentId,
            ),
          };
        }
        // state.postDetails = [...state.postDetails, action.payload];
        state.isPostsLoading = false;
      })
      .addCase(deleteComment.rejected, (state) => {
        state.isPostsLoading = false;
      });
  },
});
export const { cleanForums } = postSlices.actions;
export default postSlices.reducer;
