import { HStack, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { RoadmapInfo } from 'data';
import Progress from './Progress';
import RoadmapItem from './RoadmapItem';

const RoadMapSmallView = ({
  bgColor,
  textColor,
  ourText,
  roadMapText,
}: {
  bgColor: string;
  textColor: string;
  ourText: string;
  roadMapText: string;
}) => {
  return (
    <HeroLayout>
      <VStack
        m="16px"
        spacing="36px"
        p={{ base: 0, md: 8 }}
        py={{ base: 16, md: 0 }}
        px="16px"
        maxW="1232px"
        align={{ base: 'center', xl: 'center', '2xl': 'flex-start' }}
      >
        <HStack
          w="full"
          alignItems={{ base: 'flex-start', md: 'center' }}
          justify={{ base: 'space-around', md: 'center' }}
        >
          <HStack
            w="full"
            spacing={5}
            color={textColor}
            justify={{ base: 'center', md: 'center' }}
            mt={{ base: '24px', md: 0, xl: '64px' }}
          >
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="300"
            >
              {ourText}
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              {roadMapText}
            </Text>
          </HStack>
        </HStack>
        <VStack
          w="full"
          h="1200px"
          overflow="hidden"
          position="relative"
          borderRadius="28px"
          bgColor={bgColor || 'glass.700'}
          color={textColor}
        >
          <HStack
            w="full"
            h="full"
            spacing="30px"
            align="flex-start"
            justify="flex-start"
            px="32px"
          >
            <VStack h="full" pt="120px">
              <Progress value={40} type="vertical" />
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
