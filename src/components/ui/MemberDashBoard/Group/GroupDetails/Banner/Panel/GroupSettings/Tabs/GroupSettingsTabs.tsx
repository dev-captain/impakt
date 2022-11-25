import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import * as React from 'react';

import { GroupSettingTab, GroupSettingsMemberTabs } from '../../../../../../../../../data';
import EditGroupTab from './EditGroupTab/EditGroupTab';
import GeneralSettings from './GeneralSettings/GeneralSettings';
import PermissionTab from './PermissionTab/PermissionTab';
import { usePersistedGroupStore } from '../../../../../../../../../lib/zustand';

const GroupSettingsTabs: React.FC = () => {
  const { role } = usePersistedGroupStore();

  return (
    <Tabs mt="10px">
      <TabList border="0" flexWrap="wrap">
        {role === 'Creator' || role === 'Moderator'
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
        {role === 'Creator' ||
          (role === 'Moderator' && (
            <TabPanel p="0" mt="24px">
              <EditGroupTab />
            </TabPanel>
          ))}

        {role === 'Creator' ||
          (role === 'Moderator' && (
            <TabPanel p="0" mt="24px">
              <PermissionTab />
            </TabPanel>
          ))}

        <TabPanel p="0" mt="24px">
          <GeneralSettings />
          {/* <p>ICONs</p> */}
        </TabPanel>

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
