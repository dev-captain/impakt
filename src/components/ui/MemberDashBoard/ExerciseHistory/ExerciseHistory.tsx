import { VStack, HStack, Box, SimpleGrid } from '@chakra-ui/react';
import useAppSelector from 'hooks/useAppSelector';
import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { fetchRewardHistory } from 'lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
import ExercisesList from './ExercisesList';
import MemberDashboardCard from '../MemberDashBoardCard';

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
