import { GridItem, SimpleGrid, Text, VStack, Image } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';

const commonProps: any = {
  textAlign: { base: 'center', md: 'left' },
  alignItems: { base: 'center', md: 'flex-start' },
};

const JoinUsHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid
          columns={5}
          justifyContent="center"
          alignItems="center"
          columnGap={{
            base: '4',
            sm: '8',
            md: '12',
            xl: '20',
          }}
        >
          <GridItem
            colSpan={{
              base: 5,
              md: 2,
            }}
            zIndex={2}
            {...commonProps}
          >
            <VStack spacing="52px" align={{ base: 'center', md: 'flex-start' }}>
              <VStack spacing="36px" {...commonProps}>
                <Text display="flex" fontSize="56px" lineHeight="60px" flexDir="row">
                  <Text>Join</Text>
                  <Text fontSize="56px" fontWeight="700" lineHeight="60px" marginLeft="8px">
                    us
                  </Text>
                </Text>
                <Text fontSize="20px" fontWeight="400" lineHeight="32px" opacity="0.6">
                  And do fitness with your friends! Be successful!
                </Text>
              </VStack>
              <GradientButton
                title="Get started"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              />
            </VStack>
          </GridItem>
          <GridItem display={{ base: 'none', md: 'flex' }} zIndex={1} colSpan={3}>
            <Image src="assets/images/joinus-hero.png" />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default JoinUsHero;
