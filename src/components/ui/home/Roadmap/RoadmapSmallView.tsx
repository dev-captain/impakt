import { HStack, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { RoadmapInfo } from 'data';
import { layoutPadding } from 'theme';
import Progress from './Progress';
import RoadmapItem from './RoadmapItem';

const RoadMapSmallView = () => {
  return (
    <HeroLayout>
      <VStack
        m="16px"
        spacing="36px"
        px={layoutPadding}
        p={{ base: 0, md: 8 }}
        py={{ base: 16, md: 0 }}
        align={{ base: 'center', xl: 'center', '2xl': 'flex-start' }}
      >
        <HStack
          w="full"
          alignItems={{ base: 'flex-start', md: 'center' }}
          justify={{ base: 'space-around', md: 'center' }}
        >
          <Text
            fontWeight="700"
            fontSize={{ base: '40px', md: '56px' }}
            lineHeight="60px"
            color="white"
          >
            Roadmap
          </Text>
        </HStack>
        <VStack
          w="full"
          h="1360px"
          overflow="hidden"
          position="relative"
          borderRadius="28px"
          bgColor="glass.700"
          color="white"
          pt="100px"
        >
          <HStack w="full" h="full" pl={100} spacing="30px">
            <VStack h="full" pt="190px">
              <Progress value={40} type="vertical" />
            </VStack>
            <VStack
              h="full"
              align="flex-start"
              justify="flex-start"
              pos="relative"
              spacing="100px"
              zIndex={10}
            >
              {RoadmapInfo.map((item) => (
                <RoadmapItem type="vertical" data={item} />
              ))}
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default RoadMapSmallView;
