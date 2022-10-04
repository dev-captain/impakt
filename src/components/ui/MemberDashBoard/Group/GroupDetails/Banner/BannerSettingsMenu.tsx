import * as React from 'react';
import { Menu, MenuButton, useToast, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
// import { deleteGroup } from '../../../../../../lib/redux/slices/groups/actions/deleteGroup';
// import { leaveGroup } from '../../../../../../lib/redux/slices/groups/actions/leaveGroup';
import { ImpaktButton } from '../../../../../common';
import GroupSettingModal from './GroupSetting/GroupSettingModal';
import { GroupRole } from '../../../../../../lib/redux/slices/groups/types';
import { joinGroup } from '../../../../../../lib/redux/slices/groups/actions/joinGroup';

const BannerSettingsMenu: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
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

  return (
    <>
      <Menu>
        {activeGroup?.role && activeGroup.role !== GroupRole.None ? (
          <ImpaktButton
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
          </ImpaktButton>
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

        {/* {activeGroup?.role !== GroupRole.Creator && ( */}
        {/* <MenuList padding="12px" zIndex="999"> */}
        {/* {activeGroup?.role === GroupRole.Creator && (
            <MenuItem onClick={handleGroupDelete} gap="11px" padding="8px 10px">
              <I.LogOutIcon width="16px" color="#F04153" />
              Delete Group
            </MenuItem>
          )} */}
        {/* <MenuItem onClick={handleLeaveGroup} gap="11px" padding="8px 10px">
              <I.LogOutIcon width="16px" color="#F04153" />
              Leave Group
            </MenuItem> */}
        {/* </MenuList> */}
        {/* )} */}
        {/* {activeGroup?.ownerId === member?.id && (
                    <MenuItem onClick={onOpen} gap="11px" padding="8px 10px">
                      <I.PeopleIcon width="16px" color="#4E6070" />
                      Invite
                    </MenuItem>
                  )} */}
        {/* <MenuItem gap="11px" padding="8px 10px">
                    <I.PinIcon width="16px" color="#4E6070" />
                    Pin Group
                  </MenuItem> */}
        {/* <MenuItem gap="11px" padding="8px 10px">
                    <I.InfoIcon width="16px" color="#4E6070" />
                    Report
                  </MenuItem> */}
      </Menu>
      <GroupSettingModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default BannerSettingsMenu;
