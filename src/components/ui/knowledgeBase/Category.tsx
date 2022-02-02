import { Box, Text, VStack } from '@chakra-ui/react';

type CategoryProps = { id: string; title: string };

type Props = {
  activeCategory: CategoryProps;
  categories: CategoryProps[];
  onClick: (category: CategoryProps) => void;
};

const Category = ({ categories, activeCategory, onClick }: Props) => {
  return (
    <>
      <VStack pr="16px" align={{ base: 'center', md: 'flex-start' }} spacing="16px" w="full">
        {categories.map((category) => {
          return (
            <Text
              cursor="pointer"
              key={category.id}
              onClick={() => onClick(category)}
              textStyle={activeCategory.id === category.id ? 'bold3' : 'regular3'}
            >
              {category.title}
            </Text>
          );
        })}
      </VStack>
      <Box
        w="4px"
        top={0}
        h="250px"
        right={0}
        pos="absolute"
        borderRadius="10px"
        bgColor="crimson.200"
        d={{ base: 'none', md: 'flex' }}
      />
    </>
  );
};

export default Category;
