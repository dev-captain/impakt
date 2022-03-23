import { Flex, GridItem, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Images from 'assets/images';

type Props = {
  date: string;
  name: string;
  order: number;
  points: number;
  community: string;
  showStar?: boolean;
  isSmallView?: boolean;
};

const LeaderBoardRow = ({ name, date, order, points, showStar, community, isSmallView }: Props) => {
  if (isSmallView) {
    return (
      <Flex justifyContent="space-around">
        <Flex justify="space-between" minH="65px" w="full" align="center" whiteSpace="nowrap">
          <Text w="60px" opacity="0.3" textAlign="left" textStyle="regular4" pl="8px">
            #{order}
          </Text>
          <HStack px="8px" spacing="14px" justify="flex-start" align="center" w="210px">
            {showStar && <Image src={Images.star} w="16.63" h="15px" objectFit="contain" />}
            <Text textStyle="regular4" pl={showStar ? 0 : '22px'} isTruncated textAlign="left">
              {name}
            </Text>
          </HStack>
          <Text
            pr="8px"
            w="250px"
            isTruncated
            align="center"
            textAlign="left"
            textStyle="regular4"
            color="electric.250"
          >
            {community}
          </Text>
          <Text
            pr="8px"
            w="210px"
            opacity={0.3}
            align="center"
            textAlign="left"
            textStyle="regular4"
          >
            {date}
          </Text>
          <Text textStyle="regular4" color="red.300" align="center" pr="8px" w="210px">
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
        <HStack spacing="14px" justify="flex-start" align="center">
          {showStar && <Image src={Images.star} w="20px" h="19px" objectFit="contain" />}
          <Text textStyle="bold4" pl={showStar ? 0 : '42px'}>
            {name}
          </Text>
        </HStack>
      </GridItem>
      <GridItem colSpan={2} w="200px">
        <Text textStyle="regular4" color="electric.250" align="left" noOfLines={1}>
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
