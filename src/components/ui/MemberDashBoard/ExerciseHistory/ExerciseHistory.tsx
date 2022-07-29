import { VStack, Box, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import ExercisesList from './ExercisesList';

const ExerciseHistory: React.FC = () => {
  return (
    <VStack
      rowGap="37px"
      id="member-dasboard-whitelist-referrals-card"
      flexDir={{ base: 'column', md: 'row' }}
      w="100%"
    >
      <SimpleGrid columns={{ base: 1 }} gap={5}>
        <Box marginLeft="0 !important">
          <ExercisesList />
        </Box>
      </SimpleGrid>
    </VStack>
    // </MemberDashboardCard>
  );
};
export default ExerciseHistory;
