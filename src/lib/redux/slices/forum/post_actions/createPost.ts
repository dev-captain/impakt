import { CreatePostDto } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const createPost = createAsyncThunk(
  'posts/createPost',
  async (
    {
      referenceType,
      referenceId,
      createPostDto,
    }: { referenceType: 'Group' | 'Users'; referenceId: number; createPostDto: CreatePostDto },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const posts = await PostsInstance.postControllerV1CreateOne(
        referenceType,
        referenceId,
        createPostDto,
      );

      return {
        ...posts,
        creator: {
          ...member!,
        },
      };
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { createPost };
