import * as React from 'react';
import { C } from 'components';
import { VStack, Box } from '@chakra-ui/react';
import CommunityLeaderboardTable from './IndividualLeaderboardTable';
import IndividualLeaderboardHeadlineText from './IndividualLeaderboardHeadlineText';

const IndividualLeaderboard: React.FC = () => {
  return (
    <C.HeroLayout minH="100vh" align="flex-start" justify="flex-start" bgColor="#0A0A0B">
      <VStack w="full" px="16px">
        <VStack maxW="1200px" w="full">
          <VStack rowGap="1.5em" w="full">
            <Box
              w={{ base: '100%', lg: '60%' }}
              textAlign={{ base: 'center', lg: 'left' }}
              id="community-leaderboard-headline-box"
            >
              <IndividualLeaderboardHeadlineText />
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

export default IndividualLeaderboard;
