import { HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';

const BurnAndEarn = () => {
  const text = useColorModeValue('glass.100', 'glass.700');
  const show = useModalStore((state) => state.setBurnEarnNft);

  return (
    <HeroLayout minH="70vh" align="flex-start" justify="flex-start">
      <VStack color={text} w="full" spacing={{ base: '32px', lg: '16px' }}>
        <HStack
          maxW="1232px"
          w="full"
          px="16px"
          justify="space-between"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
        >
          <VStack maxW={{ base: 'full', lg: '453px' }} textAlign={{ base: 'center', lg: 'left' }}>
            <Text textStyle="bold7">Burn & earn tokens and NFTs</Text>
            <Text textStyle="regular4">You can earn as individual or with your community</Text>
          </VStack>
          <VStack
            pos="relative"
            align="center"
            justify="center"
            onClick={show}
            cursor="pointer"
            _hover={{
              transition: '0.5s ease',
              transform: 'scale(1.2)',
            }}
          >
            <Image src={Images.Common.play} pos="absolute" />
            <Image
              src={Images.burnAndEarnPeople}
              maxH="636px"
              pb={{
                base: '32px',
                lg: '0',
              }}
            />
          </VStack>
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default BurnAndEarn;
