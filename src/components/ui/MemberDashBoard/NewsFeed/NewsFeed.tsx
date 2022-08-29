import { Box, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';

import MemberDashboardCard from '../MemberDashBoardCard';
import NewsFeedAccordion from './NewsFeedAccordion';

const NewsFeed: React.FC = () => {
  return (
    <MemberDashboardCard
      color="rgba(255,255,255,0.5)"
      _hover={{ color: 'rgba(255,255,255,1)' }}
      transition="color .2s"
      rowGap="1.5em"
    >
      <Box id="news-feed-headline-box">
        <HStack columnGap="1.125em">
          <Box color="#000" id="news-feed-headline-text-box">
            <Text textStyle="bold5" lineHeight="100%">
              News Feed
            </Text>
          </Box>
          <Box id="news-feed-headline-text-icon-box">
            <I.NewsIcon />
          </Box>
        </HStack>
      </Box>
      <Box color="#fff" w="full" id="news-feed-accordion-box">
        <NewsFeedAccordion />
      </Box>

      <Box color="#fff" w="full" id="news-feed-check-our-discourse-box">
        <Common.ImpaktButton
          size="lg"
          variant="white"
          bgColor="black"
          leftIcon={
            <Box marginRight="8px">
              <I.DiscourseIcon />
            </Box>
          }
          fontSize={{ base: '12px', md: '16px', lg: '20px' }}
          lineHeight={{ base: '16px', md: '24px', lg: '32px' }}
          color="#fff"
          justifyContent={{ md: 'center', lg: 'flex-start' }}
          as="a"
          href="https://discuss.impakt.com/tag/news"
          target="_blank"
        >
          Check our Discourse for more updates
        </Common.ImpaktButton>
      </Box>
      {/* <Box id="news-feed-headline-box">Headline</Box> */}
      {/* <Box>2</Box> */}
    </MemberDashboardCard>
  );
};
// const feeds = [
//   {
//     title:
//       'When Apple released the first Macs with the M1 processor (the first generation of Apple silicon), it also introduced a whole new architecture to run apps on the Mac. So to take full advantage ...',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     href: '',
//   },

//   {
//     title:
//       'When Apple released the first Macs with the M1 processor (the first generation of Apple silicon), it also introduced a whole new architecture to run apps on the Mac. So to take full advantage ...',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     href: '',
//   },

//   {
//     title:
//       'When Apple released the first Macs with the M1 processor (the first generation of Apple silicon), it also introduced a whole new architecture to run apps on the Mac. So to take full advantage ...',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     href: '',
//   },
// ];
export default NewsFeed;
