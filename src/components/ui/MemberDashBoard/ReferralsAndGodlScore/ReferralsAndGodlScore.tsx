import { VStack, HStack, Box, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';

import MemberDashboardCard from '../MemberDashBoardCard';
import WhiteList from '../ExerciseAndHowToWL/WhiteList';
import Referrals from './Referrals';
import GodlScore from './GodlScore';
import Excercise from '../ExerciseAndHowToWL/Exercise';

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
      <HStack
        flexDir={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="start"
        w="100%"
        rowGap="32px"
        columnGap="32px"
        columns={{ base: 1, md: 2 }}
      >
        <VStack
          rowGap="37px"
          id="member-dasboard-whitelist-referrals-card"
          px={{ base: '10px' }}
          flexDir={{ base: 'column', md: 'row' }}
          w="100%"
        >
          <SimpleGrid columns={{ base: 1 }} gap={5}>
            <Box>
              <MemberDashboardCard>
                <GodlScore />
              </MemberDashboardCard>
            </Box>
            <Box marginLeft="0 !important">
              <MemberDashboardCard>
                <Referrals />
              </MemberDashboardCard>
            </Box>
          </SimpleGrid>
        </VStack>
        <VStack
          rowGap="37px"
          id="member-dasboard-whitelist-referrals-card"
          px={{ base: '10px' }}
          // flexDir={{ base: 'row' }}
          w="100%"
        >
          <SimpleGrid columns={{ base: 1 }} gap={5} width="100%">
            <Box>
              <MemberDashboardCard>
                <WhiteList />
              </MemberDashboardCard>
            </Box>
            <Box>
              <MemberDashboardCard>
                <Excercise />
              </MemberDashboardCard>
            </Box>
          </SimpleGrid>

          {/* <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashboardCard>
              <GodlScore />
            </MemberDashboardCard>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashboardCard>
              <WhiteList />
            </MemberDashboardCard>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }} marginLeft="0 !important">
            <MemberDashboardCard>
              <Referrals />
            </MemberDashboardCard>
          </Box> */}
        </VStack>
      </HStack>
    </VStack>
  );
};
export default ReferralsAndGodlScore;
