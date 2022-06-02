import { VStack, HStack, Box } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashBoardCard from '../MemberDashBoardCard';
import MemberDashBoardHeadlineText from '../MemberDashBoardHeadlineText';
import Referrals from './Referrals';
import WhiteListChallange from './WhiteListChallange';

interface PropsI {}
const ReferralsAndWhiteListChallange: React.FC<PropsI> = () => {
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
        <MemberDashBoardHeadlineText>Whitelist & Referrals</MemberDashBoardHeadlineText>
        <HStack
          flexDir={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          w="100%"
          rowGap="32px"
          columnGap="32px"
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
export default ReferralsAndWhiteListChallange;
