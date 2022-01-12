import { Button, Flex, GridItem, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';

const NFTMarketPlaceHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={[4, 8, 12, 16, 40]} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid columns={2} justifyContent="center" alignItems="center" columnGap={20}>
          <GridItem display={{ base: 'none', md: 'flex' }}>
            <Image src="assets/images/nft-market-place.png" />
          </GridItem>
          <GridItem
            colSpan={{
              base: 2,
              md: 1,
            }}
          >
            <VStack
              textAlign={{ base: 'center', md: 'left' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <Flex direction={{ base: 'column', xl: 'row' }} paddingBottom="38px">
                <Text fontSize={{ base: '40px', md: '56px' }} lineHeight="60px">
                  NFT
                </Text>
                <Text
                  fontSize={{ base: '40px', md: '56px' }}
                  lineHeight="60px"
                  fontWeight="700"
                  paddingLeft={2}
                >
                  marketplace
                </Text>
              </Flex>
              <Text
                fontSize={{ base: '18px', md: '20px' }}
                lineHeight="32px"
                opacity="0.62"
                paddingBottom="38px"
                maxW="400px"
              >
                Online marketplace where artists sell their non-fungible art and where buyers can
                get them using cryptocurrency
              </Text>
              <Button
                px="64px"
                py="32px"
                borderRadius="10px"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Get Started
              </Button>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default NFTMarketPlaceHero;
