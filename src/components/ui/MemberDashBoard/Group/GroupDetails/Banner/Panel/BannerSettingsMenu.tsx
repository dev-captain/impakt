import * as React from 'react';
import { Menu, MenuButton, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import GroupSettingModal from './GroupSettings/GroupSettingModal';
import { useGroupsMemberControllerV1JoinGroup } from '../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { renderToast } from '../../../../../../../utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../../lib/zustand';
import { exploreGroupToMyGroupsTransformation } from '../../../../../../../lib/impakt-dev-api-client/utils';

const BannerSettingsMenu: React.FC = () => {
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const { member } = usePersistedAuthStore();
  const {
    activeGroup,
    exploreGroups,
    setExploreGroups,
    addToMyGroups,
    setMembersOfGroup,
    membersOfGroup,
    setRole,
  } = usePersistedGroupStore();
  const { role } = usePersistedGroupStore();
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

  if (!activeGroup) return null;
  if (!role) return null;

  const isRoleDefined = role !== 'None';

  return (
    <>
      <Menu>
        {isRoleDefined ? (
          <Common.ImpaktButton
            variant="transparent"
            as={MenuButton}
            backgroundColor="#F4F7F9"
            borderRadius="8px"
            __css={{ span: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }}
            alignItems="center"
            height="40px"
            color="#4E6070"
            px="1em"
            py="12px"
            _focus={{ boxShadow: 'none' }}
            leftIcon={isCreator ? <I.SettingIcon width="16px" /> : undefined}
            onClick={() => {
              onOpen();
            }}
          >
            {isCreator ? 'Settings' : null}
            {!isCreator && <I.SettingIcon width="16px" />}
          </Common.ImpaktButton>
        ) : (
          <Common.ImpaktButton
            variant="black"
            hover={{
              backgroundColor: '#fff',
              color: '#fff',
            }}
            onClick={jointoGroup}
            isDisabled={joinGroup.isLoading}
            isLoading={joinGroup.isLoading}
            borderRadius="8px"
            fontWeight="600"
            border="1px solid #1C1C28"
            justifyContent="space-around"
            fontSize="16px"
            leftIcon={<I.UnionIcon width="12px" />}
          >
            Join
          </Common.ImpaktButton>
        )}
      </Menu>
      <GroupSettingModal open={isOpen} close={onClose} />
    </>
  );
};

export default BannerSettingsMenu;
