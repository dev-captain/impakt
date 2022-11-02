import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
// import { useAppSelector } from 'hooks';

import ExploreGroupCard from './ExploreGroupCard/ExploreGroupCard';
import MyGroupCard from './MyGroupCard/MyGroupCard';
import MyGroupCardHeader from './MyGroupCard/Header/MyGroupCardHeader';
import { usePersistedAuthStore } from '../../../../../lib/zustand';
import { useGroupsMemberControllerV1GetGroupsByUserId } from '../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';

const Groups: React.FC = () => {
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
