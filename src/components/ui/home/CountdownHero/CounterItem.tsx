import { GridItem, VStack, Text } from "@chakra-ui/react";

const CounterItem = ({ value, title }: { value: number; title: string }) => {
  const colSpan = {
    base: 4,
    md: 2,
    lg: 1,
  };

  return (
    <GridItem colSpan={colSpan}>
      <VStack>
        <Text textStyle={"counterNumber"}>{value}</Text>
        <Text textStyle={"counterText"}>{title}</Text>
      </VStack>
    </GridItem>
  );
};

export default CounterItem;
