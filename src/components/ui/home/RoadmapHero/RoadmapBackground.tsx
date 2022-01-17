import { HStack, Image } from '@chakra-ui/react';
import Gradients from './Gradients';

const RoadMapBackground = () => {
  return (
    <>
      <HStack pos="absolute" bottom={0} w="full" spacing={0} width="1200px">
        <Image src="assets/images/wave.png" width="1200px" minH={100} objectFit="fill" zIndex={1} />
      </HStack>
      <Gradients />
    </>
  );
};

export default RoadMapBackground;
