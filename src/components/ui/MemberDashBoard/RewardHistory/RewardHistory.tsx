import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { I } from 'components';
import InfoSection from 'components/common/InfoSection';

import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import ExerciseHistory from '../ExerciseHistory/ExerciseHistory';
import Exercises from '../ExerciseHistory/Exercises';
import { usePersistedBalanceScoreStore } from '../../../../lib/zustand';

const RewardHistory: React.FC = () => {
  const { t } = useTranslation().i18n;
  const { godlBalanceScore } = usePersistedBalanceScoreStore();

  return (
    <Box w="full" as="section" id="general-section">
      <MemberDashboardSectionHeadlineText title="Reward History" />
      <InfoSection
        tooltipLink="https://knowledgebase.impakt.com/referral-rewards?category=all-resources"
        tooltipText={t(keys.memberDashboard.referrals.discription_list5)}
        tooltipIcon={<I.InfoIcon width="20px" height="20px" />}
      />
      <HStack
        columnGap="24px"
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        mt={{ sm: '24px', lg: '0' }}
      >
        <VStack
          maxW="auto"
          w={{ base: '100%', lg: '50%' }}
          justifyContent="flex-start"
          alignItems="flex-start"
          rowGap="24px"
        >
          {godlBalanceScore > 0 ? (
            <Tabs>
              <TabList border="0">
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  _active={{ background: 'transparent' }}
                  _selected={{ color: '#fff', borderColor: '#fff' }}
                  color="#ffffff66"
                >
                  Koins
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  _active={{ background: 'transparent' }}
                  _selected={{ color: '#fff', borderColor: '#fff' }}
                  color="#ffffff66"
                >
                  GODL
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ExerciseHistory />
                </TabPanel>
                <TabPanel>
                  <Exercises />
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <ExerciseHistory />
          )}
        </VStack>
      </HStack>
    </Box>
  );
};
export default RewardHistory;
