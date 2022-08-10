import * as React from 'react';
import { C } from 'components';
import { VStack, Box } from '@chakra-ui/react';
import CommunityLeaderboardTable from './CommunityLeaderboardTable';
import CommunityLeaderboardHeadlineText from './CommunityLeaderboardHeadlineText';

const CommunityLeaderboard: React.FC = () => {
  return (
    <C.HeroLayout showNavbar minH="100vh" align="flex-start" justify="flex-start" bgColor="#0A0A0B">
      <VStack w="full" px="16px">
        <VStack maxW="1200px" w="full">
          <VStack rowGap="1.5em" w="full">
            <Box w="60%" id="community-leaderboard-headline-box">
              <CommunityLeaderboardHeadlineText />
            </Box>
            <Box w="60%">
              <CommunityLeaderboardTable />
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default CommunityLeaderboard;
