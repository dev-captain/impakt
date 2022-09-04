import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import MyGroupCardWrapper from './MyGroupCard/MyGroupCardWrapper';
import MyGroupCardWrapperHeader from './MyGroupCard/MyGroupCardWrapperHeader';
import GroupRequestCardWrapperHeader from './GroupRequestCard/GroupRequestCardWrapperHeader';
import GroupRequestCardWrapper from './GroupRequestCard/GroupRequestCardWrapper';
import ExploreGroupCardWrapper from './ExploreGroupCard/ExploreGroupCardWrapper';
import ExploreGroupCardWrapperHeader from './ExploreGroupCard/ExploreGroupCardWrapperHeader';

const Groups: React.FC = () => {
  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <VStack alignItems="flex-start" rowGap="1em" justifyContent="flex-start" w="full">
        <MyGroupCardWrapperHeader />
        <MyGroupCardWrapper />
        <GroupRequestCardWrapperHeader />
        <GroupRequestCardWrapper />
        <ExploreGroupCardWrapperHeader />
        <ExploreGroupCardWrapper />
      </VStack>
    </Box>
  );
};
export default Groups;
