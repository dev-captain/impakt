import {
  Box,
  Center,
  Circle,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

const RoadMapItem = ({
  isActive,
  date,
  items,
}: {
  date: string;
  isActive: boolean;
  items: string[];
}) => {
  return (
    <VStack
      align="flex-start"
      h="full"
      padding="60px"
      px="30px"
      spacing="24px"
      whiteSpace="normal"
      minW="330px"
    >
      <Box
        marginLeft="32px"
        px="22px"
        py="12px"
        borderRadius="8px"
        background={
          isActive
            ? 'linear-gradient(180deg, rgba(253, 72, 132, 0.6) 0%, rgba(253, 72, 87, 0.6) 100%)'
            : '#27282c'
        }
      >
        <Text fontSize="14px" fontWeight="600" lineHeight="24px" opacity={isActive ? 1 : 0.4}>
          {date.toUpperCase()}
        </Text>
      </Box>
      <HStack align="flex-start" spacing="0px">
        <VStack
          spacing={0}
          p={0}
          align="center"
          justify="center"
          w="80px"
          mt="6px"
          zIndex={100}
          minW="80px"
        >
          <Circle
            size="12px"
            background={isActive ? 'linear-gradient(180deg, #FD4884 0%, #FD4857 100%)' : '#fff'}
            opacity={isActive ? 1 : 0.4}
          />
          <Image
            src="assets/images/roadmap-line2.png"
            h={isActive ? '233px' : '280px'}
            objectFit="fill"
          />
          {isActive && <Image src="assets/images/roadmap-circle-tick.png" w="80px" h="80px" />}
          {!isActive && (
            <Center>
              <Circle
                size="12px"
                background={isActive ? 'linear-gradient(180deg, #FD4884 0%, #FD4857 100%)' : '#fff'}
                opacity={isActive ? 1 : 0.4}
              />
            </Center>
          )}
        </VStack>
        <HStack
          maxW="240px"
          align="flex-start"
          justify="flex-start"
          spacing={0}
          minW="240px"
          opacity={isActive ? 1 : 0.4}
        >
          <UnorderedList spacing="12px">
            {items.map((item) => (
              <ListItem fontSize="16px" fontWeight="600">
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default RoadMapItem;
