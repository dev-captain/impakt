import React from 'react';
import { HStack } from '@chakra-ui/react';

import ExploreGroupCardHeader from './Header/ExploreGroupCardHeader';
import ExploreGroupCardWrapper from './ExploreGroupCardWrapper';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

interface ExploreGroupProps {
  isGuest?: boolean;
}

const ExploreGroup: React.FC<ExploreGroupProps> = ({ isGuest = false }) => {
  const { exploreGroups } = usePersistedGroupStore();

  const [status, setStatus] = React.useState<'Public' | 'Private'>('Public');
  const [searchGroup, setSearchGroup] = React.useState<string | string>('');
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
      <ExploreGroupCardHeader
        showToggle={!isGuest}
        status={status}
        setStatus={setStatus}
        setSearchGroup={setSearchGroup}
      />
      <ExploreGroupCardWrapper isGuest={isGuest} status={status} searchGroup={searchGroup} />
    </HStack>
  );
};
export default ExploreGroup;
