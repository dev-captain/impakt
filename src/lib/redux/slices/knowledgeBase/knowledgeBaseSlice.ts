import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleBySlug } from './actions/fetchArticleBySlug';
import { fetchArticles } from './actions/fetchArticles';
import { fetchArticlesByCategory } from './actions/fetchArticlesByCategory';
import { fetchCategories } from './actions/fetchCategories';
import { Article, Category } from './types';

interface KnowledgeBaseInitialState {
  isKnowledgeBaseLoading: boolean;
  articles: Article[];
  categories: Category[];
  categoryArticles: {
    [categorySlug: string]: Article[];
  };
  selectedCategory: Category | undefined;
  selectedArticle: Article | undefined;
}

const knowledgeBaseInitialState = {
  isKnowledgeBaseLoading: false,
  articles: [],
  categories: [],
  categoryArticles: {},
  selectedArticle: undefined,
  selectedCategory: undefined,
};

const knowledgeBaseSlice = createSlice({
  name: 'knowledgeBase',
  initialState: knowledgeBaseInitialState as KnowledgeBaseInitialState,
  reducers: {
    updateSelectedCategory(
      state: KnowledgeBaseInitialState,
      action: PayloadAction<Category | undefined>,
    ) {
      state.selectedCategory = action.payload;
    },
    updateSelectedArticle(
      state: KnowledgeBaseInitialState,
      action: PayloadAction<Article | undefined>,
    ) {
      state.selectedArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isKnowledgeBaseLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isKnowledgeBaseLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.isKnowledgeBaseLoading = false;
        state.articles = [];
      });

    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isKnowledgeBaseLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isKnowledgeBaseLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isKnowledgeBaseLoading = false;
        state.categories = [];
      });

    builder
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.isKnowledgeBaseLoading = true;
      })
      .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
        state.isKnowledgeBaseLoading = false;
        state.categoryArticles = action.payload;
      })
      .addCase(fetchArticlesByCategory.rejected, (state) => {
        state.isKnowledgeBaseLoading = false;
        state.categoryArticles = {};
      });

    builder
      .addCase(fetchArticleBySlug.pending, (state) => {
        state.isKnowledgeBaseLoading = true;
      })
      .addCase(fetchArticleBySlug.fulfilled, (state, action) => {
        state.isKnowledgeBaseLoading = false;
        state.selectedArticle = action.payload.article as any;
        if (action.payload.category) {
          state.selectedCategory = action.payload.category as any;
        }
      })
      .addCase(fetchArticleBySlug.rejected, (state) => {
        state.isKnowledgeBaseLoading = false;
        state.selectedArticle = undefined;
        state.selectedCategory = undefined;
      });
  },
});

export const { updateSelectedCategory, updateSelectedArticle } = knowledgeBaseSlice.actions;
// eslint-disable-next-line import/prefer-default-export
export default knowledgeBaseSlice.reducer;
