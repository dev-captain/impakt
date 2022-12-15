import React from 'react';
import { Box } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
// import Topics from '../Topics/Topics';
import WelcomeModal from './WelcomeModal/WelcomeModal';
import NewsFeed from './NewsFeed/NewsFeed';
import GeneralModalBox from './GeneralModalBox';
import GeneralBody from './GeneralBody';
// import WhiteList from '../ExerciseAndHowToWL/WhiteList';

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
      <GeneralBody>
        <GeneralModalBox>
          <WelcomeModal />
          {/* <WhiteList /> */}
        </GeneralModalBox>

        <GeneralModalBox ml="0 !important">
          <NewsFeed />
          {/* <Topics /> */}
        </GeneralModalBox>
        {/* <VStack></VStack> */}
      </GeneralBody>
      {/* <WelcomeModal /> */}
      {/* <WhiteList /> */}
      {/* TODO News Feed  */}
      {/* TODO Topics */}
    </Box>
  );
};
export default General;
