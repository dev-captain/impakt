import * as React from 'react';
import { VStack, Text, Box, Spinner } from '@chakra-ui/react';
import MemberDashboardHeadlineText from '../MemberDashBoardHeadlineText';
import MemberWhiteListLeaderBoardTable from './MemberWhiteListLeaderBoardTable';
import { useUserContext } from '../../../../context/UserContext';
import { useMemberDashBoardContext } from '../../../../context/MemberDashBoardContext';

const MemberWhitelistLeaderBoard: React.FC = () => {
  const { user } = useUserContext();
  const {
    getTopThreeByRank,
    getFiveRanksAboveAndFiveRanksBelowByRank,
    getMemberById,
    memberWhitelistLeaderboardMember,
    fetchUserLeaderboardById,
  } = useMemberDashBoardContext();

  React.useEffect(() => {
    if (!user) return;
    fetchUserLeaderboardById({ userId: user.id });
  }, []);

  const topThree = getTopThreeByRank(memberWhitelistLeaderboardMember);
  const certainMember = getMemberById(memberWhitelistLeaderboardMember, user?.id);
  const fiveRanksAboveAndFiveRanksBelow = getFiveRanksAboveAndFiveRanksBelowByRank(
    memberWhitelistLeaderboardMember,
    certainMember?.rank,
  );

  if (
    !user ||
    topThree.length === 0 ||
    !certainMember ||
    fiveRanksAboveAndFiveRanksBelow.length === 0
  )
    return <Spinner color="#fff" thickness="5px" size="xl" />;

  return (
    <VStack justifyContent="space-between" alignItems="flex-start" maxW="1200px" w="full">
      <VStack rowGap="48.5px" alignItems="flex-start" w="100%">
        <Box
          color="#F5F6FF"
          w="100%"
          textAlign={{ base: 'center', lg: 'left' }}
          id="member-whitelist-headline"
        >
          <MemberDashboardHeadlineText>
            <Text fontWeight="300 !important" display="inline-block">
              Member Whitelist
            </Text>{' '}
            Leaderboard
          </MemberDashboardHeadlineText>
        </Box>
        <VStack w="full" rowGap="48px">
          <Box px="2em" w="100%" id="member-whitelist-table">
            <MemberWhiteListLeaderBoardTable
              currentUserRank={certainMember?.rank}
              showTableHead
              data={topThree}
            />
          </Box>
          <Box px="2em" w="100%" id="member-whitelist-table">
            <MemberWhiteListLeaderBoardTable
              currentUserRank={certainMember?.rank}
              data={fiveRanksAboveAndFiveRanksBelow}
            />
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MemberWhitelistLeaderBoard;
