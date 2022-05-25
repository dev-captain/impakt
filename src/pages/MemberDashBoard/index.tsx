import * as React from 'react';

import { VStack, Box, Text, HStack } from '@chakra-ui/react';
import HeroLayout from '../../components/layouts/HeroLayout';
import MemberDashBoardHeadlineText from '../../components/ui/MemberDashBoard/MemberDashBoardHeadlineText';
import MemberDashBoardCard from '../../components/ui/MemberDashBoard/MemberDashBoardCard';
import SummarizeImpaktUser from '../../components/ui/MemberDashBoard/SummarizeImpaktUser/SummarizeImpaktUser';
import WhiteListChallange from '../../components/ui/MemberDashBoard/WhiteListChallange/WhiteListChallange';
import Referrals from '../../components/ui/MemberDashBoard/Referrals/Referrals';

const MemberDashBoard: React.FC = () => {
  return (
    <HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      align="flex-start"
      justify="flex-start"
    >
      <VStack color="white" w="full">
        <VStack
          justifyContent="space-between"
          alignItems="flex-start"
          maxW="1200px"
          w="full"
          rowGap="97px"
          mt="97px"
        >
          <Box id="member-dashboard-headline">
            <MemberDashBoardHeadlineText />
          </Box>
          <VStack rowGap="37px" id="member-dasboard-summarize-card" px="2em" w="100%">
            <MemberDashBoardCard isGradient>
              <SummarizeImpaktUser />
            </MemberDashBoardCard>
            <HStack justifyContent="space-between" w="100%" columnGap="32px">
              <Box w="50%">
                <MemberDashBoardCard>
                  <WhiteListChallange />
                </MemberDashBoardCard>
              </Box>
              <Box w="50%">
                <MemberDashBoardCard>
                  <Referrals referralLink="impakt.com/duke-nuke-ref" />
                </MemberDashBoardCard>
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default MemberDashBoard;
