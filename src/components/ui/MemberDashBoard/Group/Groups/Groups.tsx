import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
// import { useAppSelector } from 'hooks';

import ExploreGroupCard from './ExploreGroupCard/ExploreGroupCard';
import MyGroupCard from './MyGroupCard/MyGroupCard';
import MyGroupCardHeader from './MyGroupCard/Header/MyGroupCardHeader';

const Groups: React.FC = () => {
  // const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);

  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <VStack alignItems="flex-start" rowGap="1em" justifyContent="flex-start" w="full">
        {/* Your groups  section */}
        <Box w="full" as="section" id="your-groups-section">
          <MyGroupCardHeader />
          <MyGroupCard />
        </Box>
        {/* Explore Group section */}
        <Box w="full" as="section" id="explore-group-section">
          <ExploreGroupCard />
        </Box>
      </VStack>
    </Box>
  );
};
export default Groups;
