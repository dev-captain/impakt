import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import React from 'react';
import { GroupSettingsMemberTabs, GroupSettingTab } from 'data';
import { useAppSelector } from 'hooks';
import EditGroupTab from './Tabs/EditGroupTab/EditGroupTab';
import PermissionTab from './Tabs/PermissionTab/PermissionTab';
import GeneralSettings from './Tabs/GeneralSettings/GeneralSettings';
import { GroupRole } from '../../../../../../../../lib/redux/slices/groups/types';
import GroupSettingsTabs from './Tabs/GroupSettingsTabs';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const GroupSettingModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  return (
    <Modal isOpen={open} onClose={() => close()} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: '92%', md: '100%' }}
        minW={{ base: '92%', md: '750px' }}
        mt="140px"
        h="auto"
        overflowY="auto"
        borderRadius="32px"
        padding={{ base: '14px', md: '32px' }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text w="100%" fontSize={{ base: '20px', md: '32px' }} color="#29323B" fontWeight="700">
            Group Settings
          </Text>
          <ModalCloseButton
            color="#728BA3"
            position="initial"
            fontSize="18px"
            _focus={{ boxShadow: 'none' }}
          />
        </Box>
        <ModalBody p="0">
          <GroupSettingsTabs />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GroupSettingModal;
