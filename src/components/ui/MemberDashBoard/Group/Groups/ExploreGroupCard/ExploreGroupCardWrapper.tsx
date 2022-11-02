/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import { Box, useToast } from '@chakra-ui/react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';

import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';
import { UserRequestStatus } from '../../../../../../lib/redux/slices/groups/types';
import { useGroupsRequestControllerV1SendRequestToJoinGroup } from '../../../../../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';
import { useGroupsMemberControllerV1JoinGroup } from '../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { renderToast } from '../../../../../../utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../lib/zustand';

interface ExploreGroupCardWrapperPropsI {
  status: 'private' | 'public';
}
const ExploreGroupCardWrapper: React.FC<ExploreGroupCardWrapperPropsI> = ({ status }) => {
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const sendGroupRequestToJoin = useGroupsRequestControllerV1SendRequestToJoinGroup();
  const { member } = usePersistedAuthStore();
  const isPrivate = status === 'private';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const exploreGroup = usePersistedGroupStore().exploreGroups.filter(
    // eslint-disable-next-line no-underscore-dangle
    (d) => d._private === isPrivate,
  );

  const handleGroupCardButtonClick = async (groupId: number) => {
    if (isPrivate) {
      if (!member) return;
      sendGroupRequestToJoin.mutate(
        { groupId },
        {
          onSuccess: () => {
            renderToast('success', 'Request sent successfully');
            navigate('/dashboard/groups');
            // await dispatch(fetchMyGroups(member.id));
            // await dispatch(fetchGroups({ explore: true }));
          },
          onError: (err) => {
            renderToast('success', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
      // await dispatch(fetchGroups({ explore: true }));
    } else {
      joinGroup.mutate(
        { groupId },
        {
          onSuccess: () => {
            renderToast('success', 'Joined successfully');
            navigate('/dashboard/groups');
            // await dispatch(fetchMyGroups(member.id));
            // await dispatch(fetchGroups({ explore: true }));
          },
          onError: (err) => {
            renderToast('success', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
      // await dispatch(fetchMyGroups(member.id));
      // await dispatch(fetchGroups({ explore: true }));
    }
  };

  return (
    <>
      {exploreGroup.map((g) => (
        <Box
          cursor={g._private ? 'unset' : 'pointer'}
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '100%',
            md: '31%',
            lgx: '23%',
          }}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!g._private) {
              navigate(`/dashboard/groups/group/${g.id}`);
            }
          }}
          position="relative"
        >
          <GroupsCard
            img={g.currentCoverImage ? g.currentCoverImage : Images.group.logo}
            member={g.memberCount}
            name={g.groupName}
            isPrivateGroup={g._private}
          >
            <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Box maxW={g._private ? 'unset' : '99px'} maxH="38px">
                <Common.ImpaktButton
                  borderRadius="8px"
                  fontWeight="600"
                  border="1px solid #1C1C28"
                  justifyContent="space-around"
                  fontSize="16px"
                  _hover={{ backgroundColor: '#000', color: '#fff' }}
                  variant={
                    g._private
                      ? g.request?.status !== UserRequestStatus.Pending
                        ? 'transparent'
                        : 'black'
                      : 'transparent'
                  }
                  onClick={() => {
                    if (g._private) {
                      if (g.request?.status !== UserRequestStatus.Pending) {
                        handleGroupCardButtonClick(g.id);

                        return;
                      }

                      return;
                    }
                    handleGroupCardButtonClick(g.id);
                  }}
                  leftIcon={g._private ? undefined : <I.UnionIcon width="12px" />}
                >
                  {g._private
                    ? g.request?.status !== UserRequestStatus.Pending
                      ? 'Request to join'
                      : 'Pending'
                    : 'Join'}
                </Common.ImpaktButton>
              </Box>
            </Box>
          </GroupsCard>
        </Box>
      ))}
    </>
  );
};

export default ExploreGroupCardWrapper;
