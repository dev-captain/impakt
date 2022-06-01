import * as React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface RedLabelTagPropsI {
  value: string;
}

const RedLabelTag: React.FC<RedLabelTagPropsI> = ({ value }) => {
  return (
    <Box
      w="141px"
      h="30px"
      borderRadius="12px"
      justifyContent="center"
      alignItems="center"
      display="flex"
      bgColor="#B22221"
      id="current-rank-label-box"
    >
      <Text textStyle="semiBold3">{value}</Text>
    </Box>
  );
};

export default RedLabelTag;
