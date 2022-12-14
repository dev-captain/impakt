import * as React from 'react';
import { HStack } from '@chakra-ui/react';

import ExploreGroupCardHeader from './Header/ExploreGroupCardHeader';
import ExploreGroupCardWrapper from './ExploreGroupCardWrapper';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const ExploreGroup: React.FC = () => {
  const { exploreGroups } = usePersistedGroupStore();

  const [status, setStatus] = React.useState<'Public' | 'Private'>('Public');
  if (exploreGroups.length === 0) return null;

  return (
    <HStack
      columnGap="24px !important"
      rowGap="24px !important"
      w="full"
      spacing="0"
      flexWrap={{ sm: 'wrap' }}
      flexDir={{ base: 'column', md: 'row' }}
    >
      <ExploreGroupCardHeader status={status} setStatus={setStatus} />
      <ExploreGroupCardWrapper status={status} />
    </HStack>
  );
};
export default ExploreGroup;
