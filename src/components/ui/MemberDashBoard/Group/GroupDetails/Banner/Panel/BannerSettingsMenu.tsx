import * as React from 'react';
import { Menu, MenuButton, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import GroupSettingModal from './GroupSettings/GroupSettingModal';
import { useGroupsMemberControllerV1JoinGroup } from '../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { renderToast } from '../../../../../../../utils';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const BannerSettingsMenu: React.FC = () => {
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const { activeGroup } = usePersistedGroupStore();
  const { role } = usePersistedGroupStore();
  // const isRoleLoading = useAppSelector((state) => state.groupsReducer.isRoleLoading);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCreator = role === 'Creator';

  const jointoGroup = async () => {
    if (!activeGroup) return;
    joinGroup.mutate(
      { groupId: activeGroup.id },
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
  };

  // if (isRoleLoading) return null;

  const isRoleDefined = role && role !== 'None';

  if (!activeGroup) return null;

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
