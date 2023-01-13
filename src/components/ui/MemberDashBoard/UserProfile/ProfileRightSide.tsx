import React from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import MemberDashboardCard from '../MemberDashBoardCard';
import { usePersistedAuthStore } from '../../../../lib/zustand';
import {
  WarningIcon,
} from '@chakra-ui/icons';

const UserProfileLeftSide: React.FC = () => {
  const { member } = usePersistedAuthStore();

  return (
    <>
      <MemberDashboardCard
        maxW={{ base: '100%', md: '588px' }}
        p={{ base: '1.5em', md: '2em' }}
        marginLeft={{ base: '0px !important', md: '8px' }}
      >
        <VStack spacing="0" rowGap="24px" w="full" justifyContent="space-between">
          {/* <HStack
            display="flex"
            gap="16px"
            flexWrap="wrap"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              backgroundColor="rgba(242, 121, 97, 0.1)"
              textAlign="center"
              borderRadius="17px"
              w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
            >
              <Text fontSize="32px" fontWeight="900" color="#CC4C33" padding="12px 0 0 0">
                1,200
              </Text>
              <Text
                color="#CC4C33"
                fontWeight="500"
                fontSize="16px"
                padding="0 12px 12px 12px"
                opacity="1"
              >
                Koin Balance
              </Text>
            </Box>
            <Box
              backgroundColor="#F5F8FA"
              textAlign="center"
              borderRadius="17px"
              w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
              marginLeft="0px !important"
            >
              <Text fontSize="32px" fontWeight="900" padding="12px 0 0 0">
                9,800
              </Text>
              <Text
                fontWeight="500"
                fontSize="16px"
                padding="0 12px 12px 12px"
                color="rgba(114, 139, 163, 1)"
              >
                GODL Balance
              </Text>
            </Box>
            <Box
              backgroundColor="#F5F8FA"
              textAlign="center"
              borderRadius="17px"
              w={{ base: '100%', md: '30%', lg: '155px', xl: '155px' }}
              marginLeft="0px !important"
            >
              <Box>
                <Text fontSize="32px" fontWeight="900" padding="12px 0 0 0">
                  47
                </Text>
                <Text
                  fontWeight="500"
                  fontSize="16px"
                  padding="0 12px 12px 12px"
                  color="rgba(114, 139, 163, 1)"
                >
                  Active Days
                </Text>
              </Box>
            </Box>
          </HStack> */}
          <HStack>
            <Box>
              <Image
                src="../../../../src/assets/images/avatar.png"
                width="16.25rem"
                height="inherit"
                alt="Dan Abramov"
              />
            </Box>
          </HStack>
          <HStack>
            <Box
              backgroundColor="rgba(242, 121, 97, 0.1)"
              padding="10px"
              display="inline-flex"
              borderRadius="5px"
            >
              <WarningIcon color="rgba(204, 76, 51, 1)" margin="auto 9px"></WarningIcon>
              <Text fontSize="14px" color="rgba(204, 76, 51, 1)" fontWeight="400">
                Soon you'll be able to customize and play as your avatar.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </MemberDashboardCard>
    </>
  );
};

export default UserProfileLeftSide;
