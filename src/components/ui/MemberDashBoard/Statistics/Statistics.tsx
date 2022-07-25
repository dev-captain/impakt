import { Box, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';

const Statistics: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO fetch data
  // TODO while fetching data show skeleton by isLoaded
  // TODO Statistics Section UI

  return (
    <Skeleton w="full" isLoaded={isLoaded}>
      <Box w="full" as="section" id="general-section">
        <MemberDashboardSectionHeadlineText title="Exercise Statistics" />
      </Box>
    </Skeleton>
  );
};
export default Statistics;
