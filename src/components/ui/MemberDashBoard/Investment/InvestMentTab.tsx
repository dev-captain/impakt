import * as React from 'react';
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';

import AnimationInWhenVisible from '../../../common/AnimationInWhenVisible';
import PhaseHeadlineText from './PhaseHeadlineText';
import PhaseDescriptionText from './PhaseDescriptionText';
import RedLabelTag from '../RedLabelTag';
import ActiveMembersCard from './ActiveMembersCard';

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
        <HStack
          flexDir={{ base: 'column', lg: 'row' }}
          rowGap="1em"
          justifyContent="space-between"
          position="relative"
          w="full"
        >
          {phaseItems.map(({ description, title, isCurrentPhase }) => (
            <Tab
              key={`tab-phrase-${title}`}
              flexDirection="column"
              columnGap="5px"
              height="170px"
              backgroundColor="transparent"
              color="#fff !important"
              borderRadius="14px"
              w="341px"
              margin="0 !important"
              border="1px solid #F5F6FF"
              padding="20 !important"
              _focus={{ outline: 0 }}
              justifyContent={isCurrentPhase ? 'flex-end' : 'center'}
              _selected={{ color: '#000 !important', backgroundColor: '#FEC417' }}
              _hover={{ backgroundColor: '#778FAD', color: '#fff !important' }}
            >
              <Box mb={isCurrentPhase ? '12px' : '0'}>
                <PhaseHeadlineText>{title}</PhaseHeadlineText>
                <PhaseDescriptionText isBold>{description}</PhaseDescriptionText>
              </Box>
              {isCurrentPhase && (
                <Box color="#fff">
                  <RedLabelTag value="Current Phase" />
                </Box>
              )}
            </Tab>
          ))}
        </HStack>
      </TabList>

      <HStack
        flexDir={{ base: 'column', lg: 'row' }}
        mt="80px"
        columnGap="83px"
        justifyContent="space-between"
        w="full"
      >
        <TabPanels w="full" id="panels">
          <TabPanel position="relative" padding="0 !important">
            <AnimationInWhenVisible animationType="fade">
              <VStack rowGap="32px" w="full">
                <PhaseDescriptionText>
                  <b>As a community, together we&apos;ll decide the price we pay for each token</b>.
                  Through teamwork, we will drive the token price down the more we share and recruit
                  members ahead of our IDO. In other words, the entire community will be able to
                  purchase more for less. Impakt will have a maximum limited supply of 100B tokens.
                </PhaseDescriptionText>
                {activeTabIndex === 0 && <ActiveMembersCard />}
                <PhaseDescriptionText>
                  <b>Who knows how low the final price will be?</b> Token price starts at $0.01 USD
                  and the final price will be determined by the number of active members on Impakt.
                  A member is deemed active in this phase, by doing at least one daily, weekly or
                  targeted challenge every week.
                </PhaseDescriptionText>
                <PhaseDescriptionText>
                  <b>
                    So grab your friends, get fit and have fun together! It&apos;ll be great for
                    everyone!
                  </b>
                </PhaseDescriptionText>
              </VStack>
            </AnimationInWhenVisible>
          </TabPanel>
          <TabPanel position="relative" padding="0 !important">
            <AnimationInWhenVisible animationType="fade">
              <VStack rowGap="32px" w="full">
                <PhaseDescriptionText>
                  <b>Don&apos;t be &quot;just a member&quot;... Be Family! </b> At Impakt, we take
                  care of our own first. In this phase, you, as a member of the Impakt community
                  will be able to convert your hard earned GODL into token allocation. You&apos;ll
                  be able to invest up to the amount of your allocation in our virtual token, $vIO.
                </PhaseDescriptionText>
                <PhaseDescriptionText>
                  At the beginning of this phase $vIO will start at the price unlocked in Phase 1
                  and then increase until the price of our IDO in the next phase. So essentially,
                  the sooner you invest in your presale, the more tokens you will get for your
                  money.
                </PhaseDescriptionText>
                <PhaseDescriptionText>
                  <b>Note:</b> Each $vIO converts to $IO. $IO is the official Impakt blockchain
                  token.
                </PhaseDescriptionText>
              </VStack>
            </AnimationInWhenVisible>
          </TabPanel>
          <TabPanel position="relative" padding="0 !important">
            <AnimationInWhenVisible animationType="fade">
              <VStack rowGap="32px" w="full">
                <PhaseDescriptionText>
                  <b>
                    This is the time we&apos;ve all been waiting for! Once our token $IO is
                    launched, your $vIO translate 1:1 to $IO.
                  </b>{' '}
                </PhaseDescriptionText>
                <PhaseDescriptionText>
                  Your tokens will be locked for 3 months from IDO, and after that, linearly vest
                  over a 6 month period. You will see the tokens being unlocked in real time.
                </PhaseDescriptionText>
              </VStack>
            </AnimationInWhenVisible>
          </TabPanel>
        </TabPanels>
        {/* {activeTabIndex === 0 && <CountdownTimerInvestMent />} */}
      </HStack>
    </Tabs>
  );
};
const phaseItems = [
  {
    title: 'Phase 1',
    description: 'Token Price Challenge',
    isCurrentPhase: true,
  },
  {
    title: 'Phase 2',
    description: 'Community Private Presale',
    isCurrentPhase: false,
  },
  {
    title: 'Phase 3',
    description: 'IDO Token Launch',
    isCurrentPhase: false,
  },
];

export default InvestMentTab;
