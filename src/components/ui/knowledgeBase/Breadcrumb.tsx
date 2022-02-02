import { HStack, Text } from '@chakra-ui/react';

type Props = {
  data: string[];
};

const Breadcrumb = ({ data }: Props) => {
  return (
    <HStack
      textStyle="bold4"
      align="center"
      justify="center"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <HStack>
        <Text>{data[0]}</Text>
        <Text>{'>'}</Text>
      </HStack>
      <Text>{data[1]}</Text>
    </HStack>
  );
};

export default Breadcrumb;
