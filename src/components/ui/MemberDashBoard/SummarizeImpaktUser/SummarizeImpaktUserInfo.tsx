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
    basedMemberInfoByRank,
    memberDashBoarCertainUserData,
    getCertainMemberById,
  } = useMemberDashBoardContext();

  React.useEffect(() => {
    fetchBasedRankMemberInfo();
  }, []);

  const userScoreInfo = getCertainMemberById(memberDashBoarCertainUserData, 155);
  const totalScoreOfUser = userScoreInfo?.totalScore;
  const isNeedMoreScore = totalScoreOfUser < basedMemberInfoByRank?.totalScore;
  const pointValue = basedMemberInfoByRank
    ? Math.abs(basedMemberInfoByRank.totalScore - totalScoreOfUser).toLocaleString()
    : '0';

  return (
    <HStack
      flexDir={{ base: 'column', lg: 'row' }}
      padding="50px"
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
      />
      {!basedMemberInfoByRank || !userScoreInfo ? (
        <Spinner />
      ) : (
        <MemberDashboardSummarizePoint isNeedMore={isNeedMoreScore} pointValue={pointValue} />
      )}
    </HStack>
  );
};

export default SummarizeImpaktUserInfo;
