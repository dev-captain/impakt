import { GridItem, VStack, Text } from '@chakra-ui/react';

type CounterItemProps = {
  value: number;
  title: string;
};

const CounterItem = ({ value, title }: CounterItemProps) => {
  const colSpan = {
    base: 4,
    md: 2,
    lg: 1,
  };

  return (
    <GridItem colSpan={colSpan}>
      <VStack>
        <Text textStyle="counterNumber">{value}</Text>
        <Text textStyle="counterText">{title}</Text>
      </VStack>
    </GridItem>
  );
};

export default CounterItem;
