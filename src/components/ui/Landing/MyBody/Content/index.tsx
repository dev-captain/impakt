import { Box } from '@chakra-ui/react';
import * as React from 'react';
import MyBodyVideo from './MyBodyVideo';

const MyBodyContent: React.FC = () => {
  return (
    <Box
      textAlign={{ base: 'center', lg: 'unset' }}
      margin="auto !important"
      padding={{ base: '0 10px 50px', md: '68px 10px' }}
    >
      <MyBodyVideo />
    </Box>
  );
};

export default MyBodyContent;
