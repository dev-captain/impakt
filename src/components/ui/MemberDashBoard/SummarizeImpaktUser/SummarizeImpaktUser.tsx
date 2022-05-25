import { HStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardUserImage from './MemberDashBoardUserImage';
import MemberDashboardSummarizePoint from './Points';
import MemberDashBoardSummarizeRank from './Rank';

const SummarizeImpaktUser: React.FC = () => {
  return (
    <HStack padding="96px 79px 96px 96px" id="summarize-section" w="full" columnGap="2.5em">
      <MemberDashBoardUserImage />
      <MemberDashBoardSummarizeRank nameOfUser="Duke Nuke" rankValue="3" statusOfUser="Talent" />
      <MemberDashboardSummarizePoint isNeedMore={false} pointValue="12700" />
    </HStack>
  );
};

export default SummarizeImpaktUser;
