import * as React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, useToast, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

import { I } from 'components';
import {
  // useAppDispatch,
  useAppSelector,
} from 'hooks';
// import { deleteGroup } from '../../../../../../lib/redux/slices/groups/actions/deleteGroup';
// import { leaveGroup } from '../../../../../../lib/redux/slices/groups/actions/leaveGroup';
import { ImpaktButton } from '../../../../../common';
import GroupSettingModal from './GroupSetting/GroupSettingModal';
import { GroupRole } from '../../../../../../lib/redux/slices/groups/types';

const BannerSettingsMenu: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCreator = activeGroup?.role === GroupRole.Creator;

  return (
    <>
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
          leftIcon={isCreator ? <I.SettingIcon width="16px" /> : undefined}
          onClick={() => {
            onOpen();
          }}
        >
          {isCreator ? 'Settings' : null}
          {!isCreator && <I.SettingIcon width="16px" />}
        </ImpaktButton>
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
