import { Helmet } from 'react-helmet-async';
import seoData from 'data/seoData';

type Props = {
  lang?: string;
  title?: string;
  meta?: { name?: string | 'description' | 'keywords'; property?: string; content?: string }[];
};

const data = seoData.common;

// eslint-disable-next-line import/prefer-default-export
export const Seo = ({ title = data.title, meta = data.meta, lang = data.lang }: Props) => {
  return (
    <Helmet title={title} meta={meta} htmlAttributes={{ lang }} titleTemplate="%s | impakt.com">
      <link rel="canonical" href="https://www.impakt.com/" />
    </Helmet>
  );
};
