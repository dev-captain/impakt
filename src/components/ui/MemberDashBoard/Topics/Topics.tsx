import { Box, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';

import MemberDashboardCard from '../MemberDashBoardCard';
import TopicsAccordion from './TopicsAccordion';

const Topics: React.FC = () => {
  return (
    <MemberDashboardCard
      color="rgba(255,255,255,0.5)"
      _hover={{ color: 'rgba(255,255,255,1)' }}
      transition="color .2s"
      rowGap="1.5em"
    >
      <Box id="topics-headline-box">
        <HStack columnGap="1.125em">
          <Box color="#fff" id="topics-headline-text-box">
            <Text textStyle="bold5" lineHeight="100%">
              Topics
            </Text>
          </Box>
          <Box id="topicx-icon-box">
            <I.TopicsIcon />
          </Box>
        </HStack>
      </Box>
      <Box color="#fff" w="full" id="topics-accordion-box">
        <TopicsAccordion topics={topics} />
      </Box>
    </MemberDashboardCard>
  );
};
const topics = [
  {
    title: 'Web 3.0',
    description: 'June 1s- July 1st',
  },

  {
    title: 'NFT',
    description: 'June 1s- July 1st',
  },

  {
    title: 'Crypto',
    description: 'June 1s- July 1st',
  },
];
export default Topics;
