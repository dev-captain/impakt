import * as React from 'react';

import { Divider, VStack } from '@chakra-ui/react';
import HeroLayout from '../../components/layouts/HeroLayout';
import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
import MemberWhitelistLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
import Investment from '../../components/ui/MemberDashBoard/Investment/Investment';
import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
import { MemberDashboardContextProvider } from '../../context/MemberDashBoardContext';

const MemberDashboard: React.FC = () => {
  return (
    <HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      align="flex-start"
      justify="flex-start"
      showFooter
      showDarkOrLightModeOnNavbar={false}
    >
      <MemberDashboardContextProvider>
        <VStack rowGap="74px" w="full">
          <VStack id="summarize-impakt-user-section" color="white" w="full">
            <SummarizeImpaktUser />
          </VStack>

          <Divider w="75%" />

          <VStack id="impakt-investment-section" color="white" w="full">
            <Investment />
          </VStack>

          <Divider w="75%" />

          <VStack id="referrals-impakt-section" color="white" w="full">
            <ReferralsAndWhiteListChallange />
          </VStack>

          <VStack id="member-whitelist-leaderboard-section" rowGap="44px" w="full">
            <MemberWhitelistLeaderBoard />
          </VStack>
        </VStack>
      </MemberDashboardContextProvider>
    </HeroLayout>
  );
};

export default MemberDashboard;
