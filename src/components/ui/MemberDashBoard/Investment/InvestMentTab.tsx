import * as React from 'react';
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';

import AnimationInWhenVisible from '../../../common/AnimationInWhenVisible';
import PhaseHeadlineText from './PhaseHeadlineText';
import PhaseDescriptionText from './PhaseDescriptionText';
import RedLabelTag from '../RedLabelTag';
import CoundDownTimerInvestMent from './CoundDownTimerInvestMent';

interface InvestmentTabPropsI {
  handleTabIndexChanges: (index: number) => void;
  activeTabIndex: number;
}

const InvestMentTab: React.FC<InvestmentTabPropsI> = ({
  handleTabIndexChanges,
  activeTabIndex,
}) => {
  return (
    <Tabs
      onChange={(index: number) => {
        handleTabIndexChanges(index);
      }}
      display="flex"
      w="100%"
      flexDirection="column"
    >
      <TabList justifyContent="space-between" borderBottom="0">
        <HStack justifyContent="space-between" w="full">
          {phaseItems.map(({ description, title }) => (
            <Tab
              key={`tab-phrase-${title}`}
              flexDirection="column"
              columnGap="5px"
              height="117px"
              backgroundColor="transparent"
              color="#fff !important"
              borderRadius="14px"
              w="341px"
              border="1px solid #F5F6FF"
              padding="20 !important"
              _focus={{ outline: 0 }}
              _selected={{ color: '#000 !important', backgroundColor: '#FEC417' }}
              _hover={{ backgroundColor: '#778FAD', color: '#fff !important' }}
            >
              <PhaseHeadlineText>{title}</PhaseHeadlineText>
              <PhaseDescriptionText isBold>{description}</PhaseDescriptionText>
            </Tab>
          ))}
        </HStack>
      </TabList>

      <HStack mt="100px" columnGap="83px" justifyContent="space-between" w="full">
        <TabPanels maxW={activeTabIndex === 0 ? '560px !important' : 'unset'} w="full" id="panels">
          {phaseItems.map(({ content, title, description }) => {
            return content.map(({ p1, p2 }) => (
              <TabPanel position="relative" padding="0 !important" key={`${title}-panel`}>
                <AnimationInWhenVisible animationType="fade">
                  <VStack rowGap="30px" w="full">
                    <Box id="headline" display="flex" alignItems="center" w="100%">
                      <Box position="relative" alignItems="center" display="flex">
                        <PhaseHeadlineText>{`${title}: ${description}`}</PhaseHeadlineText>
                        {activeTabIndex === 0 && (
                          <Box right="-10.5em" position="absolute">
                            <RedLabelTag value="Current Phase" />
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <PhaseDescriptionText>{p1}</PhaseDescriptionText>
                    <PhaseDescriptionText>{p2}</PhaseDescriptionText>
                  </VStack>
                </AnimationInWhenVisible>
              </TabPanel>
            ));
          })}
        </TabPanels>
        {activeTabIndex === 0 && <CoundDownTimerInvestMent />}
      </HStack>
    </Tabs>
  );
};
const phaseItems = [
  {
    title: 'Phase 1',
    description: 'Token Price Challenge',
    content: [
      {
        p1: 'The community decides token price through a collective effort. The goal for you as a community is to recruit as many active members as possible.',
        p2: 'The more active members, the lower the price for the community presale. Token price will start at $ 0.01 USD. At the end of the challenge, the token price will be determined by the goals reached - the more active members, the lower the price. The challenge will run for 6 weeks. ',
      },
    ],
  },
  {
    title: 'Phase 2',
    description: 'Community Presale',
    content: [
      {
        p1: 'When phase two starts, you, as a member of the Impakt community, will be able to buy allocation with the GODL you earned. You can then invest up to the amount of your allocation in our virtual token $vIO.',
        p2: 'At the beginning of this phase, token price will start at the price that was achieved in phase 1. It will then linearly increase until it hits the price at which we will IDO in the next phase. So essentially, the sooner you invest in the presale, the more tokens you will get for your money.',
      },
    ],
  },
  {
    title: 'Phase 3',
    description: 'Token Launch',
    content: [
      {
        p1: 'Phase 3 starts with our IDO. Once our token $IO is launched, your $vIO translate 1:1 to $IO.',
        p2: 'Your tokens will be locked up for 3 months from IDO and after that linearly vest over a 6 month period. You will see the tokens being unlocked in real time on this dashboard and will be able to withdraw the unlocked amount to your wallet at any time.',
      },
    ],
  },
];

export default InvestMentTab;
