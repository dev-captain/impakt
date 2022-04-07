import { Flex, GridItem, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Images from 'assets/images';

type Props = {
  name: string;
  order: number;
  score: number;
  showStar?: boolean;
  isSmallView?: boolean;
};

const LeaderBoardRow = ({ name, order, score, showStar, isSmallView }: Props) => {
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
          {/* <Text
            pr="8px"
            w="210px"
            opacity={0.3}
            align="center"
            textAlign="left"
            textStyle="regular4"
          >
            {date}
          </Text> */}
          <Text textStyle="regular4" color="red.300" align="center" pr="8px" w="80px">
            {score}
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <SimpleGrid columns={9} paddingY="16px">
      <GridItem colSpan={3} w="100px" marginLeft={{ base: '0', md: '150px' }}>
        <Text textStyle="regular4" opacity="0.3">
          #{order}
        </Text>
      </GridItem>
      <GridItem colSpan={3} w="300px" marginLeft={{ base: '0', md: '100px' }}>
        <HStack spacing="14px" justify="flex-start" align="center">
          {showStar && <Image src={Images.star} w="20px" h="19px" objectFit="contain" />}
          <Text textStyle="bold4" pl={showStar ? 0 : '42px'}>
            {name}
          </Text>
        </HStack>
      </GridItem>
      {/* <GridItem colSpan={2}>
        <Text textStyle="regular4" opacity={0.3} align="center">
          {date}
        </Text>
      </GridItem> */}
      <GridItem colSpan={3} marginRight={{ base: '0', md: '150px' }}>
        <Text textStyle="bold4" color="red.300" align="right">
          {score}
        </Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default LeaderBoardRow;
