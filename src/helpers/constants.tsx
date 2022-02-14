export const KnowledgeBaseUrl = 'https://impakt-blog.herokuapp.com/api';

export const KnowledgeBaseEndpoints = {
  Articles: `${KnowledgeBaseUrl}/articles`,
  Categories: `${KnowledgeBaseUrl}/categories`,
  Article: (id: number) => `${KnowledgeBaseUrl}/articles/${id}?populate=categories`,
  ArticleBySlug: (articleSlug: string) =>
    `${KnowledgeBaseUrl}/articles?populate=categories&filters[slug][$eq]=${articleSlug}&populate=categories`,
  ArticlesByCategory: (categorySlug: string) =>
    `${KnowledgeBaseUrl}/articles?populate=categories&filters[categories][slug][$eq]=${categorySlug}`,
};

export default {};
