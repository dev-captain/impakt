import * as React from 'react';
import {
  Box,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';

import AnimationInWhenVisible from '../../../common/AnimationInWhenVisible';
import PhaseHeadlineText from './PhaseHeadlineText';
import PhaseDescriptionText from './PhaseDescriptionText';
import RedLabelTag from '../RedLabelTag';
import CoundDownTimerInvestMent from './CoundDownTimerInvestMent';

const InvestMentTab: React.FC = () => {
  return (
    <Tabs display="flex" w="100%" flexDirection="column">
      <TabList justifyContent="space-between" borderBottom="0">
        <HStack columnGap="30px" w="full">
          {phaseItems.map(({ description, title }) => (
            <Tab
              key={`tab-phrase-${title}`}
              flexDirection="column"
              columnGap="5px"
              height="129px"
              backgroundColor="transparent"
              color="#fff !important"
              borderRadius="14px"
              minW="377px"
              w="full"
              border="1px solid #F5F6FF"
              padding="20 !important"
              _focus={{ outline: 0 }}
              _selected={{ color: '#000 !important', backgroundColor: '#FEC417' }}
              _hover={{ backgroundColor: '#778FAD', color: '#fff !important' }}
            >
              <Text
                display="block"
                fontWeight="700"
                color="inherit"
                fontSize="40px"
                lineHeight="36px"
              >
                {title}
              </Text>
              <Text mt="10px" color="inherit" fontWeight="400" lineHeight="36px" fontSize="30px">
                {description}
              </Text>
            </Tab>
          ))}
        </HStack>
      </TabList>

      <HStack mt="100px" columnGap="83px" w="full">
        <TabPanels maxW="560px !important" w="full" id="panels">
          {phaseItems.map(({ content, title, description }) => {
            return content.map(({ p1, p2 }) => (
              <TabPanel position="relative" padding="0 !important" key={`${title}-panel`}>
                <AnimationInWhenVisible animationType="fade">
                  <VStack rowGap="30px">
                    <Box id="headline" display="flex" alignItems="center" w="100%">
                      <Box position="relative" alignItems="center" display="flex">
                        <PhaseHeadlineText>{`${title}: ${description}`}</PhaseHeadlineText>
                        <Box right="-12em" position="absolute">
                          <RedLabelTag value="Current Phase" />
                        </Box>
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
        <CoundDownTimerInvestMent />
      </HStack>
    </Tabs>
  );
};
const phaseItems = [
  {
    title: 'Phase 1',
    description: 'Token Price Challange',
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
        p1: 'The community decides token price through a collective effort. The goal for you as a community is to recruit as many active members as possible.',
        p2: 'The more active members, the lower the price for the community presale. Token price will start at $ 0.01 USD. At the end of the challenge, the token price will be determined by the goals reached - the more active members, the lower the price. The challenge will run for 6 weeks. ',
      },
    ],
  },
  {
    title: 'Phase 3',
    description: 'Token Launch',
    content: [
      {
        p1: 'The community decides token price through a collective effort. The goal for you as a community is to recruit as many active members as possible.',
        p2: 'The more active members, the lower the price for the community presale. Token price will start at $ 0.01 USD. At the end of the challenge, the token price will be determined by the goals reached - the more active members, the lower the price. The challenge will run for 6 weeks. ',
      },
    ],
  },
];

export default InvestMentTab;
