import { GridItem, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import GradientCard from 'components/core/GradientCard';
import HeroLayout from 'components/layouts/HeroLayout';

const commonProps: any = {
  textAlign: { base: 'center', md: 'left' },
  alignItems: { base: 'center', md: 'flex-start' },
};

const BeAnInfluencerHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid columns={2} justifyContent="center" alignItems="center" columnGap={20}>
          <GridItem
            colSpan={{
              base: 2,
              md: 1,
            }}
            zIndex={2}
            {...commonProps}
          >
            <VStack spacing="48px" align="flex-start">
              <VStack spacing="36px" {...commonProps}>
                <Text
                  display="flex"
                  fontSize="56px"
                  lineHeight="60px"
                  flexDir={{ base: 'column', md: 'row' }}
                >
                  <Text minW="180px">Be an</Text>
                  <Text fontSize="56px" fontWeight="700" lineHeight="60px" marginRight={4}>
                    influencer
                  </Text>
                </Text>
                <Text fontSize="20px" lineHeight="32px" opacity="0.6" maxW="380px">
                  And host single or team competitions rewarding NFT members!
                </Text>
              </VStack>
              <GradientCard
                title="Baloon Pump"
                subtitle="Competition game"
                image="assets/images/baloon-pump.png"
              />
            </VStack>
          </GridItem>
          <GridItem display={{ base: 'none', md: 'flex' }} zIndex={1}>
            <Image src="assets/images/be-an-influencer.png" maxH="600px" />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default BeAnInfluencerHero;
