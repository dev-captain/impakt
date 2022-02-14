import { Select } from '@chakra-ui/react';
import * as Types from 'store/types';

type CategorySelectBoxProps = {
  categories: Types.Category[];
  category: Types.Category;
  bgColor: string;
  setSelectedArticle: any;
  navigate: any;
  setCategory: (category: Types.Category) => any;
};

const CategorySelectBox = ({
  bgColor,
  categories,
  setSelectedArticle,
  navigate,
  setCategory,
  category,
}: CategorySelectBoxProps) => {
  return (
    <Select
      w="full"
      _selected={{}}
      borderWidth={0}
      bgColor={bgColor}
      placeholder="Select Category"
      onChange={(e) => {
        const selectedCategory = categories.find(
          (category_: any) => category_.slug === e.target.value,
        )!;
        if (selectedCategory) {
          setCategory(selectedCategory);
          setSelectedArticle(null);
          navigate(`/knowledge-base`);
        }
      }}
      value={category?.slug}
    >
      {categories?.map((_category: any) => (
        <option value={_category.slug} key={_category.id}>
          {_category.title}
        </option>
      ))}
    </Select>
  );
};

export default CategorySelectBox;
