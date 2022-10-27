import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { useAppSelector } from 'hooks';

import ExploreGroupCardHeader from './Header/ExploreGroupCardHeader';
import ExploreGroupCardWrapper from './ExploreGroupCardWrapper';

const ExploreGroup: React.FC = () => {
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  const [status, setStatus] = React.useState<'public' | 'private'>('public');
  if (exploreGroups.length === 0) return null;

  const handleChangeStatus = (activeStatus: typeof status) => {
    setStatus(activeStatus);
  };

  return (
    <HStack
      columnGap={{ md: '24px' }}
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      margin="30px 0"
      flexWrap={{ sm: 'wrap' }}
      display={{ sm: 'flex' }}
    >
      <ExploreGroupCardHeader status={status} handleChangeStatus={handleChangeStatus} />
      <ExploreGroupCardWrapper status={status} />
    </HStack>
  );
};
export default ExploreGroup;
