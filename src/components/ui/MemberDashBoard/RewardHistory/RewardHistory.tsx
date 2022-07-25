import { Box, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';

const RewardHistory: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO while fetching data show skeleton by isLoaded
  // TODO fetch data
  // TODO Reward history Section UI

  return (
    <Skeleton w="full" isLoaded={isLoaded}>
      <Box w="full" as="section" id="general-section">
        <MemberDashboardSectionHeadlineText title="Reward History" />
      </Box>
    </Skeleton>
  );
};
export default RewardHistory;
