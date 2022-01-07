import { Text, VStack, HStack, SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import FeatureCard from './FeatureCard';

const SingleTeamCard = () => {
  const gridItemColSpan = {
    base: 2,
    md: 1,
  };
  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      base: '20px',
      lg: '220px',
    },
    py: {
      base: '20px',
      md: '180px',
    },
  };

  return (
    <VStack
      w="full"
      bgSize="cover"
      justify="center"
      align="flex-start"
      {...vStackSomeProps}
      backgroundImage={bgImage}
      position="relative"
      overflow="hidden"
    >
      <Box
        w="967px"
        h="472px"
        left="-30%"
        top="-204px"
        opacity={0.4}
        background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
        pos="absolute"
        zIndex={0}
      />
      <VStack align="flex-start" spacing={{ base: '20px', md: '120px' }} zIndex={1}>
        <VStack align="flex-start" spacing={8}>
          <Text fontSize="56px" lineHeight="60px">
            Single & team
            <Text fontWeight="700">games</Text>
          </Text>
          <Text fontSize="20px" fontWeight="400" opacity="0.6" maxW="440px">
            Connect together and have a fun while experiencing gamified fitness
          </Text>
        </VStack>
        <HStack>
          <SimpleGrid columns={2} columnGap={4} rowGap={4}>
            <GridItem colSpan={gridItemColSpan}>
              <FeatureCard isActive image="second-hero-feature-card1.png" />
            </GridItem>
            <GridItem colSpan={gridItemColSpan}>
              <FeatureCard image="second-hero-yoga.png" />
            </GridItem>
          </SimpleGrid>
        </HStack>
      </VStack>
    </VStack>
  );
};

const bgImage =
  "linear-gradient(90deg, #1F2024 18.46%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/second-hero-bg.png')";

export default SingleTeamCard;
