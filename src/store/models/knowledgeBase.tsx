import { createModel } from '@rematch/core';
import { KnowledgeBaseEndpoints } from 'helpers/constants';
import { Article, Articles, Category } from 'store/types';
import { RootModel } from '.';

interface InitialState {
  articles: Article[];
  categories: Category[];
  categoryArticles: {
    [categorySlug: string]: Article[];
  };
  selectedCategory: Category | undefined;
  selectedArticle: Article | undefined;
}

const knowledgeBase = createModel<RootModel>()({
  state: {
    articles: [],
    categories: [],
    categoryArticles: {},
    selectedArticle: undefined,
    selectedCategory: undefined,
  } as InitialState,
  reducers: {
    setCategories(state: InitialState, categories: Category[]) {
      return { ...state, categories };
    },
    setArticles(state: InitialState, articles: Article[]) {
      return { ...state, articles };
    },
    setCategoryArticles(
      state: InitialState,
      categoryArticles: { [categorySlug: string]: Article[] },
    ) {
      return { ...state, categoryArticles: { ...state.categoryArticles, ...categoryArticles } };
    },
    setSelectedCategory: (state: InitialState, category: Category | undefined) => {
      return { ...state, selectedCategory: category };
    },
    setSelectedArticle: (state: InitialState, article: Article | undefined) => {
      return { ...state, selectedArticle: article };
    },
  },
  effects: {
    async fetchArticles() {
      const response = await fetch(`${KnowledgeBaseEndpoints.Articles}`);
      const { data } = await response.json();
      const articles = data.map((article: { id: number; attributes: Article }) => ({
        ...article.attributes,
        id: article.id,
      })) as Article[];

      this.setArticles(articles);
    },

    async fetchCategories() {
      const response = await fetch(`${KnowledgeBaseEndpoints.Categories}`);
      const { data } = await response.json();
      const categories = data.map((category: { id: number; attributes: Category }) => ({
        ...category.attributes,
        id: category.id,
      })) as Article[];

      this.setCategories(categories);
    },

    async fetchArticlesByCategory(slug: string) {
      const url =
        slug === 'all-resources'
          ? KnowledgeBaseEndpoints.Articles
          : KnowledgeBaseEndpoints.ArticlesByCategory(slug);

      const response = await fetch(url);
      const { data } = await response.json();
      const articles = data.map((article: { id: number; attributes: Article }) => ({
        ...article.attributes,
        id: article.id,
      })) as Article[];

      this.setCategoryArticles({ [slug]: articles });
    },

    async fetchArticleBySlug(slug: string) {
      const response = await fetch(`${KnowledgeBaseEndpoints.ArticleBySlug(slug)}`);
      const { data } = (await response.json()) as { data: Articles[] };
      const article = data[0].attributes;
      const category = article.categories.data[0]?.attributes;

      this.setSelectedArticle(article);
      if (category) {
        this.setSelectedCategory(category);
      }
    },
  },
});

export default knowledgeBase;
