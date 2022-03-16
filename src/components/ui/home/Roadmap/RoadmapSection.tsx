import { HStack, Text, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { RoadmapInfo } from 'data';
import { layoutPadding } from 'theme';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import Progress from './Progress';
import RoadMapBackground from './RoadmapBackground';
import RoadmapItem from './RoadmapItem';
import RoadMapSmallView from './RoadmapSmallView';

const RoadMap = () => {
  const { t } = useTranslation().i18n;
  const [isLessThan800] = useMediaQuery('(max-width: 800px)');
  const bgColor = useColorModeValue('glass.700', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');

  if (isLessThan800) {
    return (
      <RoadMapSmallView
        bgColor={bgColor}
        textColor={textColor}
        ourText={t(Keys.ourRoadmap.our)}
        roadMapText={t(Keys.ourRoadmap.roadmap)}
      />
    );
  }

  return (
    <HeroLayout
      removeBottomPadding
      minH="70vh"
      pos="relative"
      spacing={10}
      justify="center"
      align="space-around"
    >
      <VStack
        w="full"
        spacing="36px"
        px={layoutPadding}
        p={{ base: 0, md: 8 }}
        py={{ base: '16px', md: 0 }}
        align={{ base: 'center', xl: 'center', '2xl': 'flex-start' }}
      >
        <HStack
          w="full"
          alignItems={{ base: 'center', md: 'center' }}
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
              {t(Keys.ourRoadmap.our)}
            </Text>
            <Text
              fontSize={{ base: '40px', md: '56px' }}
              lineHeight={{ base: '40px', md: '60px' }}
              fontWeight="700"
            >
              {t(Keys.ourRoadmap.roadmap)}
            </Text>
          </HStack>
        </HStack>
        <VStack
          h="460px"
          w="full"
          overflow="hidden"
          position="relative"
          borderRadius="28px"
          bgColor={bgColor}
          align="flex-start"
          justify="center"
          color={textColor}
        >
          <VStack pos="relative" w="full">
            <HStack px="16px" justify="space-around" w="full">
              {RoadmapInfo.map((item, index) => (
                <VStack
                  pl={{ base: 0, sm: index === 0 ? '16px' : 0, md: index === 0 ? '50px' : 0 }}
                >
                  <RoadmapItem data={item} />
                </VStack>
              ))}
            </HStack>
            <VStack w="full" px="25px" zIndex={10}>
              <Progress value={45} />
            </VStack>
          </VStack>
          <RoadMapBackground />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default RoadMap;
