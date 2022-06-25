import { Divider, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { Article } from '../../../lib/redux/slices/knowledgeBase/types';

type Props = {
  articles: Article[];
  bgColor: string;
  setSelectedArticle: (article: Article) => void;
};

const ArticleList = ({ articles, bgColor, setSelectedArticle }: Props) => {
  return (
    <VStack w="full" spacing="24px">
      {articles.map((article) => (
        <VStack
          m={0}
          w="full"
          p="32px"
          cursor="pointer"
          bgColor={bgColor}
          align="flex-start"
          borderRadius="28px"
          key={article.title}
          onClick={() => setSelectedArticle(article)}
        >
          <VStack align="flex-start">
            <Text key={article.title} textStyle="regular4">
              {article.title}
            </Text>
            <Text textStyle="regular2" opacity={0.6}>
              {
                // @ts-ignore
                dayjs(article.publishedAt).format('MMM DD, YYYY').toString()
              }
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
