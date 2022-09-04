import * as React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { deleteGroup } from '../../../../../../lib/redux/slices/groups/actions/deleteGroup';
import { leaveGroup } from '../../../../../../lib/redux/slices/groups/actions/leaveGroup';
import { ImpaktButton } from '../../../../../common';

const BannerSettingsMenu: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const member = useAppSelector((state) => state.memberAuth.member);
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleGroupDelete = async () => {
    try {
      if (activeGroup?.id) {
        await dispatch(deleteGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Group is deleted successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
        navigate('/dashboard/groups');
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `${e.response.data.message}`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  const handleLeaveGroup = async () => {
    try {
      if (activeGroup) {
        await dispatch(leaveGroup(activeGroup.id)).unwrap();
        toast({
          title: 'Success',
          description: `Left from Group successfully`,
          isClosable: true,
          duration: 8000,
          status: 'success',
        });
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: `You can't leave your owned group`,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }

    navigate('/dashboard/groups');
  };

  return (
    <Menu>
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
        leftIcon={<I.SettingIcon width="16px" />}
      >
        Settings
      </ImpaktButton>
      <MenuList padding="12px" zIndex="999">
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

        {activeGroup?.ownerId === member?.id && (
          <MenuItem onClick={handleGroupDelete} gap="11px" padding="8px 10px">
            <I.LogOutIcon width="16px" color="#F04153" />
            Delete Group
          </MenuItem>
        )}

        {activeGroup?.ownerId !== member?.id && (
          <MenuItem onClick={handleLeaveGroup} gap="11px" padding="8px 10px">
            <I.LogOutIcon width="16px" color="#F04153" />
            Leave Group
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default BannerSettingsMenu;
