/* eslint-disable no-nested-ternary */
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common, I } from '../../../../..';
import { useGroupsMemberControllerV1JoinGroup } from '../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { useGroupsRequestControllerV1SendRequestToJoinGroup } from '../../../../../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';
import {
  ExploreGroupRes,
  GetGroupRequestResStatus,
} from '../../../../../../lib/impakt-dev-api-client/react-query/types';
import { exploreGroupToMyGroupsTransformation } from '../../../../../../lib/impakt-dev-api-client/utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../lib/zustand';
import { renderToast } from '../../../../../../utils';

interface ExploreGroupItemPropsI {
  gId: number;
  gPrivate: boolean;
  gRequestStatus: ExploreGroupRes['Request'];
}

const ExploreGroupItem: React.FC<ExploreGroupItemPropsI> = ({ gPrivate, gRequestStatus, gId }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const sendGroupRequestToJoin = useGroupsRequestControllerV1SendRequestToJoinGroup();
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();
  const { exploreGroups, setExploreGroups, addToMyGroups } = usePersistedGroupStore();

  const handleGroupCardButtonClick = async () => {
    if (gPrivate) {
      if (!member) return;
      sendGroupRequestToJoin.mutate(
        { groupId: gId },
        {
          onSuccess: (d) => {
            renderToast('success', 'Request sent successfully');
            navigate('/d/g');
            const shallowExploreGroups = [...exploreGroups];
            const indexOfExploreGroup = shallowExploreGroups.findIndex((group) => group.id === gId);
            if (indexOfExploreGroup !== -1) {
              shallowExploreGroups[indexOfExploreGroup].Request = d;
              setExploreGroups(shallowExploreGroups);
            }
          },
          onError: (err) => {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
    } else {
      joinGroup.mutate(
        { groupId: gId },
        {
          onSuccess: () => {
            renderToast('success', 'Joined successfully');
            const shallowExploreGroups = [...exploreGroups];
            const exploreItem = shallowExploreGroups.find((group) => group.id === gId);
            const distractGroupFromExploreList = shallowExploreGroups.filter(
              (group) => group.id !== gId,
            );
            setExploreGroups(distractGroupFromExploreList);
            if (exploreItem) {
              const myGroupObj = exploreGroupToMyGroupsTransformation(exploreItem, member?.id);
              addToMyGroups({
                ...myGroupObj,
                Group: { ...myGroupObj.Group, memberCount: myGroupObj.Group.memberCount + 1 },
              });
            }
          },
          onError: (err) => {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
    }
  };

  return (
    <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
      <Box maxW={gPrivate ? 'unset' : '99px'} maxH="38px">
        <Common.ImpaktButton
          borderRadius="8px"
          fontWeight="600"
          border="1px solid #1C1C28"
          justifyContent="space-around"
          fontSize="16px"
          isDisabled={sendGroupRequestToJoin.isLoading || joinGroup.isLoading}
          isLoading={sendGroupRequestToJoin.isLoading || joinGroup.isLoading}
          _hover={{ backgroundColor: '#000', color: '#fff' }}
          variant={
            gPrivate
              ? gRequestStatus?.status !== GetGroupRequestResStatus.Pending
                ? 'transparent'
                : 'black'
              : 'transparent'
          }
          onClick={(e) => {
            e.stopPropagation();
            handleGroupCardButtonClick();
            setIsClicked(true);
          }}
          leftIcon={gPrivate ? undefined : <I.UnionIcon width="12px" />}
        >
          {gPrivate
            ? gRequestStatus?.status !== GetGroupRequestResStatus.Pending && !isClicked
              ? 'Request to join'
              : 'Pending'
            : 'Join'}
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default ExploreGroupItem;
