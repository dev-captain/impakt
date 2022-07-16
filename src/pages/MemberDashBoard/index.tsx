import * as React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';

import { WelcomeModal, Referrals } from 'components/ui/MemberDashBoard';
import { C } from 'components';
// import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
// import MemberWhitelistLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
// import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
import MemberDashboardCard from '../../components/ui/MemberDashBoard/MemberDashBoardCard';

const MemberDashboard: React.FC = () => {
  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      align="flex-start"
      justify="flex-start"
      showDarkOrLightModeButton={false}
    >
      <VStack rowGap="74px" w="full">
        <VStack id="referrals-impakt-section" color="white" w="full">
          <VStack
            justifyContent="space-between"
            alignItems="flex-start"
            maxW="1200px"
            w="full"
            rowGap="97px"
            mt="5.125em"
          >
            <VStack
              rowGap="37px"
              id="member-dasboard-whitelist-referrals-card"
              px={{ base: '10px' }}
              w="100%"
            >
              <HStack
                flexDir={{ base: 'column', lg: 'row' }}
                justifyContent="space-between"
                alignItems="start"
                w="100%"
                rowGap="32px"
                columnGap="32px"
              >
                <Box w={{ base: '100%', lg: '50%' }}>
                  <MemberDashboardCard>
                    <WelcomeModal />
                  </MemberDashboardCard>
                </Box>

                <Box w={{ base: '100%', lg: '50%' }} marginLeft="0 !important">
                  <MemberDashboardCard>
                    <Referrals />
                  </MemberDashboardCard>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
        {/* <VStack id="summarize-impakt-user-section" color="white" w="full">
            <SummarizeImpaktUser />
          </VStack> */}

        {/* <Divider w="75%" />

          <VStack id="impakt-investment-section" color="white" w="full">
            <Investment />
          </VStack> */}

        {/* <Divider w="75%" /> */}

        {/* <VStack id="referrals-impakt-section" color="white" w="full">
            <ReferralsAndWhiteListChallange />
          </VStack> */}

        {/* <VStack id="member-whitelist-leaderboard-section" rowGap="44px" w="full">
            <MemberWhitelistLeaderBoard />
          </VStack> */}
      </VStack>
    </C.HeroLayout>
  );
};

export default MemberDashboard;
