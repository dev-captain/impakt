export type Article = {
  id: number;
  slug: string;
  title: string;
  content: string;
  description: string;
  categoryId: Category;
  seo?: {
    keywords?: string[];
  };
};

export type Category = {
  id: number;
  slug: string;
  title: string;
};

// For Api Response
export interface Seo {
  keywords: string[];
}

export interface CategoryAttributes {
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Categories {
  data: { id: number; attributes: CategoryAttributes }[];
}

export interface Articles {
  id: number;
  attributes: ArticleAttributes;
}

export interface ArticleAttributes {
  title: string;
  description: string;
  content: string;
  seo: Seo;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  categories: Categories;
}
