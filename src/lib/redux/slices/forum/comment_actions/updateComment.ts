import { UpdateCommentDto } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const updateComment = createAsyncThunk(
  'posts/updateComment',
  async (
    {
      postId,
      commentId,
      updateCommentDto,
    }: { postId: number; commentId: number; updateCommentDto: UpdateCommentDto },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const comments = await PostsInstance.commentControllerV1PatchOne(
        commentId,
        postId,
        updateCommentDto,
      );

      return comments;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateComment };
