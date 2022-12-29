import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
// import { useAppSelector } from '@/hooks';

import MyGroupCard from './MyGroupCard/MyGroupCard';
import MyGroupCardHeader from './MyGroupCard/Header/MyGroupCardHeader';

const Groups: React.FC = () => {
  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <VStack alignItems="flex-start" spacing="0" rowGap="5em" justifyContent="flex-start" w="full">
        {/* Your groups  section */}
        <Box mb="50px !important" maxW="1200px" w="full" as="section" id="your-groups-section">
          <MyGroupCardHeader />
          <MyGroupCard />
        </Box>
      </VStack>
    </Box>
  );
};
export default Groups;
