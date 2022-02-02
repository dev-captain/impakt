import { GridItem, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Seo from 'components/core/Seo';
import HeroLayout from 'components/layouts/HeroLayout';
import Article from 'components/ui/knowledgeBase/Article';
import ArticleList from 'components/ui/knowledgeBase/ArticleList';
import Category from 'components/ui/knowledgeBase/Category';
import seoData from 'data/seoData';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { layoutPadding } from 'theme';

const { title, meta } = seoData.blog;

const KnowledgeBasePage = () => {
  const { id } = useParams();
  const textColor = useColorModeValue('gray.100', 'gray.900');
  const bgColor = useColorModeValue('gray.800', 'glass.300');
  const [category, setCategory] = useState<{ title: string; id: string }>(Categories[0]);
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    id: string;
    category: string;
    releaseDate: string;
    description: string;
    content: string;
  } | null>(null);

  return (
    <HeroLayout hideBlur align="flex-start" justify="flex-start" showNavbar showFooter>
      <Seo title={id || title} meta={[...meta, id ? { name: 'keywords', content: id } : {}]} />
      <VStack minH="60vh" px={layoutPadding} w="full" color={textColor}>
        <SimpleGrid columns={4} w="full">
          <GridItem pos="relative" overflow="hidden" colSpan={{ base: 4, md: 1 }}>
            <Category
              onClick={(_category) => {
                setCategory(_category);
                setSelectedArticle(null);
              }}
              categories={Categories}
              activeCategory={category}
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 4, md: 3 }}
            pl={{ base: '16px', md: '80px' }}
            pr={{ base: '16px', md: '0px' }}
            w="full"
          >
            <VStack align="flex-start" spacing="24px" w="full">
              {!selectedArticle && (
                <>
                  <Text textStyle="regular5">{category.title}</Text>
                  <ArticleList
                    bgColor={bgColor}
                    category={category}
                    articles={Articles}
                    setSelectedArticle={setSelectedArticle}
                  />
                </>
              )}
              {selectedArticle && (
                <Article
                  article={selectedArticle}
                  category={category}
                  bgColor={bgColor}
                  textColor={textColor}
                />
              )}
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default KnowledgeBasePage;

const Categories = [
  { id: 'all-resources', title: 'All Resources' },
  { id: 'the-game', title: 'The Game' },
  { id: 'tokens', title: 'Tokens' },
  { id: 'announcements', title: 'Announcements' },
  { id: 'privacy-policy', title: 'Privacy Policy' },
  { id: 'terms-of-use', title: 'Terms of Use' },
];

const Articles = [
  {
    id: '',
    category: 'all-resources',
    title: 'Title of the Article #1',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: '',
    category: 'all-resources',
    title: 'Title of the Article #2',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: '',
    category: 'all-resources',
    title: 'Title of the Article #3',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: '',
    category: 'announcements',
    title: 'Title of the Article #4',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: '',
    category: 'tokens',
    title: 'Title of the Article #5',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
  {
    id: '',
    category: 'the-game',
    title: 'Title of the Article #6',
    releaseDate: 'Jan 30, 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper gravida magna id mattis. Praesent fermentum risus ut ex rutrum elementum fermentum risus ut ex rutrum elementum.  fermentum risus ut ex rutrum elementum. . ',
    content: '',
  },
];
