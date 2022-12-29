import React from 'react';
import { Box, Skeleton, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { usePersistedAuthStore, usePersistedGroupStore } from '@/lib/zustand';
import ExploreGroup from '@/components/ui/MemberDashBoard/Group/Groups/ExploreGroupCard/ExploreGroupCard';
import { useGroupsControllerV1ExploreGroups } from '@/lib/impakt-dev-api-client/react-query/groups/groups';
import { getDefaultQueryOptions } from '@/lib/impakt-dev-api-client/utils';
import { isProduction } from '@/utils';
import { C, Common, I } from '@/components';
import { useGuestV1ControllerCreateGuest } from '@/lib/impakt-dev-api-client/react-query/guest/guest';
import Images from '@/assets/images';

const ExploreGroupPage: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const groupsStore = usePersistedGroupStore();

  const createGuest = useGuestV1ControllerCreateGuest();

  const fetchExploreGroups = useGroupsControllerV1ExploreGroups(
    { includeRequests: true, deleted: false },
    {
      query: {
        enabled: !!member,
        ...getDefaultQueryOptions(),
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
  );

  React.useEffect(() => {
    if (!member) {
      const createGuestAsync = async () => {
        createGuest.mutate(
          { data: { screenName: 'explore-group-guest' } },
          {
            onSuccess: async () => {
              groupsStore.setRole('Guest');
              await fetchExploreGroups.refetch();
            },
          },
        );
      };
      createGuestAsync();
    }
  }, [member]);

  return (
    <C.SidebarLayout isShowNavbar isShowFooter isShowSidebar={!!member}>
      <MainExplore isLoading={fetchExploreGroups.isLoading} />
    </C.SidebarLayout>
  );
};

export const MainExplore: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();
  const groupsStore = usePersistedGroupStore();

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
        bgImage={Images.Common.communityBanner}
        bgPos="0px 0px"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <VStack spacing="0" rowGap="2em">
          <Box bg={{ base: 'blackAlpha.700', md: 'none' }} borderRadius="1em" textAlign="center">
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
              onClick={(e) => {
                if (isProduction) {
                  e.preventDefault();
                  const isAlreadyMember = groupsStore.myGroups.filter(
                    ({ groupId }) => groupId === 12,
                  );
                  if (isAlreadyMember.length > 0) {
                    navigate('/d/g/12');
                  } else {
                    navigate('/d/g/12', { state: { fromExplore: true } });
                  }
                }
              }}
            >
              <Text textStyle="semibold20" lineHeight="32px">
                View
              </Text>
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

      <Skeleton isLoaded={!isLoading} w="full">
        <ExploreGroup isGuest={groupsStore.role === 'Guest' && !member} />
      </Skeleton>
    </VStack>
  );
};

export default ExploreGroupPage;
