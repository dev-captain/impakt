import { createAsyncThunk } from '@reduxjs/toolkit';
import blogApi, { KnowledgeBaseEndpoints } from '../../../../axios/blogApi';
import { Article } from '../types';

const fetchArticlesByCategory = createAsyncThunk(
  'knowledgeBase/fetchArticlesByCategory',
  async (slug: string, { rejectWithValue }) => {
    try {
      const url =
        slug === 'all-resources'
          ? KnowledgeBaseEndpoints.Articles
          : KnowledgeBaseEndpoints.ArticlesByCategory(slug);

      const articlesByCategoryRes = await blogApi.get(url);

      const articles = articlesByCategoryRes.data.data.map(
        (article: { id: number; attributes: Article }) => ({
          ...article.attributes,
          id: article.id,
        }),
      ) as Article[];

      return { [slug]: articles };
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchArticlesByCategory };
