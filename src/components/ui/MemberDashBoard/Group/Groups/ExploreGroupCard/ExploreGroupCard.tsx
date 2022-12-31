import React from 'react';
import { Grid } from '@chakra-ui/react';

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
    <>
      <ExploreGroupCardHeader
        showToggle={!isGuest}
        status={status}
        setStatus={setStatus}
        setSearchGroup={setSearchGroup}
      />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(282px, 1fr));"
        gridRowGap="24px"
        gridColumnGap="24px"
        justifyContent={{ base: 'center', md: 'space-between' }}
        mt="24px"
        // columnGap="24px !important"
        // rowGap="24px !important"
        w="full"
        // spacing="0"
        // flexWrap="wrap"
        // justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <ExploreGroupCardWrapper status={isGuest ? 'Public' : status} searchGroup={searchGroup} />
      </Grid>
    </>
  );
};
export default ExploreGroup;
