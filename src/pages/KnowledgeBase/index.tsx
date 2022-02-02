import { GridItem, Select, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Seo from 'components/core/Seo';
import HeroLayout from 'components/layouts/HeroLayout';
import Article from 'components/ui/knowledgeBase/Article';
import ArticleList from 'components/ui/knowledgeBase/ArticleList';
import Category from 'components/ui/knowledgeBase/Category';
import { Articles, Categories } from 'data';
import seoData from 'data/seoData';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { layoutPadding } from 'theme';

const { title, meta } = seoData.blog;

const KnowledgeBasePage = () => {
  const { article } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    const articleToSelect = Articles.find((_article) => _article.id === article);
    if (articleToSelect) {
      setSelectedArticle(articleToSelect);
      setCategory(Categories.find((_category) => _category.id === articleToSelect.category)!);
    }
  }, [article]);

  return (
    <HeroLayout hideBlur align="flex-start" justify="flex-start" showNavbar showFooter>
      <Seo
        title={article || `${title} - ${category.title}`}
        meta={[...meta, article ? { name: 'keywords', content: article } : {}]}
      />
      <VStack minH="60vh" px={layoutPadding} w="full" color={textColor}>
        <Text
          textStyle={{ base: 'bold5', md: 'bold7' }}
          textAlign="center"
          pb={{ base: '24px' }}
          display={{ base: 'none', md: 'flex' }}
        >
          Introducing Impakt: Knowledge Base
        </Text>
        <VStack display={{ base: 'flex', md: 'none' }} spacing="24px" w="full">
          <Select
            w="full"
            placeholder="Select option"
            bgColor={bgColor}
            _selected={{}}
            borderWidth={0}
            onChange={(e) => {
              const selectedCategory = Categories.find(
                (_category) => _category.id === e.target.value,
              )!;
              if (selectedCategory) {
                setCategory(selectedCategory);
              }
            }}
            value={category.id}
          >
            {Categories.map((_category) => (
              <option value={_category.id} key={_category.id}>
                {_category.title}
              </option>
            ))}
          </Select>
          <Text textStyle={{ base: 'bold5', md: 'bold7' }} textAlign="center">
            Introducing Impakt: Knowledge Base
          </Text>
        </VStack>
        <SimpleGrid columns={4} w="full" p={0} m={0}>
          <GridItem
            pos="relative"
            overflow="hidden"
            colSpan={{ base: 4, md: 1 }}
            display={{ base: 'none', md: 'flex' }}
          >
            <Category
              onClick={(_category) => {
                setCategory(_category);
                setSelectedArticle(null);
                navigate(`/knowledge-base`);
              }}
              categories={Categories}
              activeCategory={category}
            />
          </GridItem>
          <GridItem
            w="full"
            colSpan={{ base: 4, md: 3 }}
            pl={{ base: '0px', md: '80px' }}
            pr={{ base: '0px', md: '0px' }}
          >
            <VStack align="flex-start" spacing="24px" w="full">
              {!selectedArticle && (
                <>
                  <Text textStyle="regular5" d={{ base: 'none', md: 'flex' }}>
                    {category.title}
                  </Text>
                  <ArticleList
                    bgColor={bgColor}
                    category={category}
                    articles={Articles}
                    setSelectedArticle={(data) => {
                      setSelectedArticle(data);
                      navigate(`/knowledge-base/${data.id}`);
                    }}
                  />
                </>
              )}
              {selectedArticle && (
                <Article
                  article={selectedArticle}
                  category={category}
                  bgColor={bgColor}
                  textColor={textColor}
                  setCategory={setCategory}
                  setSelectedArticle={() => {
                    setSelectedArticle(null);
                    navigate(`/knowledge-base`);
                  }}
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
