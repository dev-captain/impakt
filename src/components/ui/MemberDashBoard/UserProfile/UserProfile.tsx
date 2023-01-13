import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import { usePersistedAuthStore } from '../../../../lib/zustand';
import ProfileLeftSide from './ProfileLeftSide';
import ProfileRightSide from './ProfileRightSide';

const UserProfile: React.FC = () => {
  const { member } = usePersistedAuthStore();

  return (
    <>
      <Box
        w="full"
        as="section"
        id="general-section"
      >
        <MemberDashboardSectionHeadlineText title="Profile" />
        <HStack mt="2em" flexWrap="wrap" columnGap="1em" rowGap={{ base: '18px', lg: '32px' }}>
          <ProfileLeftSide />
          <ProfileRightSide />
        </HStack>
      </Box>
    </>
  );
};

export default UserProfile;
