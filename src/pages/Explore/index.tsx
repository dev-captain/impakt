import React, { useEffect } from 'react';
import { Box, Skeleton, Text, VStack } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../lib/zustand';
import ExploreGroup from '../../components/ui/MemberDashBoard/Group/Groups/ExploreGroupCard/ExploreGroupCard';
import { useGroupsControllerV1ExploreGroups } from '../../lib/impakt-dev-api-client/react-query/groups/groups';
import { getDefaultQueryOptions } from '../../lib/impakt-dev-api-client/utils';
import { isProduction, renderToast } from '../../utils';
import { Common, I } from '../../components';

const ExploreGroupPage: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (member) {
      navigate('/d/g');
    }
  }, []);

  return (
    <VStack align="flex-start" justify="flex-start" minH="100vh">
      <VStack maxW="1200px" w="full" align="center" mt="48px" marginLeft="auto" marginRight="auto">
        <Outlet />
      </VStack>
    </VStack>
  );
};

export const MainExplore = () => {
  const { member } = usePersistedAuthStore();
  const groupsStore = usePersistedGroupStore();

  const fetchExploreGroups = useGroupsControllerV1ExploreGroups(
    { includeRequests: true, deleted: false },
    {
      query: {
        ...getDefaultQueryOptions(),
        enabled: !member,
        onSuccess: (exploreG) => {
          const sortByAlphabetExploreGroups = exploreG.sort((a, b) => {
            if (a.groupName.toUpperCase() < b.groupName.toUpperCase()) {
              return -1;
            }
            if (a.groupName.toUpperCase() > b.groupName.toUpperCase()) {
              return 1;
            }

            return 0;
          });
          groupsStore.setExploreGroups(sortByAlphabetExploreGroups);
        },
      },
    },
  ); // TODO update zustand explore groups

  return (
    <VStack p="1em" rowGap="80px" w="full" align="flex-start">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="extra"
        borderRadius="2em"
        p="2em"
        h="232px"
        w="full"
        bgColor="#22363F"
        position="relative"
      >
        <VStack spacing="0" rowGap="2em">
          <Box textAlign="center">
            <Text textStyle="TitleBold48" color="white" fontWeight="500" letterSpacing="-1.5px">
              Join our community
            </Text>
          </Box>
          <Box>
            <Common.ImpaktButton
              as="a"
              href={isProduction ? '/d/g/12' : 'https://community.impakt.com/'}
              borderRadius="12px"
              p="12px 48px"
              h="56px"
              variant="orange"
            >
              <Text>View</Text>
            </Common.ImpaktButton>
          </Box>
        </VStack>
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          right="2em"
          top="calc(50% - 80px/2);"
        >
          <I.VSportByImpaktIcon isWhite />
        </Box>
      </Box>
      <Box w="full">
        <Skeleton isLoaded={!fetchExploreGroups.isLoading}>
          <ExploreGroup isGuest />
        </Skeleton>
      </Box>
    </VStack>
  );
};

export const GuestExplore: React.FC = ({ children }) => {
  const guestClickListener = () => {
    renderToast('warning', 'To see details you must be signed in first', 'white', 1000);
  };

  useEffect(() => {
    window.addEventListener('click', guestClickListener);

    return () => window.removeEventListener('click', guestClickListener);
  }, []);

  return (
    <Box w="full" p={{ base: '1em', md: 'none' }}>
      {children}
    </Box>
  );
};

export default ExploreGroupPage;
