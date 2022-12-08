import { Box, HStack, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../../assets/images';

import MemberDashboardCard from '../../MemberDashBoardCard';
import NewsFeedAccordion from './NewsFeedAccordion';

const NewsFeed: React.FC = () => {
  return (
    <MemberDashboardCard
      justifyContent="space-between"
      _hover={{ color: 'darkOrange' }}
      transition="color .5s"
      rowGap="1.5em"
      color="fg-1"
    >
      <Box id="news-feed-headline-box">
        <HStack columnGap="1.125em">
          <Box color="#000" id="news-feed-headline-text-box">
            <Text textStyle="bold5" lineHeight="100%">
              Get Started
            </Text>
          </Box>
          <Box id="news-feed-headline-text-icon-box">
            <Image w="32px" h="32px" src={Images.Common.emojiImpakt} />
          </Box>
        </HStack>
      </Box>
      <Box color="#4E6070" w="full" id="news-feed-accordion-box">
        <NewsFeedAccordion />
      </Box>

      {/* <Box color="#4E6070" w="full" id="news-feed-check-our-discourse-box">
        <Common.ImpaktButton
          display="flex"
          wordBreak="break-word"
          size="lg"
          variant="white-50"
          leftIcon={<I.DiscourseIcon style={{ marginRight: '5px' }} />}
          fontSize="20px"
          lineHeight="100%"
          justifyContent={{ md: 'center', lg: 'flex-start' }}
          as="a"
          href="https://discuss.impakt.com/tag/news"
          target="_blank"
          height="auto"
          width="full"
          whiteSpace="break-spaces"
        >
          <Text wordBreak="break-word">Check our Discourse for more updates</Text>
        </Common.ImpaktButton>
      </Box> */}
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
