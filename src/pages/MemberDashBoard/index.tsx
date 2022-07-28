import * as React from 'react';
// import { Box, HStack, VStack } from '@chakra-ui/react';

import { C } from 'components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGodlBalanceScore } from '../../lib/redux/slices/godl/actions/fetchGodlBalanceScore';
import { fetchActiveDays } from '../../lib/redux/slices/fitness/actions/fetchActiveDays';
import { getWhiteListed } from '../../lib/redux/slices/whitelist/actions/getWhiteListed';
import { fetchRewardHistory } from '../../lib/redux/slices/rewardHistory/actions/fetchRewardHistory';
// import { VStack } from '@chakra-ui/react';
// import ExerciseHistory from 'components/ui/MemberDashBoard/ExerciseHistory/ExerciseHistory';
// import HeroLayout from '../../components/layouts/HeroLayout';
// import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
// import MemberWhitelistLeaderBoard from '../../components/ui/MemberDashBoard/MemberWhiteListLeaderBoard/MemberWhiteListLeaderBoard';
// import ReferralsAndWhiteListChallange from '../../components/ui/MemberDashBoard/ReferralsAndWhiteListChallange/ReferralsAndWhiteListChallange';
// import MemberDashboardCard from '../../components/ui/MemberDashBoard/MemberDashBoardCard';

const MemberDashboard: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGodlBalanceScore());
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(fetchActiveDays(member.id));
    }
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(getWhiteListed());
    }
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(fetchRewardHistory(member.id));
    }
  }, []);

  return (
    <C.SidebarLayout isShowNavbar />
    // <HeroLayout
    //   showNavbar
    //   minH="70vh"
    //   spacing={10}
    //   pos="relative"
    //   align="flex-start"
    //   justify="flex-start"
    //   showDarkOrLightModeButton={false}
    // >
    //   <VStack rowGap="74px" w="full">
    //     <VStack id="referrals-impakt-section" color="white" w="full">
    //       <ReferralsAndGodlScore />
    //     </VStack>
    //     <VStack id="referrals-impakt-section" color="white" w="full">
    //       <ExerciseHistory />
    //     </VStack>
    //     {/* <VStack id="summarize-impakt-user-section" color="white" w="full">
    //         <SummarizeImpaktUser />
    //       </VStack> */}

    //     {/* <Divider w="75%" />

    //       <VStack id="impakt-investment-section" color="white" w="full">
    //         <Investment />
    //       </VStack> */}

    //     {/* <Divider w="75%" /> */}

    //     {/* <VStack id="referrals-impakt-section" color="white" w="full">
    //         <ReferralsAndWhiteListChallange />
    //       </VStack> */}

    //     {/* <VStack id="member-whitelist-leaderboard-section" rowGap="44px" w="full">
    //         <MemberWhitelistLeaderBoard />
    //       </VStack> */}
    //   </VStack>
    // </HeroLayout>
  );
};

export default MemberDashboard;
