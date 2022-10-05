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
import EditGroupTab from './EditGroupTab';
import PermissionTab from './PermissionTab';
import GeneralSettings from './GeneralSettings';
import { GroupRole } from '../../../../../../../lib/redux/slices/groups/types';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const GroupSettingModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);

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
          <Tabs mt="10px">
            <TabList border="0" flexWrap="wrap">
              {activeGroup?.role === GroupRole.Creator
                ? GroupSettingTab.map((tab) => (
                    <Tab
                      _focus={{ boxShadow: 'none' }}
                      _active={{ background: 'transparent', color: '#29323B' }}
                      color="#728BA3"
                      _selected={{ color: '#29323B', borderColor: '#29323B' }}
                      fontWeight="500"
                      p="8px 0"
                      marginRight="24px"
                      fontSize={{ base: '14px', md: '16px' }}
                    >
                      {tab}
                    </Tab>
                  ))
                : GroupSettingsMemberTabs.map((tab) => (
                    <Tab
                      _focus={{ boxShadow: 'none' }}
                      _active={{ background: 'transparent', color: '#29323B' }}
                      color="#728BA3"
                      _selected={{ color: '#29323B', borderColor: '#29323B' }}
                      fontWeight="500"
                      p="8px 0"
                      marginRight="24px"
                      fontSize={{ base: '14px', md: '16px' }}
                    >
                      {tab}
                    </Tab>
                  ))}
            </TabList>
            <TabPanels>
              <TabPanel p="0" mt="24px">
                <GeneralSettings />
                {/* <p>ICONs</p> */}
              </TabPanel>
              {activeGroup?.role === GroupRole.Creator && (
                <TabPanel p="0" mt="24px">
                  <EditGroupTab />
                </TabPanel>
              )}

              {activeGroup?.role === GroupRole.Creator && (
                <TabPanel p="0" mt="24px">
                  <PermissionTab />
                </TabPanel>
              )}

              {/* <TabPanel p="0" mt="24px">
                <GeneralSettings />
              </TabPanel> */}
              <TabPanel>
                <p>ICONs</p>
              </TabPanel>
              <TabPanel>
                <p>Community</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GroupSettingModal;
