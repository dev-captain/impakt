import * as React from 'react';
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';

import AnimationInWhenVisible from '../../../common/AnimationInWhenVisible';
import PhaseHeadlineText from './PhaseHeadlineText';
import PhaseDescriptionText from './PhaseDescriptionText';
import RedLabelTag from '../RedLabelTag';
import ActiveMembersCard from './ActiveMembersCard';
// import CoundDownTimerInvestMent from './CoundDownTimerInvestMent';

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
              margin="0 !important"
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

          {activeTabIndex === 0 && (
            <Box left="5.5em" bottom="-3em" position="absolute">
              <RedLabelTag value="Current Phase" />
            </Box>
          )}
        </HStack>
      </TabList>

      <HStack
        flexDir={{ base: 'column', lg: 'row' }}
        mt="100px"
        columnGap="83px"
        justifyContent="space-between"
        w="full"
      >
        <TabPanels w="full" id="panels">
          <TabPanel position="relative" padding="0 !important">
            <AnimationInWhenVisible animationType="fade">
              <VStack rowGap="32px" w="full">
                <Box id="headline" display="flex" alignItems="center" w="100%">
                  <Box position="relative" alignItems="center" display="flex">
                    <PhaseHeadlineText>Phase 1: Token Price Challenge</PhaseHeadlineText>
                  </Box>
                </Box>
                <PhaseDescriptionText>
                  <b>As a community, together we&apos;ll decide the price we pay for each token</b>{' '}
                  . Through teamwork, we will drive the token price down the more we share and
                  recruit members ahead of our IDO. In other words, the entire community will be
                  able to purchase more for less. Impakt will have a maximum limited supply of 100B
                  tokens.
                </PhaseDescriptionText>
                {activeTabIndex === 0 && <ActiveMembersCard activeMembersValue={8013} />}
                <PhaseDescriptionText>
                  <b>Who knows how low the final price will be?</b>
                  Token price starts at $0.01 USD and the final price will be determined by the
                  number of active members on Impakt. A member is deemed active in this phase, by
                  doing at least one daily, weekly or targeted challenge every week.
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
        </TabPanels>
        {/* {activeTabIndex === 0 && <CoundDownTimerInvestMent />} */}
      </HStack>
    </Tabs>
  );
};
const phaseItems = [
  {
    title: 'Phase 1',
    description: 'Token Price Challenge',
  },
  {
    title: 'Phase 2',
    description: 'Community Presale',
  },
  {
    title: 'Phase 3',
    description: 'Token Launch',
  },
];

export default InvestMentTab;
