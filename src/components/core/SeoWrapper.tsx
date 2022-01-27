import { Helmet } from 'react-helmet';
import seoData from 'data/seoData';

type Props = {
  lang?: string;
  title?: string;
  meta?: { name?: string | 'description' | 'keywords'; property?: string; content?: string }[];
};

const data = seoData.common;

const Seo = ({ title = data.title, meta = data.meta, lang = data.lang }: Props) => {
  return (
    <Helmet titleTemplate="%s | impakt.com" title={title} meta={meta} htmlAttributes={{ lang }} />
  );
};

export default Seo;
