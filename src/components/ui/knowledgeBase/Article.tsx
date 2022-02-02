import { VStack, Text, Divider } from '@chakra-ui/react';
import Breadcrumb from './Breadcrumb';

type Props = {
  article: {
    title: string;
    id: string;
    category: string;
    releaseDate: string;
    description: string;
    content: string;
  };
  category: {
    id: string;
    title: string;
  };
  bgColor: string;
  textColor: string;
};

const Article = ({ article, category, bgColor, textColor }: Props) => {
  return (
    <VStack align="flex-start" color={textColor}>
      <Breadcrumb data={[category.title, article.title]} />
      <VStack
        bgColor={bgColor || 'glass.700'}
        w="full"
        align="flex-start"
        borderRadius="28px"
        minH="60vh"
        p="32px"
        spacing="16px"
      >
        <VStack align="flex-start" spacing={0}>
          <Text textStyle="regular4">{article.title}</Text>
          <Text textStyle="regular2">{article.releaseDate}</Text>
        </VStack>
        <VStack spacing="33px">
          <Divider />
          <VStack>
            <Text>{article.description}</Text>
            <Text>{article.description}</Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Article;
