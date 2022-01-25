import { Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { useParams } from 'react-router-dom';
import { layoutPadding } from 'theme';

const BlogPage = () => {
  const { id } = useParams();

  return (
    <HeroLayout hideBlur align="flex-start" justify="flex-start" showNavbar showFooter>
      <VStack minH="60vh" px={layoutPadding}>
        <Text>Blog: {id}</Text>
      </VStack>
    </HeroLayout>
  );
};

export default BlogPage;
