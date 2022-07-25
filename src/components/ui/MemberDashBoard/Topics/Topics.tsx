import { Box, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';

import MemberDashboardCard from '../MemberDashBoardCard';
import TopicsAccordion from './TopicsAccordion';

const Topics: React.FC = () => {
  return (
    <MemberDashboardCard minW="341px" rowGap="1.5em">
      <Box id="topics-headline-box">
        <HStack columnGap="1.125em">
          <Box id="topics-headline-text-box">
            <Text textStyle="bold5" lineHeight="100%">
              Topics
            </Text>
          </Box>
          <Box id="topics-headline-text-icon-box">
            <I.TopicsIcon />
          </Box>
        </HStack>
      </Box>
      <Box w="full" id="topics-accordion-box">
        <TopicsAccordion topics={topics} />
      </Box>
    </MemberDashboardCard>
  );
};
const topics = [
  {
    title: 'Web 3.0',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    title: 'NFT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    title: 'Crypto',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
export default Topics;
