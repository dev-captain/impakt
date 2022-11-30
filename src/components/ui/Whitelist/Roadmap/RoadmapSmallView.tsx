import { HStack, VStack } from '@chakra-ui/react';
import { RoadmapInfo } from 'data';
import Progress from './Progress';
import RoadmapItem from './RoadmapItem';

const RoadMapSmallView = () => {
  return (
    <VStack w="full" alignItems="center" justifyContent="flex-start" p={{ base: 0, md: 8 }}>
      <VStack
        w="full"
        h="1200px"
        overflow="hidden"
        position="relative"
        borderRadius="28px"
        color="white"
      >
        <HStack
          justifyContent="center"
          alignSelf="center"
          w="full"
          h="full"
          spacing="30px"
          px="32px"
        >
          <VStack h="full" pt="120px">
            <Progress value={82} type="vertical" />
          </VStack>
          <VStack
            h="full"
            align="flex-start"
            justify="flex-start"
            pos="relative"
            spacing="100px"
            zIndex={10}
            pt="85px"
          >
            {RoadmapInfo.map((item) => (
              <RoadmapItem key={`item-${item.title}`} type="vertical" data={item} />
            ))}
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default RoadMapSmallView;
