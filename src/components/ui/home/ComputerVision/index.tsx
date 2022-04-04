import { HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';
import HeroCard from 'components/common/HeroCard';
import Play from 'components/icons/Play';
import HeroLayout from 'components/layouts/HeroLayout';
import useModalStore from 'hooks/store/useModalStore';

const ComputerVisionHero = () => {
  const text = useColorModeValue('glass.100', 'glass.700');
  const show = useModalStore((state) => state.setComputerVision);

  return (
    <HeroLayout minH="70vh" align="flex-start" justify="flex-start">
      <VStack color={text} w="full" spacing={{ base: '32px', lg: '16px' }} px="16px">
        <Text textStyle="bold7" textAlign={{ base: 'center', sm: 'center' }}>
          Computer vision
        </Text>
        <HStack
          maxW="1232px"
          w="full"
          justify="space-between"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
        >
          <AnimationInWhenVisible isLeft animationType="move">
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
              <VStack pos="absolute">
                <Play />
              </VStack>
              <Image
                src={Images.computerVision}
                maxW="525px"
                w="100%"
                pb={{
                  base: '32px',
                  lg: '0',
                }}
              />
            </VStack>
          </AnimationInWhenVisible>
          <AnimationInWhenVisible animationType="move">
            <HeroCard
              smallTitle="COMPUTER VISION"
              title="Your body is the controller"
              description="A webcam & laptop or a smartphone! That's all you need to join our platform!"
            />
          </AnimationInWhenVisible>
        </HStack>
      </VStack>
    </HeroLayout>
  );
};

export default ComputerVisionHero;
