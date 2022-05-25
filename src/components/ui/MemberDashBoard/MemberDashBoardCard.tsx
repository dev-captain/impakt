import * as React from 'react';

import { VStack, useColorModeValue } from '@chakra-ui/react';
import Gradients from '../home/RoadmapHero/Gradients';

interface MemberDashBoardCardPropsI {
  isGradient?: boolean;
}
const MemberDashBoardCard: React.FC<MemberDashBoardCardPropsI> = ({ children, isGradient }) => {
  const bgColor = useColorModeValue('glass.800', 'glass.300');

  return (
    <VStack
      bgColor={bgColor}
      w="full"
      filter="drop-shadow(0px 8.55078px 17.1016px rgba(0, 0, 0, 0.12)) drop-shadow(0px 8.55078px 29.9277px rgba(0, 0, 0, 0.1))"
      borderRadius={59}
      position="relative"
      overflow="hidden"
      marginTop="0 !important"
    >
      {children}
      {isGradient && <Gradients />}
    </VStack>
  );
};

export default MemberDashBoardCard;
