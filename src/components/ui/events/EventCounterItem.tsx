import { GridItem, Text, VStack } from '@chakra-ui/react';

const EventCounterItem = ({ value, title }: { value: number; title: string }) => {
  const colSpan = {
    base: 4,
    md: 2,
    lg: 1,
  };

  return (
    <GridItem colSpan={colSpan}>
      <VStack>
        <Text textStyle="black10" fontWeight="300">
          {value}
        </Text>
        <Text textStyle="regular5" fontWeight="300">
          {title}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default EventCounterItem;
