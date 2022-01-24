import { VStack, Text, SimpleGrid, GridItem, HStack, Image, Box } from '@chakra-ui/react';
import { Socials } from 'data';
import { layoutPadding } from 'theme';

const BigScreenFooter = () => {
  return (
    <VStack
      h="100%"
      w="full"
      bgColor="#1F2024"
      px={layoutPadding}
      py={{ base: 16, md: 0 }}
      d={{ base: 'none', md: 'flex' }}
    >
      <SimpleGrid columns={5} w="full">
        <GridItem colSpan={{ base: 5, md: 4 }}>
          <SimpleGrid columns={3} spacing="10px" h="216px" justifyContent="center" rowGap={4}>
            <GridItem colSpan={{ base: 3, md: 1 }} h="full" display={{ base: 'none', md: 'flex' }}>
              <VStack
                align={{ base: 'center', md: 'flex-start' }}
                spacing="16px"
                h="full"
                justify="center"
              >
                <Image src="assets/images/logo.png" />
                <VStack spacing="8px" align={{ base: 'center', md: 'flex-start' }}>
                  <Text
                    display="flex"
                    fontSize="12px"
                    lineHeight="24px"
                    flexDir="row"
                    fontWeight="500"
                  >
                    <Text fontWeight="400" opacity="0.6">
                      Made by
                    </Text>
                    <Text marginLeft="4px">impakt.com</Text>
                  </Text>
                  <Text fontSize="12px" lineHeight="16px" opacity="0.6">
                    © 2021 Impakt. All rights reserved.
                  </Text>
                </VStack>
              </VStack>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }} marginTop={{ base: 0, md: '60px' }}>
              <SimpleGrid columns={2} rowGap={1}>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <VStack align={{ base: 'center', md: 'flex-start' }}>
                    {/* <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="/">
                      Impakt Games
                    </Text> */}
                    {/* <Text
                      fontSize="16px"
                      lineHeight="24px"
                      opacity="0.4"
                      as="a"
                      href="#nft-marketplace"
                    >
                      NFT marketplace
                    </Text>
                    <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="#about-us">
                      About us
                    </Text> */}
                  </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  {/* <VStack align={{ base: 'center', md: 'flex-start' }}>
                    <Text
                      fontSize="16px"
                      lineHeight="24px"
                      opacity="0.4"
                      as="a"
                      href="#policy-privacy"
                    >
                      Policy Privacy
                    </Text>
                    <Text
                      fontSize="16px"
                      lineHeight="24px"
                      opacity="0.4"
                      as="a"
                      href="#term-of-use"
                    >
                      Terms of use
                    </Text>
                  </VStack> */}
                </GridItem>
              </SimpleGrid>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 1 }} marginTop={{ base: 0, md: '60px' }}>
          <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="32px" pl="64px">
            <Box as="a" target="_blank" href={Socials.twitter}>
              <Image
                w="32px"
                h="32px"
                opacity={0.6}
                objectFit="contain"
                src="assets/images/twitter.png"
              />
            </Box>
            <Box as="a" target="_blank" href={Socials.discord}>
              <Image
                w="30px"
                h="30px"
                opacity={0.6}
                objectFit="contain"
                src="assets/images/discord.png"
              />
            </Box>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={{ base: 5, md: 1 }}
          h="full"
          display={{ base: 'flex', md: 'none' }}
          marginTop={4}
        >
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            spacing="16px"
            w="full"
            justify="center"
          >
            <Image src="assets/images/logo.png" />
            <VStack spacing="8px" align={{ base: 'center', md: 'flex-start' }}>
              <Text display="flex" fontSize="12px" lineHeight="24px" flexDir="row" fontWeight="500">
                <Text fontWeight="400" opacity="0.6">
                  Made by
                </Text>
                <Text marginLeft="4px">impakt.com</Text>
              </Text>
              <Text fontSize="12px" lineHeight="16px" opacity="0.6">
                © 2021 Impakt. All rights reserved.
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default BigScreenFooter;
