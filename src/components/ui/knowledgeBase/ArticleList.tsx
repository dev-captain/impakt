import { Divider, Text, VStack } from '@chakra-ui/react';

type ArticleProps = {
  title: string;
  id: string;
  category: string;
  releaseDate: string;
  description: string;
  content: string;
};

type Props = {
  articles: ArticleProps[];
  bgColor: string;
  category: {
    id: string;
    title: string;
  };
  setSelectedArticle: (article: ArticleProps) => void;
};

const ArticleList = ({ articles, bgColor, setSelectedArticle, category }: Props) => {
  return (
    <VStack w="full" spacing="24px">
      {articles
        .filter((article) => article.category === category.id)
        .map((article) => (
          <VStack
            m={0}
            w="full"
            p="32px"
            bgColor={bgColor}
            align="flex-start"
            borderRadius="28px"
            key={article.title}
          >
            <VStack align="flex-start">
              <Text
                key={article.title}
                textStyle="regular4"
                cursor="pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {article.title}
              </Text>
              <Text textStyle="regular2" opacity={0.6}>
                {article.releaseDate}
              </Text>
            </VStack>
            <Divider borderColor="glass.600" />
            <Text textStyle="regular3" opacity={0.6}>
              {article.description}
            </Text>
          </VStack>
        ))}
    </VStack>
  );
};

export default ArticleList;
