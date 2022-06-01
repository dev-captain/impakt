import * as React from 'react';

import { Divider, VStack } from '@chakra-ui/react';
import HeroLayout from '../../components/layouts/HeroLayout';
import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
import MemberWhiteListLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
import Investment from '../../components/ui/MemberDashBoard/Investment/Investment';
import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
import { MemberDashBoardContextProvider } from '../../context/MemberDashBoardContext';

const MemberDashBoard: React.FC = () => {
  return (
    <HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      align="flex-start"
      justify="flex-start"
      showFooter
    >
      <MemberDashBoardContextProvider>
        <VStack rowGap="74px" w="full">
          <VStack id="sumarize-impakt-user-section" color="white" w="full">
            <SummarizeImpaktUser />
          </VStack>

          <Divider w="75%" />

          <VStack id="sumarize-impakt-investment-section" color="white" w="full">
            <Investment />
          </VStack>

          <Divider w="75%" />

          <VStack id="sumarize-impakt-user-section" color="white" w="full">
            <ReferralsAndWhiteListChallange />
          </VStack>

          <VStack id="member-whitelist-leaderboard-section" rowGap="44px" w="full">
            <MemberWhiteListLeaderBoard />
          </VStack>
        </VStack>
      </MemberDashBoardContextProvider>
    </HeroLayout>
  );
};

export default MemberDashBoard;
