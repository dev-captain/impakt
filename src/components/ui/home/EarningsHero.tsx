import { Box, GridItem, HStack, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const EarningsHero = () => {
  return (
    <HeroLayout hideBlur>
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

const EarnTokenCard = ({ isVrGlass, title }: { isVrGlass?: boolean; title: string }) => {
  const Icon = isVrGlass ? Icons.NftGame : Icons.NftImage;

  return (
    <Box bgColor="#1F2024" borderRadius={20} position="relative" overflow="hidden">
      <VStack
        p={7}
        maxW="240px"
        maxH="250px"
        spacing="32px"
        align="flex-start"
        justify="flex-start"
        minH={{ base: '220px', sm: '170px', md: '220px' }}
      >
        <Icon />
        <Text fontSize={{ base: '14px', md: '16px' }}>{title}</Text>
        <Box
          w="220px"
          h="196px"
          left="-70px"
          top="-100px"
          opacity={0.49}
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
          background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
        />
        <Box
          w="220px"
          h="196px"
          left="93px"
          top="100px"
          opacity={0.49}
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
          background="radial-gradient(50% 50% at 50% 50%, rgba(72, 123, 253, 1) 10%, rgba(184, 50, 108, 0) 100%)"
        />
      </VStack>
    </Box>
  );
};
