import { HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import HeroCard from 'components/common/HeroCard';
import HeroLayout from 'components/layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';

const ComputerVisionHero = () => {
  const text = useColorModeValue('glass.100', 'glass.700');
  const show = useModalStore((state) => state.setComputerVision);

  return (
    <HeroLayout minH="70vh" align="flex-start" justify="flex-start">
      <VStack color={text} w="full" spacing={{ base: '32px', lg: '16px' }} px="16px">
        <Text textStyle="bold7">Computer vision</Text>
        <HStack
          maxW="1232px"
          w="full"
          justify="space-between"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
        >
          <VStack pos="relative" align="center" justify="center" onClick={show} cursor="pointer">
            <Image src={Images.Common.play} pos="absolute" />
            <Image
              src={Images.computerVision}
              maxW="525px"
              pb={{
                base: '32px',
                lg: '0',
              }}
            />
          </VStack>
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
