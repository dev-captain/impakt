import { CreateCommentDto } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const createComment = createAsyncThunk(
  'posts/createComment',
  async (
    { postId, createCommentDto }: { postId: number; createCommentDto: CreateCommentDto },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const comments = await PostsInstance.commentControllerV1CreateOne(postId, createCommentDto);

      return { postId, ...comments };
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createComment };
