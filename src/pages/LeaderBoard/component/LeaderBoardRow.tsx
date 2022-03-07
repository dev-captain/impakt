import { GridItem, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Images from 'assets/images';

const LeaderBoardRow = ({
  name,
  date,
  order,
  points,
  showStar,
  community,
}: {
  date: string;
  name: string;
  order: number;
  points: string;
  community: string;
  showStar?: boolean;
}) => {
  return (
    <SimpleGrid columns={9} paddingY="16px">
      <GridItem colSpan={1} w="100px">
        <Text textStyle="regular4" opacity="0.3">
          #{order}
        </Text>
      </GridItem>
      <GridItem colSpan={2} w="200px">
        <HStack spacing="14px" justify="center" align="center">
          {showStar && <Image src={Images.star} w="20px" h="19px" />}
          <Text textStyle="bold4" pl={showStar ? 0 : '42px'}>
            {name}
          </Text>
        </HStack>
      </GridItem>
      <GridItem colSpan={2} w="200px">
        <Text textStyle="regular4" color="electric.250" align="center">
          {community}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text textStyle="regular4" opacity={0.3} align="center">
          {date}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text textStyle="regular4" color="red.300" align="center">
          {points}
        </Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default LeaderBoardRow;
