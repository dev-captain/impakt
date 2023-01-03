import React from 'react';
import { Box, HStack, VStack, Divider, Avatar } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardCard from '../MemberDashBoardCard';
import { usePersistedAuthStore } from '../../../../lib/zustand';
import { Common, I } from '../../..';

const UserProfile: React.FC = () => {
  const { member } = usePersistedAuthStore();

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
        <MemberDashboardCard p="0" maxW={{ base: '100%', md: '540px' }}>
          <VStack spacing="0" rowGap="2em" w="full">
            <VStack
              rowGap="40px"
              pt={{ base: '1.5em', lg: '2em' }}
              justify="center"
              align="center"
              w="full"
            >
              <Box>
                <Avatar
                  boxShadow="extra"
                  width="160px"
                  border="8px solid #fff"
                  height="160px"
                  size="2xl"
                  name={member?.firstName?.replace(' ', '') ?? member?.username?.replace(' ', '')}
                />
              </Box>
              <HStack>
                <Common.ImpaktButton
                  p="1em"
                  w="160px"
                  leftIcon={<I.UploadIcon />}
                  variant="white-50"
                >
                  Upload
                </Common.ImpaktButton>
                <Common.ImpaktButton
                  p="1em"
                  w="160px"
                  leftIcon={<I.CloseIcon width="20px" />}
                  variant="white-50"
                  fontWeight="bold"
                >
                  Remove
                </Common.ImpaktButton>
              </HStack>
            </VStack>
            <Divider />
            <HStack align="center" justify="center" w="full">
              <Box>member name</Box>
              <Box>id </Box>
              <Box>save</Box>
            </HStack>
            <Divider />
            <HStack align="center" justify="center" w="full">
              <Box>email</Box>
              <Box>change email</Box>
            </HStack>
            <Divider />
            <HStack
              pr={{ base: '1.5em', lg: '2em' }}
              pb={{ base: '1.5em', lg: '2em' }}
              align="center"
              justify="flex-end"
              w="full"
            >
              <Box>change password</Box>
              <Box>sign out</Box>
            </HStack>
          </VStack>
        </MemberDashboardCard>
        <MemberDashboardCard maxW={{ base: '100%', md: '540px' }}>
          <VStack spacing="0" rowGap="24px" w="full">
            <HStack>
              <Box>Labels</Box>
            </HStack>
            <HStack>
              <Box>Image</Box>
            </HStack>
            <HStack>
              <Box>Footer</Box>
            </HStack>
          </VStack>
        </MemberDashboardCard>
      </HStack>
    </Box>
  );
};
export default UserProfile;
