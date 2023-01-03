import React from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardCard from '../MemberDashBoardCard';

const UserProfile: React.FC = () => {
  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
      <MemberDashboardSectionHeadlineText title="Profile" />
      <HStack mt="2em" flexWrap="wrap" columnGap="1em">
        <MemberDashboardCard maxW={{ base: '100%', md: '540px' }}>
          <VStack>
            <Text>Left</Text>
          </VStack>
        </MemberDashboardCard>
        <MemberDashboardCard maxW={{ base: '100%', md: '540px' }}>
          <Text>Right</Text>
        </MemberDashboardCard>
      </HStack>
    </Box>
  );
};
export default UserProfile;
