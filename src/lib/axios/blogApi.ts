import axios from 'axios';

export const KnowledgeBaseUrl = 'https://impakt-blog.herokuapp.com/api';

export const KnowledgeBaseEndpoints = {
  Articles: `/articles`,
  Categories: `/categories`,
  Article: (id: number) => `/articles/${id}?populate=categories`,
  ArticleBySlug: (articleSlug: string) =>
    `/articles?populate=categories&filters[slug][$eq]=${articleSlug}&populate=categories`,
  ArticlesByCategory: (categorySlug: string) =>
    `/articles?populate=categories&filters[categories][slug][$eq]=${categorySlug}`,
  OnboardingCode: (code: string) =>
    `/onboarding-codes?filters[code][$eq]=${code}&filters[isActive][$eq]=true`,
};

const blogApi = axios.create({ baseURL: KnowledgeBaseUrl });

export default blogApi;
