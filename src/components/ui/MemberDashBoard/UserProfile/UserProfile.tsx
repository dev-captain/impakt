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
      <HStack>
        <MemberDashboardCard>
          <VStack>
            <Text>Left</Text>
          </VStack>
        </MemberDashboardCard>
        <MemberDashboardCard>
          <Text>Right</Text>
        </MemberDashboardCard>
      </HStack>
    </Box>
  );
};
export default UserProfile;
