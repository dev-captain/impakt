import { Text, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import seoData from '@/data/seoData';
import { layoutPadding } from '@/theme';
import { C } from '@/components';

const { title, meta } = seoData.blog;

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <C.HeroLayout align="flex-start" justify="flex-start" showNavbar showFooter>
      <C.Seo title={id || title} meta={[...meta, id ? { name: 'keywords', content: id } : {}]} />
      <VStack minH="60vh" px={layoutPadding}>
        <Text>Blog: {id}</Text>
        <Text onClick={() => navigate('nft-marketplace')}>Nft Market Place</Text>
      </VStack>
    </C.HeroLayout>
  );
};

export default BlogPage;
