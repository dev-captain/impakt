import { VStack, Text, SimpleGrid, GridItem, HStack, Image } from '@chakra-ui/react';
import Icons from 'components/icons';

const Footer = () => {
  return (
    <>
      <VStack
        w="full"
        bgColor="#1F2024"
        px={[4, 8, 12, 16, 40]}
        py={{ base: 16, md: 0 }}
        h="100%"
        d={{ base: 'none', md: 'flex' }}
      >
        <SimpleGrid columns={5} w="full">
          <GridItem colSpan={{ base: 5, md: 4 }}>
            <SimpleGrid columns={3} spacing="10px" h="216px" justifyContent="center" rowGap={4}>
              <GridItem
                colSpan={{ base: 3, md: 1 }}
                h="full"
                display={{ base: 'none', md: 'flex' }}
              >
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
                      <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                        Impakt Games
                      </Text>
                      <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                        NFT marketplace
                      </Text>
                      <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                        About us
                      </Text>
                    </VStack>
                  </GridItem>
                  <GridItem colSpan={{ base: 2, md: 1 }}>
                    <VStack align={{ base: 'center', md: 'flex-start' }}>
                      <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                        Policy Privacy
                      </Text>
                      <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                        Terms of use
                      </Text>
                    </VStack>
                  </GridItem>
                </SimpleGrid>
              </GridItem>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 1 }} marginTop={{ base: 0, md: '60px' }}>
            <HStack justify={{ base: 'center', md: 'flex-end' }}>
              <Icons.Facebook />
              <Icons.SmallTwitter />
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
        </SimpleGrid>
      </VStack>
      <VStack
        w="full"
        h="100%"
        bgColor="#1F2024"
        px={[4, 8, 12, 16, 40]}
        py={{ base: 16, md: 0 }}
        d={{ base: 'flex', md: 'none' }}
      >
        <VStack w="full">
          <HStack align="flex-start" justify="space-between" w="full">
            <Image src="assets/images/logo.png" />
            <HStack justify={{ base: 'center', md: 'flex-end' }}>
              <Icons.Facebook />
              <Icons.SmallTwitter />
            </HStack>
          </HStack>
          <HStack align="flex-start" justify="flex-start" w="full" spacing="40px" pt="16px">
            <VStack align="flex-start">
              <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                Impakt Games
              </Text>
              <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                NFT marketplace
              </Text>
              <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                About us
              </Text>
            </VStack>
            <VStack align="flex-start">
              <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                Policy Privacy
              </Text>
              <Text fontSize="16px" lineHeight="24px" opacity="0.4">
                Terms of use
              </Text>
            </VStack>
          </HStack>
          <VStack spacing="8px" align="flex-start" w="full" pt="24px">
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
      </VStack>
    </>
  );
};

export default Footer;
