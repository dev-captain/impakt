import React, { useEffect } from 'react';
import { Skeleton, VStack } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../lib/zustand';
import ExploreGroup from '../../components/ui/MemberDashBoard/Group/Groups/ExploreGroupCard/ExploreGroupCard';
import { useGroupsControllerV1ExploreGroups } from '../../lib/impakt-dev-api-client/react-query/groups/groups';
import { getDefaultQueryOptions } from '../../lib/impakt-dev-api-client/utils';
import { renderToast } from '../../utils';

const ExploreGroupPage: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (member) {
      navigate('/d/g/12');
    }
  }, []);

  return (
    <VStack align="flex-start" justify="flex-start" minH="100vh">
      <VStack maxW="1200px" w="full" align="center" margin="auto">
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
    <Skeleton isLoaded={!fetchExploreGroups.isLoading}>
      <ExploreGroup isGuest />
    </Skeleton>
  );
};

export const GuestExplore: React.FC = ({ children }) => {
  const guestClickListener = () => {
    renderToast('warning', 'To see details you must be signed in first', 'white');
  };

  useEffect(() => {
    window.addEventListener('click', guestClickListener);

    return () => window.removeEventListener('click', guestClickListener);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ExploreGroupPage;
