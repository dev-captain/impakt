import { createAsyncThunk } from '@reduxjs/toolkit';
import blogApi, { KnowledgeBaseEndpoints } from '../../../../axios/blogApi';
import { Article, Category } from '../types';

const fetchCategories = createAsyncThunk(
  'knowledgeBase/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categoriesRes = await blogApi.get(KnowledgeBaseEndpoints.Categories);

      const categories = categoriesRes.data.data.map(
        (category: { id: number; attributes: Category }) => ({
          ...category.attributes,
          id: category.id,
        }),
      ) as Article[];

      return categories;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchCategories };
