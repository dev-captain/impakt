import * as React from 'react';
import { Box, Skeleton, Text } from '@chakra-ui/react';

const General: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO while fetching data show skeleton by isLoaded
  // TODO fetch data
  // TODO General Section UI

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box as="section" id="general-section">
        <Text>General</Text>
      </Box>
    </Skeleton>
  );
};
export default General;
