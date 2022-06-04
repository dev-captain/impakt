import * as React from 'react';
import { HStack, Skeleton } from '@chakra-ui/react';

import { useMemberDashBoardContext } from '../../../../context/MemberDashBoardContext';
import { useUserContext } from '../../../../context/UserContext';
import MemberDashBoardUserImage from './MemberDashBoardUserImage';
import MemberDashboardSummarizePoint from './Points';
import MemberDashBoardSummarizeRank from './Rank';

const SummarizeImpaktUserInfo: React.FC = () => {
  const { user } = useUserContext();
  const {
    whitelistLeaderboardBasedMemberTotalScore,
    whitelistLeaderboardMember,
    whitelistLeaderBoardIsLoading,
  } = useMemberDashBoardContext();

  const member = whitelistLeaderboardMember;
  const totalScoreOfUser = member?.totalScore;
  const isNeedMoreScore = totalScoreOfUser
    ? totalScoreOfUser < whitelistLeaderboardBasedMemberTotalScore
    : true;
  const pointDifferanceValue = totalScoreOfUser
    ? Math.abs(whitelistLeaderboardBasedMemberTotalScore - totalScoreOfUser)
    : NaN;

  return (
    <HStack
      flexDir={{ base: 'column', xl: 'row' }}
      padding={{ base: '50px 0', lg: '50px' }}
      justifyContent="center"
      id="summarize-section"
      w="full"
      columnGap="2.5em"
      rowGap="2.5em"
    >
      <MemberDashBoardUserImage />
      <MemberDashBoardSummarizeRank
        nameOfUser={user?.firstName ?? user?.username}
        rankValue={member?.rank.toLocaleString()}
        userId={user?.id}
      />
      <Skeleton isLoaded={!whitelistLeaderBoardIsLoading} borderRadius="8px">
        <MemberDashboardSummarizePoint
          isNeedMore={isNeedMoreScore}
          pointValue={pointDifferanceValue}
        />
      </Skeleton>
    </HStack>
  );
};

export default SummarizeImpaktUserInfo;
