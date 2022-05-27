import { HStack } from '@chakra-ui/react';
import * as React from 'react';
import { useUserContext } from '../../../../context/UserContext';
import MemberDashBoardUserImage from './MemberDashBoardUserImage';
import MemberDashboardSummarizePoint from './Points';
import MemberDashBoardSummarizeRank from './Rank';

const SummarizeImpaktUserInfo: React.FC = () => {
  const { user } = useUserContext();

  return (
    <HStack
      flexDir={{ base: 'column', lg: 'row' }}
      padding="96px 79px 96px 96px"
      id="summarize-section"
      w="full"
      columnGap="2.5em"
      rowGap="2.5em"
    >
      <MemberDashBoardUserImage />
      <MemberDashBoardSummarizeRank
        nameOfUser={user?.firstName ?? user?.username}
        rankValue="3"
        // statusOfUser="Talent"
      />
      <MemberDashboardSummarizePoint isNeedMore pointValue="+15600" />
    </HStack>
  );
};

export default SummarizeImpaktUserInfo;
