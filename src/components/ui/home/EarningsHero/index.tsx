import { layoutPadding } from 'theme';
import HeroLayout from 'components/layouts/HeroLayout';
import { GridItem, HStack, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react';
import EarnTokenCard from './EarnTokenCard';

const EarningsHero = () => {
  return (
    <HeroLayout>
      <SimpleGrid
        w="full"
        columns={2}
        columnGap={20}
        px={layoutPadding}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem display={{ base: 'none', md: 'flex' }}>
          <Image src="assets/images/earning-token-hero.png" maxH="600px" />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <VStack textAlign="left" alignItems="flex-start">
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px" fontWeight="700">
              Earn
            </Text>
            <Text fontSize={{ base: '48px', md: '56px' }} lineHeight="60px">
              Tokens and NFTs
            </Text>
            <Spacer h="80px" />
            <Text fontSize="20px" lineHeight="32px" opacity="0.6" maxW="380px">
              Capitalize on your fitness routine.
            </Text>
            <VStack
              spacing="20px"
              justify={{ base: 'center', md: 'flex-start' }}
              d={{ base: 'none', sm: 'flex', md: 'none' }}
            >
              <Spacer h="80px" />
              <SimpleGrid columns={2} columnGap={4} rowGap={4}>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <EarnTokenCard isVrGlass title="Earn in-game rewards and crypto" />
                </GridItem>
                <GridItem
                  colSpan={{
                    base: 1,
                    md: 1,
                  }}
                >
                  <EarnTokenCard title="Trade NFTs" />
                </GridItem>
              </SimpleGrid>
            </VStack>
            <Image
              src="assets/images/earning-token-hero.png"
              maxH="600px"
              d={{ base: 'flex', md: 'none' }}
            />
          </VStack>
          <Spacer h="80px" />
          <HStack
            spacing="20px"
            justify={{ base: 'center', md: 'flex-start' }}
            d={{ base: 'flex', sm: 'none', md: 'flex' }}
          >
            <SimpleGrid columns={2} columnGap={4} rowGap={4}>
              <GridItem
                colSpan={{
                  base: 1,
                  md: 1,
                }}
              >
                <EarnTokenCard isVrGlass title="Earn in-game rewards and crypto" />
              </GridItem>
              <GridItem
                colSpan={{
                  base: 1,
                  md: 1,
                }}
              >
                <EarnTokenCard title="Trade NFTs" />
              </GridItem>
            </SimpleGrid>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default EarningsHero;
