import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsInstance } from '../../../../impakt-dev-api-client/init';
import { RootState } from '../../../store';

const fetchPostDetail = createAsyncThunk(
  'posts/fetchPostDetail',
  async (
    {
      referenceType,
      referenceId,
      postId,
    }: { referenceType: 'Group' | 'Users'; referenceId: number; postId: number },
    { rejectWithValue, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as RootState;

      if (!isLogin) {
        return Promise.reject(new Error('Please Sign In first to continue'));
      }

      const posts = await PostsInstance.postControllerV1GetOne(referenceType, referenceId, postId);

      return posts;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchPostDetail };
