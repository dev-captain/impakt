import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (
    { referenceType, referenceId }: { referenceType: 'Group' | 'Users'; referenceId: number },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const posts = await PostsInstance.postControllerV1GetMany(referenceType, referenceId);

      return posts;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchPosts };
