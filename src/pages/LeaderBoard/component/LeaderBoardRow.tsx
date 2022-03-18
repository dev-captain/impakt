import { Box, Flex, GridItem, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Images from 'assets/images';

type Props = {
  date: string;
  name: string;
  order: number;
  points: string;
  community: string;
  showStar?: boolean;
  isSmallView?: boolean;
};

const LeaderBoardRow = ({ name, date, order, points, showStar, community, isSmallView }: Props) => {
  if (isSmallView) {
    return (
      <Flex justifyContent="space-around">
        <Flex justify="space-between" minH="65px" w="full" align="center">
          <Text w="60px" opacity="0.3" textAlign="left" textStyle="regular4" pl="8px">
            #{order}
          </Text>
          <HStack px="8px" spacing="14px" justify="center" align="center" maxW="210px">
            {showStar && <Image src={Images.star} w="16.63" h="15px" objectFit="contain" />}
            <Text textStyle="regular4" pl={showStar ? 0 : '22px'} isTruncated>
              {name}
            </Text>
          </HStack>
          <Text textStyle="regular4" color="electric.250" align="center" pr="8px">
            {community}
          </Text>
          <Text textStyle="regular4" opacity={0.3} align="center" pr="8px">
            {date}
          </Text>
          <Text textStyle="regular4" color="red.300" align="center" pr="8px">
            {points}
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <SimpleGrid columns={9} paddingY="16px">
      <GridItem colSpan={1} w="100px">
        <Text textStyle="regular4" opacity="0.3">
          #{order}
        </Text>
      </GridItem>
      <GridItem colSpan={2} w="200px">
        <HStack spacing="14px" justify="center" align="center">
          {showStar && <Box src={Images.star} w="20px" h="19px" />}
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
