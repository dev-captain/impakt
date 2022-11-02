import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';

const fetchPostComment = createAsyncThunk(
  'posts/fetchPostComment',
  async ({ postId }: { postId: number }, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const comments = await PostsInstance.commentControllerV1GetMany(postId);

      return comments;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchPostComment };
