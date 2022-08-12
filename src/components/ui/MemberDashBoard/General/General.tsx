import * as React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
// import Topics from '../Topics/Topics';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import NewsFeed from '../NewsFeed/NewsFeed';
import WhiteList from '../ExerciseAndHowToWL/WhiteList';

const General: React.FC = () => {
  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
      <MemberDashboardSectionHeadlineText title="General" />
      <HStack
        columnGap="24px"
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        <VStack
          w="full"
          mt={{ sm: '24px', lg: '0' }}
          justifyContent="flex-start"
          alignItems="flex-start"
          rowGap="24px"
        >
          <WelcomeModal />
          <WhiteList />
        </VStack>

        <VStack w="full" marginLeft="0 !important" rowGap="24px">
          <NewsFeed />
          {/* <Topics /> */}
        </VStack>
        {/* <VStack></VStack> */}
      </HStack>
      {/* <WelcomeModal /> */}
      {/* <WhiteList /> */}
      {/* TODO News Feed  */}
      {/* TODO Topics */}
    </Box>
  );
};
export default General;
