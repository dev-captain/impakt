import { useRef } from 'react';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { RoadMapData } from 'data';
import RoadMapItem from './RoadMapItem';
import RoadMapBackground from './RoadmapBackground';
import SliderControls from './SliderControls';

const RoadMapHero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <HeroLayout hideBlur>
      <VStack
        w="full"
        spacing="36px"
        px={[8, 8, 12, 16, 40]}
        py={{ base: 16, md: 0 }}
        p={{ base: 0, md: 8 }}
      >
        <HStack
          w="full"
          maxW="1200px"
          alignItems={{ base: 'center', md: 'flex-start' }}
          justify={{ base: 'space-around', md: 'flex-start' }}
        >
          <Text fontWeight="700" fontSize={{ base: '40px', md: '56px' }} lineHeight="60px">
            Roadmap
          </Text>
          <SliderControls scrollRef={scrollRef} forMobile />
        </HStack>
        <VStack position="relative" h="480px" w="full" borderRadius="28px" maxW="1200px">
          <Flex
            h="480px"
            w="full"
            align="center"
            ref={scrollRef}
            flexGrow="initial"
            overflow="hidden"
            whiteSpace="nowrap"
            position="relative"
            borderRadius={{ base: 0, md: '28px' }}
            bgColor={{ base: 'transparent', md: '#1f2024' }}
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
