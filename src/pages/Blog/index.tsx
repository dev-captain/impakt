import { Text, VStack } from '@chakra-ui/react';
import Seo from 'components/core/Seo';
import HeroLayout from 'components/layouts/HeroLayout';
import seoData from 'data/seoData';
import { useNavigate, useParams } from 'react-router-dom';
import { layoutPadding } from 'theme';

const { title, meta } = seoData.blog;

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <HeroLayout align="flex-start" justify="flex-start" showNavbar showFooter>
      <Seo title={id || title} meta={[...meta, id ? { name: 'keywords', content: id } : {}]} />
      <VStack minH="60vh" px={layoutPadding}>
        <Text>Blog: {id}</Text>
        <Text onClick={() => navigate('nft-marketplace')}>Nft Market Place</Text>
      </VStack>
    </HeroLayout>
  );
};

export default BlogPage;
