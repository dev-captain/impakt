import { HStack } from '@chakra-ui/react';
import Gradients from '../RoadmapHero/Gradients';

const RoadMapBackground = () => {
  return (
    <>
      <HStack pos="absolute" bottom={0} w="full" spacing={0} width="full" bgColor="glass.700" />
      <Gradients />
    </>
  );
};

export default RoadMapBackground;
