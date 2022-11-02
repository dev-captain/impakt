import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';

const deleteComment = createAsyncThunk(
  'posts/deleteComment',
  async (
    { postId, commentId }: { postId: number; commentId: number },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const comments = await PostsInstance.commentControllerV1DeleteOne(postId, commentId);

      return { ...comments, commentId, postId };
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { deleteComment };
