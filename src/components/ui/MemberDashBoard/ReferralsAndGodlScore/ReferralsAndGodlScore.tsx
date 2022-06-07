import { VStack, HStack, Box } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardCard from '../MemberDashBoardCard';
import MemberDashboardHeadlineText from '../MemberDashBoardHeadlineText';
import Referrals from './Referrals';
import GodlScore from './GodlScore';

const ReferralsAndGodlScore: React.FC = () => {
  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1200px"
      w="full"
      rowGap="97px"
    >
      <VStack
        rowGap="37px"
        id="member-dasboard-whitelist-referrals-card"
        px={{ base: '10px', lg: '2em' }}
        w="100%"
      >
        <MemberDashboardHeadlineText>Whitelist & Referrals</MemberDashboardHeadlineText>
        <HStack
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          w="100%"
          rowGap="32px"
          columnGap="32px"
        >
          <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashboardCard borderRadius={40} isGradient>
              <GodlScore />
            </MemberDashboardCard>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashboardCard borderRadius={40}>
              <Referrals />
            </MemberDashboardCard>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};
export default ReferralsAndGodlScore;
