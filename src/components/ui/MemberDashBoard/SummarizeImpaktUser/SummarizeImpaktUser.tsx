import { VStack, Box, HStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardCard from '../MemberDashBoardCard';
import MemberDashBoardHeadlineText from '../MemberDashBoardHeadlineText';
import Referrals from './Referrals';
import SummarizeImpaktUserInfo from './SummarizeImpaktUserInfo';
import WhiteListChallange from './WhiteListChallange';

const SummarizeImpaktUser: React.FC = () => {
  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1200px"
      w="full"
      rowGap="97px"
      mt="97px"
    >
      <VStack rowGap="37px" id="member-dasboard-summarize-card" px="2em" w="100%">
        <MemberDashBoardCard isGradient>
          <SummarizeImpaktUserInfo />
        </MemberDashBoardCard>
        <HStack
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          w="100%"
          columnGap="32px"
          rowGap="32px"
        >
          <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashBoardCard>
              <WhiteListChallange />
            </MemberDashBoardCard>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }}>
            <MemberDashBoardCard>
              <Referrals />
            </MemberDashBoardCard>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SummarizeImpaktUser;
