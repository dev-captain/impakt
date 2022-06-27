import { VStack, Text, Divider } from '@chakra-ui/react';
import MarkdownPreview from '@uiw/react-markdown-preview';

import * as Types from '../../../lib/redux/slices/knowledgeBase/types';
import Breadcrumb from './Breadcrumb';

type Props = {
  article: Types.Article;
  category: Types.Category;
  bgColor: string;
  textColor: string;
  setCategory: any;
  setSelectedArticle: any;
};

const Article = ({
  article,
  category,
  bgColor,
  textColor,
  setSelectedArticle,
  setCategory,
}: Props) => {
  return (
    <VStack align="flex-start" color={textColor} minW="full">
      <Breadcrumb
        category={category}
        data={[category?.title, article?.title]}
        onClickCategory={(_category) => {
          setCategory(_category);
          setSelectedArticle(undefined);
        }}
      />
      <VStack
        bgColor={bgColor || 'glass.700'}
        w="full"
        align="flex-start"
        borderRadius="28px"
        minH="60vh"
        p="32px"
        spacing="16px"
      >
        <VStack align="flex-start" spacing={0} w="full">
          <Text textStyle="regular4">{article?.title}</Text>
          <Text textStyle="regular2">
            {
              // @ts-ignore
              article?.releaseDate
            }
          </Text>
        </VStack>
        <VStack spacing="33px">
          <Divider />
          <VStack align="flex-start" w="100%">
            <MarkdownPreview source={article?.content} />
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Article;
