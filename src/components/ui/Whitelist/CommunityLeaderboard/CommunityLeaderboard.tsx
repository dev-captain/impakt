import * as React from 'react';
import { C } from 'components';
import { VStack, Box } from '@chakra-ui/react';
import CommunityLeaderboardTable from './CommunityLeaderboardTable';
import CommunityLeaderboardHeadlineText from './CommunityLeaderboardHeadlineText';

const CommunityLeaderboard: React.FC = () => {
  return (
    <C.HeroLayout
      removeTopPadding
      minH="100vh"
      align="flex-start"
      justify="flex-start"
      bgColor="#0A0A0B"
    >
      <VStack w="full" px="16px">
        <VStack maxW="1200px" w="full">
          <VStack rowGap="1.5em" w="full">
            <Box
              w={{ base: '100%', lg: '60%' }}
              textAlign={{ base: 'center', lg: 'left' }}
              id="community-leaderboard-headline-box"
            >
              <CommunityLeaderboardHeadlineText />
            </Box>
            <Box w={{ base: '100%', lg: '60%' }}>
              <CommunityLeaderboardTable />
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default CommunityLeaderboard;
