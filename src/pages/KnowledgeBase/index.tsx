import { GridItem, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Seo from 'components/core/Seo';
import HeroLayout from 'components/layouts/HeroLayout';
import Article from 'components/ui/knowledgeBase/Article';
import ArticleList from 'components/ui/knowledgeBase/ArticleList';
import Category from 'components/ui/knowledgeBase/Category';
import CategorySelectBox from 'components/ui/knowledgeBase/CategorySelectBox';
import seoData from 'data/seoData';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { dispatch, RootState } from 'store';
import * as Types from 'store/types';
import { layoutPadding } from 'theme';

const { title, meta } = seoData.blog;

const KnowledgeBasePage = () => {
  const { article } = useParams();
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.100', 'gray.900');
  const bgColor = useColorModeValue('gray.800', 'glass.300');
  const { categories, categoryArticles, selectedArticle, selectedCategory } = useSelector(
    (state: RootState) => state.knowledgeBase,
  );

  useEffect(() => {
    if (article) {
      dispatch.knowledgeBase.fetchArticleBySlug(article);
    }
  }, [article]);

  useEffect(() => {
    dispatch.knowledgeBase.fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      dispatch.knowledgeBase.setSelectedCategory(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch.knowledgeBase.fetchArticlesByCategory(selectedCategory?.slug);
    }
  }, [selectedCategory?.slug]);

  return (
    <HeroLayout hideBlur align="flex-start" justify="flex-start" showNavbar showFooter>
      <Seo
        title={article || `${title} - ${selectedCategory?.title}`}
        meta={[...meta, article ? { name: 'keywords', content: article } : {}]}
      />
      <VStack minH="60vh" px={layoutPadding} w="full" color={textColor}>
        <Text
          pt="30px"
          textAlign="center"
          pb={{ base: '24px', md: '40px' }}
          display={{ base: 'none', md: 'flex' }}
          textStyle={{ base: 'bold5', md: 'bold7' }}
        >
          Introducing Impakt: Knowledge Base
        </Text>
        <VStack display={{ base: 'flex', md: 'none' }} spacing="24px" w="full" pt="20px">
          <CategorySelectBox
            bgColor={bgColor}
            navigate={navigate}
            categories={categories}
            category={selectedCategory || categories?.[0]}
            setCategory={dispatch.knowledgeBase.setSelectedCategory}
            setSelectedArticle={dispatch.knowledgeBase.setSelectedArticle}
          />
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
                dispatch.knowledgeBase.setSelectedArticle(undefined);
                dispatch.knowledgeBase.setSelectedCategory(_category);
                navigate(`/knowledge-base`);
              }}
              categories={categories}
              activeCategory={selectedCategory || categories[0]}
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
                    {selectedCategory?.title}
                  </Text>
                  <ArticleList
                    bgColor={bgColor}
                    articles={
                      (categoryArticles?.[selectedCategory?.slug!] as Types.Article[]) || []
                    }
                    setSelectedArticle={(data) => {
                      dispatch.knowledgeBase.setSelectedArticle(data);
                      navigate(`/knowledge-base/${data.slug}`);
                    }}
                  />
                </>
              )}
              {selectedArticle && (
                <Article
                  article={selectedArticle!}
                  category={selectedCategory!}
                  bgColor={bgColor}
                  textColor={textColor}
                  setSelectedArticle={() => {
                    dispatch.knowledgeBase.setSelectedArticle(undefined);
                    navigate(`/knowledge-base`);
                  }}
                  setCategory={dispatch.knowledgeBase.setSelectedCategory}
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
