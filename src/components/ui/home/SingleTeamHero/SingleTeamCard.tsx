import { Text, VStack, HStack, SimpleGrid, GridItem, Box } from '@chakra-ui/react';
import FeatureCard from './FeatureCard';

const SingleTeamCard = () => {
  const gridItemColSpan = {
    base: 1,
    md: 1,
  };
  const vStackSomeProps = {
    borderRadius: {
      base: '14px',
      md: '28px',
    },
    px: {
      sm: '32px',
      md: '40px',
      xl: '120px',
      base: '16px',
    },
    py: {
      base: '16px',
      md: '32px',
      xl: '100px',
      '2xl': '230px',
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
        zIndex={0}
        top="-204px"
        opacity={0.4}
        pos="absolute"
        background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      />
      <VStack align="flex-start" spacing={{ base: '20px', md: '80px', xl: '120px' }} zIndex={1}>
        <VStack align="flex-start" spacing={8}>
          <Text fontSize={{ base: '40px', md: '56px' }} lineHeight="60px">
            Single & Team
            <Text fontWeight="700">Games</Text>
          </Text>
          <Text fontSize="20px" fontWeight="400" opacity="0.6" maxW="440px">
            Challenge yourself in match made games or play with your friends.
          </Text>
        </VStack>
        <HStack>
          <SimpleGrid columns={2} columnGap={4} rowGap={4}>
            <GridItem colSpan={gridItemColSpan}>
              <FeatureCard isActive image="second-hero-feature-card1.png" title="Ranked" />
            </GridItem>
            <GridItem colSpan={gridItemColSpan}>
              <FeatureCard image="second-hero-yoga.png" title="Team" />
            </GridItem>
          </SimpleGrid>
        </HStack>
      </VStack>
    </VStack>
  );
};

const bgImage =
  "linear-gradient(90deg, #1F2024 0%, rgba(31, 32, 36, 0) 63.94%), url('assets/images/second-hero-bg.png')";

export default SingleTeamCard;
