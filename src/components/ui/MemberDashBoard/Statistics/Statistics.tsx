import { Box, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';

const Statistics: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO fetch data
  // TODO while fetching data show skeleton by isLoaded
  // TODO Statistics Section UI

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box as="section" id="statistics-section">
        <Text>Statistics</Text>
      </Box>
    </Skeleton>
  );
};
export default Statistics;
