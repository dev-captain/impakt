import { createAsyncThunk } from '@reduxjs/toolkit';
import blogApi, { KnowledgeBaseEndpoints } from '../../../../axios/blogApi';
import { Articles } from '../types';

const fetchArticleBySlug = createAsyncThunk(
  'knowledgeBase/fetchArticleBySlug',
  async (slug: string, { rejectWithValue }) => {
    try {
      const articleBySlugRes = await blogApi.get(KnowledgeBaseEndpoints.ArticleBySlug(slug));

      const data = articleBySlugRes.data as Articles[];
      const article = data[0].attributes;
      const category = article.categories.data[0]?.attributes;

      return { article, category };
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchArticleBySlug };
