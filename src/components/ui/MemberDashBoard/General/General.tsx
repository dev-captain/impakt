import * as React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';

const General: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO while fetching data show skeleton by isLoaded
  // TODO fetch data
  // TODO General Section UI

  return (
    <Skeleton w="full" isLoaded={isLoaded}>
      <Box w="full" as="section" id="general-section">
        <MemberDashboardSectionHeadlineText title="General" />
        {/* <WelcomeModal /> */}
        {/* <WhiteList /> */}
        {/* TODO News Feed  */}
        {/* TODO Topics */}
      </Box>
    </Skeleton>
  );
};
export default General;
