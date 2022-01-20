import { VStack, Text, HStack, Image } from '@chakra-ui/react';
import Icons from 'components/icons';

const SmallScreenFooter = () => {
  return (
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
          <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="16px">
            <Icons.SmallTwitter />
            <Icons.Facebook />
          </HStack>
        </HStack>
        <HStack align="flex-start" justify="flex-start" w="full" spacing="40px" pt="16px">
          <VStack align="flex-start">
            <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="/">
              Impakt Games
            </Text>
            <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="#nft-marketplace">
              NFT marketplace
            </Text>
            <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="#about-us">
              About us
            </Text>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="#policy-privacy">
              Policy Privacy
            </Text>
            <Text fontSize="16px" lineHeight="24px" opacity="0.4" as="a" href="#term-of-use">
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
  );
};

export default SmallScreenFooter;
