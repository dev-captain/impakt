import { Box, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';

const RewardHistory: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO while fetching data show skeleton by isLoaded
  // TODO fetch data
  // TODO Reward history Section UI

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box as="section" id="reward-history-section">
        <Text>Reward History</Text>
      </Box>
    </Skeleton>
  );
};
export default RewardHistory;
