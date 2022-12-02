/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { Menu, MenuButton, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import GroupSettingModal from './GroupSettings/GroupSettingModal';
import { useGroupsMemberControllerV1JoinGroup } from '../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { renderToast } from '../../../../../../../utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../../lib/zustand';
import { exploreGroupToMyGroupsTransformation } from '../../../../../../../lib/impakt-dev-api-client/utils';
import { useGroupsRequestControllerV1SendRequestToJoinGroup } from '../../../../../../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';

const BannerSettingsMenu: React.FC = () => {
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const sendGroupRequestToJoin = useGroupsRequestControllerV1SendRequestToJoinGroup();
  const { member } = usePersistedAuthStore();
  const {
    activeGroup,
    exploreGroups,
    setExploreGroups,
    addToMyGroups,
    setMembersOfGroup,
    membersOfGroup,
    setRole,
    role,
  } = usePersistedGroupStore();
  // const isRoleLoading = useAppSelector((state) => state.groupsReducer.isRoleLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCreator = role === 'Creator';

  const jointoGroup = async () => {
    if (!activeGroup) return;
    joinGroup.mutate(
      { groupId: activeGroup.id },
      {
        onSuccess: () => {
          renderToast('success', 'Joined successfully');
          const shallowExploreGroups = [...exploreGroups];
          const exploreItem = shallowExploreGroups.find((group) => group.id === activeGroup.id);
          const distractGroupFromExploreList = shallowExploreGroups.filter(
            (group) => group.id !== activeGroup.id,
          );
          setExploreGroups(distractGroupFromExploreList);
          if (exploreItem) {
            const myGroupObj = exploreGroupToMyGroupsTransformation(exploreItem, member?.id);
            addToMyGroups({
              ...myGroupObj,
              Group: { ...myGroupObj.Group, memberCount: myGroupObj.Group.memberCount + 1 },
            });
          }
          if (membersOfGroup && member) {
            setMembersOfGroup({
              ...membersOfGroup,
              Members: [
                ...membersOfGroup.Members,
                {
                  joinedAt: new Date().toISOString(),
                  userId: member?.id,
                  bannedAt: null,
                  groupId: activeGroup.id,
                  leftAt: null,
                  role: 'Member',
                  User: { ...member },
                },
              ],
            });
            setRole('Member');
          }

          // await dispatch(fetchMyGroups(member.id));
          // await dispatch(fetchGroups({ explore: true }));
        },
        onError: (err) => {
          renderToast('success', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  const handleSendRequestToJoin = () => {
    if (!activeGroup) return;

    sendGroupRequestToJoin.mutate(
      { groupId: activeGroup?.id },
      {
        onSuccess: (d) => {
          renderToast('success', 'Request sent successfully');
          const shallowExploreGroups = [...exploreGroups];
          const indexOfExploreGroup = shallowExploreGroups.findIndex(
            (group) => group.id === activeGroup.id,
          );
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
  };

  if (!activeGroup) return null;

  const isRoleNotDefined = !role || role === 'None';

  return (
    <>
      <Menu>
        {!isRoleNotDefined && (
          <Common.ImpaktButton
            variant="white-50"
            as={MenuButton}
            borderRadius="8px"
            justifyConten="center"
            alignItems="center"
            p="12px"
            h="56px"
            onClick={() => {
              onOpen();
            }}
          >
            <I.SettingIcon />
          </Common.ImpaktButton>
        )}
        {isRoleNotDefined && (
          <Common.ImpaktButton
            variant="black"
            hover={{
              backgroundColor: '#fff',
              color: '#fff',
            }}
            onClick={
              activeGroup.private
                ? exploreGroups.find((group) => group.id === activeGroup.id)?.Request
                  ? () => null
                  : handleSendRequestToJoin
                : jointoGroup
            }
            isDisabled={joinGroup.isLoading}
            isLoading={joinGroup.isLoading}
            borderRadius="8px"
            fontWeight="600"
            justifyContent="space-around"
            fontSize="16px"
            leftIcon={
              activeGroup.private ? (
                exploreGroups.find((group) => group.id === activeGroup.id)?.Request ? undefined : (
                  <I.UnionIcon />
                )
              ) : (
                <I.UnionIcon />
              )
            }
          >
            {activeGroup.private
              ? exploreGroups.find((group) => group.id === activeGroup.id)?.Request
                ? 'Pending'
                : 'Request to join'
              : 'Join'}
          </Common.ImpaktButton>
        )}
      </Menu>
      <GroupSettingModal open={isOpen} close={onClose} />
    </>
  );
};

export default BannerSettingsMenu;
