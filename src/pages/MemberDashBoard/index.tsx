import * as React from 'react';

import { Box, VStack } from '@chakra-ui/react';
import HeroLayout from '../../components/layouts/HeroLayout';
import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
import MemberWhiteListLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';

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
      <VStack rowGap="148px" w="full">
        <VStack id="sumarize-impakt-user-section" color="white" w="full">
          <SummarizeImpaktUser />
        </VStack>
        <VStack id="member-whitelist-leaderboard-section" rowGap="44px" w="full">
          <MemberWhiteListLeaderBoard />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default MemberDashBoard;
