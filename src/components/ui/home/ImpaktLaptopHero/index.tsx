import { HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';

const ImpaktLaptopHero = () => {
  const text = useColorModeValue('glass.100', 'glass.700');

  return (
    <HeroLayout minH="70vh" align="flex-start" justify="flex-start">
      <VStack color={text} w="full" spacing={{ base: '32px', lg: '16px' }} pos="relative">
        <Image
          src={Images.Common.bgWave}
          pos="absolute"
          zIndex={0}
          top="30vh"
          minH="210px"
          maxH="210px"
          w="100%"
          objectFit="cover"
        />
        <HStack
          maxW="1232px"
          w="full"
          px="16px"
          justify="space-between"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
          zIndex={10}
        >
          <Image
            src={Images.impaktLaptop}
            maxW="525px"
            w="100%"
            pb={{
              base: '32px',
              lg: '0',
            }}
          />
          <Text textStyle="bold5" textAlign="center" maxW="525px">
            Impakt is attractive, addictive, and seriously whips you into shape
          </Text>
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default ImpaktLaptopHero;
