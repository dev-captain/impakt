import * as React from 'react';

import { VStack, useColorModeValue } from '@chakra-ui/react';
import Gradients from '../home/RoadmapHero/Gradients';

interface MemberDashboardCardPropsI {
  isGradient?: boolean;
  borderRadius?: number;
}
const MemberDashboardCard: React.FC<MemberDashboardCardPropsI> = ({
  children,
  isGradient,
  borderRadius = 59,
}) => {
  const bgColor = useColorModeValue('glass.800', 'glass.300');

  return (
    <VStack
      bgColor={bgColor}
      w="full"
      filter="drop-shadow(0px 8.55078px 17.1016px rgba(0, 0, 0, 0.12)) drop-shadow(0px 8.55078px 29.9277px rgba(0, 0, 0, 0.1))"
      borderRadius={borderRadius}
      position="relative"
      overflow="hidden"
      marginTop="0 !important"
    >
      {children}
      {isGradient && <Gradients secondX="875px" secondY="-31px" secondOpacity="0.8" isOrange />}
    </VStack>
  );
};

export default MemberDashboardCard;
