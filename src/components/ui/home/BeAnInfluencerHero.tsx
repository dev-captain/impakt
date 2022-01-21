import { GridItem, Image, SimpleGrid, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import GradientCard from 'components/core/GradientCard';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const commonProps: any = {
  textAlign: { base: 'left', md: 'left' },
  alignItems: { base: 'left', md: 'flex-start' },
};

const BeAnInfluencerHero = () => {
  const [isLessThan890] = useMediaQuery('(max-width: 890px)');

  return (
    <HeroLayout hideBlur>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid
          columns={2}
          justifyContent="center"
          alignItems="center"
          columnGap={20}
          rowGap="60px"
          w="full"
        >
          <GridItem
            colSpan={{
              base: 2,
              md: isLessThan890 ? 2 : 1,
            }}
            zIndex={2}
            {...commonProps}
          >
            <VStack spacing="48px" align="flex-start">
              <VStack spacing="36px" {...commonProps}>
                <Text display="flex" lineHeight="60px" fontSize={{ base: '36px', md: '56px' }}>
                  <Text minW={{ base: '110px', md: '180px' }}>Be an</Text>
                  <Text
                    fontSize={{ base: '36px', md: '56px' }}
                    fontWeight="700"
                    lineHeight="60px"
                    marginLeft={{
                      base: '5px',
                      md: 0,
                    }}
                  >
                    influencer
                  </Text>
                </Text>

                <Text fontSize="20px" lineHeight="32px" opacity="0.6" maxW="380px">
                  And host single or team competitions rewarding NFT members!
                </Text>
                <GradientCard
                  title="Baloon Pump"
                  subtitle="Competition game"
                  d={{ base: 'none', sm: 'flex', md: 'none' }}
                  maxW={{ base: 'full', sm: '352px' }}
                  image="assets/images/baloon-pump.png"
                />
                <Image
                  maxH="600px"
                  d={{ base: 'flex', md: 'none' }}
                  src="assets/images/be-an-influencer.png"
                />
              </VStack>
              <GradientCard
                title="Baloon Pump"
                subtitle="Competition game"
                d={{ base: 'flex', sm: 'none', md: 'flex' }}
                maxW={{ base: 'full', sm: '352px' }}
                image="assets/images/baloon-pump.png"
              />
            </VStack>
          </GridItem>
          <GridItem
            display={{ base: 'none', md: 'flex' }}
            zIndex={1}
            colSpan={{
              base: 2,
              md: isLessThan890 ? 2 : 1,
            }}
          >
            <Image src="assets/images/be-an-influencer.png" maxH="600px" />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default BeAnInfluencerHero;
