import * as React from 'react';
import { Menu, MenuButton, useToast, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { joinGroup } from '../../../../../../../lib/redux/slices/groups/actions/joinGroup';
import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';
import GroupsModal from '../../../GroupsModal';
import GroupSettingsTabs from './GroupSettings/Tabs/GroupSettingsTabs';
import GroupSettingModal from './GroupSettings/GroupSettingModal';

const BannerSettingsMenu: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const isRoleLoading = useAppSelector((state) => state.groupsReducer.isRoleLoading);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCreator = activeGroup?.role === GroupRole.Creator;

  const jointoGroup = async () => {
    if (!activeGroup) return;
    try {
      await dispatch(joinGroup(activeGroup.id)).unwrap();
      toast({
        title: 'Success',
        description: 'Joined successfully',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });

      navigate('/dashboard/groups');
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  if (isRoleLoading) return null;

  const isRoleDefined = activeGroup?.role && activeGroup.role !== GroupRole.None;

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
