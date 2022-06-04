import * as React from 'react';
import { HStack, Spinner } from '@chakra-ui/react';

import { useMemberDashBoardContext } from '../../../../context/MemberDashBoardContext';
import { useUserContext } from '../../../../context/UserContext';
import MemberDashBoardUserImage from './MemberDashBoardUserImage';
import MemberDashboardSummarizePoint from './Points';
import MemberDashBoardSummarizeRank from './Rank';

const SummarizeImpaktUserInfo: React.FC = () => {
  const { user } = useUserContext();
  const {
    fetchBasedRankMemberInfo,
    memberWhitelistLeaderboardBasedMember,
    memberWhitelistLeaderboardMember,
    getMemberById,
  } = useMemberDashBoardContext();

  React.useEffect(() => {
    fetchBasedRankMemberInfo();
  }, []);

  const userScoreInfo = getMemberById(memberWhitelistLeaderboardMember, user?.id);
  const totalScoreOfUser = userScoreInfo?.totalScore;
  const isNeedMoreScore = totalScoreOfUser < memberWhitelistLeaderboardBasedMember?.totalScore;

  const pointDifferanceValue = memberWhitelistLeaderboardBasedMember
    ? Math.abs(memberWhitelistLeaderboardBasedMember.totalScore - totalScoreOfUser)
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
        rankValue={userScoreInfo?.rank}
        userId={user?.id}
      />
      {!memberWhitelistLeaderboardBasedMember || !userScoreInfo ? (
        <Spinner />
      ) : (
        <MemberDashboardSummarizePoint
          isNeedMore={isNeedMoreScore}
          pointValue={pointDifferanceValue}
        />
      )}
    </HStack>
  );
};

export default SummarizeImpaktUserInfo;
