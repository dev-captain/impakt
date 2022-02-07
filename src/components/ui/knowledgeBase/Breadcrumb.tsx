import { HStack, Text } from '@chakra-ui/react';
import * as Types from 'store/types';

type Props = {
  data: string[];
  category: Types.Category;
  onClickCategory: (category: Types.Category) => void;
};

const Breadcrumb = ({ data, onClickCategory, category }: Props) => {
  return (
    <HStack
      textStyle={{ base: 'bold3', md: 'bold4' }}
      align="center"
      justify={{ base: 'center', md: 'flex-start' }}
      w="full"
    >
      <HStack>
        <Text cursor="pointer" color="glass.400" onClick={() => onClickCategory(category)}>
          {data[0]}
        </Text>
        <Text>{'>'}</Text>
      </HStack>
      <Text>{data[1]}</Text>
    </HStack>
  );
};

export default Breadcrumb;
