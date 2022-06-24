import { VStack, HStack, Box } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardCard from '../MemberDashBoardCard';
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
            <MemberDashboardCard borderRadius={40}>
              <GodlScore />
            </MemberDashboardCard>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }} marginLeft="0 !important">
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
