import { Box, HStack, Text, useColorModeValue, useMediaQuery, VStack } from '@chakra-ui/react';
import { C } from '@/components';
import { RoadmapInfo } from '@/data';
import Keys from '@/i18n/translations/en';
import Progress from './Progress';
import RoadMapBackground from './RoadmapBackground';
import RoadmapItem from './RoadmapItem';
import RoadMapSmallView from './RoadmapSmallView';
import Images from '../../../../assets/images';

const RoadMap = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <C.HeroLayout
      showFooterV2
      removeTopPadding
      bgColor="#0A0A0B"
      bgImage={Images.backgrounds.gradientBgRotated}
      pos="relative"
      backgroundSize="cover"
      justify="center"
      align="center"
    >
      <VStack w="full" px="1em">
        <VStack
          w="full"
          maxW="1200px"
          overflow="hidden"
          justifyContent={{ base: 'flex-start', lg: 'center' }}
          alignItems={{ base: 'flex-start', lg: 'center' }}
          pos="relative"
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
              <Box
                background="linear-gradient(94.92deg, rgba(219, 31, 255, 0) 69.06%, rgba(219, 31, 255, 0.35) 100%), linear-gradient(265.11deg, rgba(255, 49, 68, 0) 72.84%, rgba(255, 49, 68, 0.35) 100%), #FFFFFF;"
                sx={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Text
                  fontSize={{ base: '40px', md: '56px' }}
                  lineHeight={{ base: '40px', md: '60px' }}
                  fontWeight="700"
                  fontStyle="TitleBold64"
                >
                  {Keys.ourRoadmap.roadmap}
                </Text>
              </Box>
            </HStack>
          </HStack>

          {isLessThan1280 && <RoadMapSmallView />}
          {!isLessThan1280 && (
            <VStack
              h="460px"
              w="full"
              overflow="hidden"
              position="relative"
              borderRadius="28px"
              align="flex-start"
              justify="center"
              color={textColor}
            >
              <VStack pos="relative" w="full">
                <HStack px="16px" justify="space-around" w="full">
                  {RoadmapInfo.map((item, index) => (
                    <VStack
                      key={index.toString()}
                      pl={{ base: 0, sm: index === 0 ? '16px' : 0, md: index === 0 ? '50px' : 0 }}
                    >
                      <RoadmapItem data={item} />
                    </VStack>
                  ))}
                </HStack>
                <VStack w="full" px="25px" zIndex={10}>
                  <Progress value={85} />
                </VStack>
              </VStack>
              <RoadMapBackground />
            </VStack>
          )}
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default RoadMap;
