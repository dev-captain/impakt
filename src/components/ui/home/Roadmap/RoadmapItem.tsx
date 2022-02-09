import {
  Box,
  Circle,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export type dataProps = {
  height: string;
  title: string;
  items: {
    title: string;
    isDone: boolean;
  }[];
  lineHeight: string;
  isCompleted: boolean;
};

export const ItemLabel = ({ title, bgColor }: { title: string; bgColor: string | null }) => {
  return (
    <Box
      minH="48px"
      borderRadius="8px"
      p="12px 24px 12px 22px"
      bgGradient={!bgColor ? 'linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)' : ''}
      bgColor={bgColor || 'transparent'}
      fontWeight="600"
      fontSize="14px"
      lineHeight="24px"
      color="white"
    >
      {title}
    </Box>
  );
};

export const ItemGraphics = ({
  lineHeight,
  isCompleted,
}: {
  lineHeight: string;
  isCompleted: boolean;
}) => {
  const isLight = useColorModeValue(false, true);

  return (
    <VStack spacing="0">
      <Circle
        mt="6px"
        size="12px"
        boxShadow="0px 1px 20px 2px rgba(217, 14, 232, 0.41);"
        background="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
      />
      <VStack>
        <Image
          src={!isLight ? 'assets/images/roadmap-line.png' : 'assets/images/roadmap-line-light.png'}
          h={lineHeight}
          objectFit="fill"
        />
        <Image
          src={
            isCompleted
              ? 'assets/images/roadmap-circle-tick.png'
              : 'assets/images/roadmap-circle.png'
          }
          w="80px"
          h="80px"
          pos="absolute"
          bottom={-8}
          zIndex={100}
        />
      </VStack>
    </VStack>
  );
};

const RoadmapItem = ({
  data,
  type = 'horizontal',
}: {
  data: dataProps;
  type?: 'horizontal' | 'vertical';
}) => {
  const { height, title, isCompleted, items, lineHeight } = data;
  if (type === 'vertical') {
    return (
      <VStack align="flex-start" h="200px" maxW="380px">
        <VStack pb="16px">
          <ItemLabel title={title} bgColor={isCompleted ? null : 'glass.500'} />
        </VStack>
        <HStack>
          <UnorderedList>
            <HStack align="flex-start" pos="absolute" w="full" left="-43px">
              <ItemGraphics lineHeight={lineHeight} isCompleted={isCompleted} />
            </HStack>
            {items?.map((item) => (
              <ListItem textStyle="regular3" key={item.title}>
                <HStack spacing="8px" align="flex-start">
                  <Text w="200px" textStyle="semiBold3">
                    {item.title}
                  </Text>
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
        </HStack>
      </VStack>
    );
  }

  return (
    <VStack align="flex-start" maxH={height}>
      <ItemLabel title={title} bgColor={isCompleted ? null : 'glass.500'} />
      <HStack align="flex-start" justify="flex-start" spacing="24px" pt="24px">
        <ItemGraphics lineHeight={lineHeight} isCompleted={isCompleted} />
        <VStack maxW="200px">
          <UnorderedList>
            {items?.map((item) => (
              <ListItem textStyle="regular3" key={item.title}>
                <HStack spacing="8px" align="flex-start">
                  <Text textStyle="semiBold3">{item.title}</Text>
                  {item.isDone && (
                    <Image
                      pt="4px"
                      minH="10px"
                      minW="12px"
                      maxH="14px"
                      maxW="16px"
                      objectFit="contain"
                      src="assets/images/tick.png"
                    />
                  )}
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default RoadmapItem;
