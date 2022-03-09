import { GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Images from 'assets/images';

const LeaderBoardRow = ({
  name,
  date,
  order,
  points,
  showStar,
  community,
  isSmallView,
}: {
  isSmallView?: boolean;
  date: string;
  name: string;
  order: number;
  points: string;
  community: string;
  showStar?: boolean;
}) => {
  if (isSmallView) {
    return (
      <VStack minH="65px" w="full" align="flex-start">
        <HStack minH="65px" w="full" align="center" justify="center">
          <Text
            w="33px"
            opacity="0.3"
            textAlign="left"
            textStyle="regular3"
            pl={showStar ? 0 : '8px'}
          >
            #{order}
          </Text>
          <HStack spacing="14px" justify="center" align="center" maxW="120px">
            {showStar && <Image src={Images.star} w="12.63px" h="12px" />}
            <Text textStyle="regular3" pl={showStar ? 0 : '22px'} isTruncated>
              {name}
            </Text>
          </HStack>
          <Text textStyle="regular3" color="electric.250" align="center">
            {community}
          </Text>
          <Text textStyle="regular3" opacity={0.3} align="center">
            {date}
          </Text>
          <Text textStyle="regular3" color="red.300" align="center">
            {points}
          </Text>
        </HStack>
      </VStack>
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
