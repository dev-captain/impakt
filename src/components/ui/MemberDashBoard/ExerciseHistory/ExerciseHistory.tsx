import { VStack, HStack, Box, SimpleGrid } from '@chakra-ui/react';
import useAppSelector from 'hooks/useAppSelector';
import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { fetchRewardHistory } from 'lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
import ExercisesList from './ExercisesList';
import MemberDashboardCard from '../MemberDashBoardCard';

const ExerciseHistory: React.FC = () => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const excerciseStatistics = useAppSelector(
    (state) => state.rewardHistoryReducer.rewardHistoryState,
  );
  React.useEffect(() => {
    if (member) {
      dispatch(fetchRewardHistory(member.id));
    }
  }, []);

  return (
    <MemberDashboardCard>
      <VStack
        rowGap="37px"
        id="member-dasboard-whitelist-referrals-card"
        px={{ base: '10px' }}
        flexDir={{ base: 'column', md: 'row' }}
        w={{ base: '100%', md: '720px' }}
      >
        <SimpleGrid columns={{ base: 1 }} gap={5}>
          <Box marginLeft="0 !important">
            <ExercisesList excerciseStatistics={excerciseStatistics} />
          </Box>
        </SimpleGrid>
      </VStack>
    </MemberDashboardCard>
  );
};
export default ExerciseHistory;
