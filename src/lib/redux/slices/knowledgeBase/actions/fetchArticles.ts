import { createAsyncThunk } from '@reduxjs/toolkit';
import blogApi, { KnowledgeBaseEndpoints } from '../../../../axios/blogApi';
import { Article } from '../types';

const fetchArticles = createAsyncThunk(
  'knowledgeBase/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      const articlesRes = await blogApi.get(KnowledgeBaseEndpoints.Articles);

      const articles = articlesRes.data.data.map(
        (article: { id: number; attributes: Article }) => ({
          ...article.attributes,
          id: article.id,
        }),
      ) as Article[];

      return articles;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchArticles };
