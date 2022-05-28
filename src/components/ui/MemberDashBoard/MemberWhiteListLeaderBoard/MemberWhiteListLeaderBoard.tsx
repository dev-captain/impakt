import * as React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react';
import MemberDashBoardHeadlineText from '../MemberDashBoardHeadlineText';
import MemberWhiteListLeaderBoardTable from './MemberWhiteListLeaderBoardTable';

const MemberWhiteListLeaderBoard: React.FC = () => {
  return (
    <VStack justifyContent="space-between" alignItems="flex-start" maxW="1200px" w="full">
      <VStack rowGap="48.5px" alignItems="flex-start" w="100%">
        <Box
          color="#F5F6FF"
          w="100%"
          textAlign={{ base: 'center', lg: 'left' }}
          id="member-whitelist-headline"
        >
          <MemberDashBoardHeadlineText>
            <Text fontWeight="300 !important" display="inline-block">
              Member Whitelist
            </Text>{' '}
            Leaderboard
          </MemberDashBoardHeadlineText>
        </Box>
        <VStack w="full" rowGap="48px">
          <Box px="2em" w="100%" id="member-whitelist-table">
            <MemberWhiteListLeaderBoardTable
              currentUserRank={3}
              isShowTableHead
              data={dummyLeaderBoardData1}
            />
          </Box>
          <Box px="2em" w="100%" id="member-whitelist-table">
            <MemberWhiteListLeaderBoardTable currentUserRank={3} data={dummyLeaderBoardData2} />
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};

const dummyLeaderBoardData2 = [
  {
    rank: 15,
    memberName: 'Valtec',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 16,
    memberName: 'CapnCrunc',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 17,
    memberName: 'Demideus',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 18,
    memberName: 'Valtec',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 19,
    memberName: 'Valtec',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 20,
    memberName: 'Valtec',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 21,
    memberName: 'Demideus',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
];

const dummyLeaderBoardData1 = [
  {
    rank: 1,
    memberName: 'CapnCrunc',
    personalScore: '20,000',
    referrals: '7',
    referralsScore: '12,023',
    totalScore: '22,000',
  },
  {
    rank: 2,
    memberName: 'Demideus',
    personalScore: '7,000',
    referrals: '12',
    referralsScore: '15,000',
    totalScore: '22,000',
  },
  {
    rank: 3,
    memberName: 'Valtec',
    personalScore: '10,000',
    referrals: '10',
    referralsScore: '11,103',
    totalScore: '21,100',
  },
];
export default MemberWhiteListLeaderBoard;
