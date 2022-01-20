import { Button, Flex, GridItem, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';

const NFTMarketPlaceHero = () => {
  return (
    <HeroLayout hideBlur>
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid
          columns={2}
          alignItems="center"
          justifyContent="center"
          columnGap={{ base: 4, md: 8 }}
        >
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
              spacing={0}
              textAlign={{ base: 'left', md: 'left' }}
              alignItems={{ base: 'flex-start', md: 'flex-start' }}
            >
              <Flex
                direction={{ base: 'row', xl: 'row' }}
                paddingBottom={{ base: '24px', md: '38px' }}
              >
                <Text fontSize={{ base: '32px', md: '40px', lg: '56px' }} lineHeight="60px">
                  NFT
                </Text>
                <Text
                  fontSize={{ base: '32px', md: '40px', lg: '56px' }}
                  lineHeight="60px"
                  fontWeight="700"
                  paddingLeft={2}
                >
                  Marketplace
                </Text>
              </Flex>
              <Text
                lineHeight="32px"
                opacity="0.62"
                maxW="440px"
                fontSize={{ base: '18px', md: '20px' }}
                paddingBottom={{ base: '24px', md: '38px' }}
              >
                Trade your NFTs and improve your in-game earnings.
              </Text>
              <Image
                src="assets/images/nft-market-place.png"
                d={{ base: 'flex', sm: 'none', md: 'none' }}
                paddingBottom="30px"
              />
              <Button
                px="80px"
                py="32px"
                borderRadius="20px"
                w={{ base: 'full', sm: 'fit-content', md: 'auto' }}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Get Started
              </Button>
              <Image
                src="assets/images/nft-market-place.png"
                d={{ base: 'none', sm: 'flex', md: 'none' }}
                paddingBottom="30px"
              />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default NFTMarketPlaceHero;
