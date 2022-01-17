import { useRef } from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { RoadMapData } from 'data';
import RoadMapItem from './RoadMapItem';
import RoadMapBackground from './RoadmapBackground';
import SliderControls from './SliderControls';

const RoadMapHero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <HeroLayout hideBlur>
      <VStack w="full" px={[8, 8, 12, 16, 40]} py={{ base: 16, md: 0 }} spacing="36px">
        <Text fontWeight="700" fontSize="56px" lineHeight="60px">
          Roadmap
        </Text>
        <VStack position="relative" h="480px" w="full" borderRadius="28px" maxW="1200px">
          <Flex
            h="480px"
            w="full"
            align="center"
            ref={scrollRef}
            borderRadius="28px"
            flexGrow="initial"
            overflow="hidden"
            whiteSpace="nowrap"
            bgColor="#1f2024"
            position="relative"
          >
            {RoadMapData.map((item) => (
              <RoadMapItem {...item} />
            ))}
            <RoadMapBackground />
          </Flex>
          <SliderControls scrollRef={scrollRef} />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default RoadMapHero;
