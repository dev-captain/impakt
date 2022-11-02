import { UpdatePostDto } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';

const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (
    {
      referenceType,
      referenceId,
      postId,
      updatePostDto,
    }: {
      referenceType: 'Group' | 'Users';
      referenceId: number;
      postId: number;
      updatePostDto: UpdatePostDto;
    },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const posts = await PostsInstance.postControllerV1PatchOne(
        referenceType,
        referenceId,
        postId,
        updatePostDto,
      );

      return posts;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updatePost };
