import { HStack } from '@chakra-ui/layout';
import * as React from 'react';
import GroupLabels from './GroupLabels/GroupLabels';

const BannerPanelLeft: React.FC = () => {
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="flex-start"
      rowGap="12px"
      columnGap="12px"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <GroupLabels />
      {/* Creation challenge modal here */}
    </HStack>
  );
};

export default BannerPanelLeft;
