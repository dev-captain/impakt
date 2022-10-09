import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import * as React from 'react';
import { useAppSelector } from 'hooks';

import { GroupSettingTab, GroupSettingsMemberTabs } from '../../../../../../../../../data';
import { GroupRole } from '../../../../../../../../../lib/redux/slices/groups/types';
import EditGroupTab from './EditGroupTab/EditGroupTab';
import GeneralSettings from './GeneralSettings/GeneralSettings';
import PermissionTab from './PermissionTab/PermissionTab';

const GroupSettingsTabs: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);

  return (
    <Tabs mt="10px">
      <TabList border="0" flexWrap="wrap">
        {activeGroup?.role === GroupRole.Creator
          ? GroupSettingTab.map((tab, index) => (
              <Tab
                // eslint-disable-next-line react/no-array-index-key
                key={`tab-settings-${index}`}
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
          : GroupSettingsMemberTabs.map((tab, index) => (
              <Tab
                // eslint-disable-next-line react/no-array-index-key
                key={`tab-settings-${index}`}
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
        {/* <TabPanel>
                <p>ICONs</p>
              </TabPanel>
              <TabPanel>
                <p>Community</p>
              </TabPanel> */}
      </TabPanels>
    </Tabs>
  );
};

export default GroupSettingsTabs;
