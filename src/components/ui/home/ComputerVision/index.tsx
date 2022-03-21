import { HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import HeroCard from 'components/common/HeroCard';
import HeroLayout from 'components/layouts/HeroLayout';

const ComputerVisionHero = () => {
  const text = useColorModeValue('glass.100', 'glass.700');

  return (
    <HeroLayout minH="70vh" align="flex-start" justify="flex-start">
      <VStack color={text} w="full" spacing={{ base: '32px', lg: '16px' }}>
        <Text textStyle="bold7">Computer vision</Text>
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
          <Image
            src={Images.computerVision}
            maxW="525px"
            pb={{
              base: '32px',
              lg: '0',
            }}
          />
          <HeroCard
            smallTitle="COMPUTER VISION"
            title="Use your body as the controller"
            description="You don’t need extra hardware. Just use the camera of your laptop or phone and you will be able to enjoy our platform"
          />
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default ComputerVisionHero;
