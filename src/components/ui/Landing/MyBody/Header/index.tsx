import * as React from 'react';
import { Box } from '@chakra-ui/react';
import MyBodyDescriptionText from './MyBodyDescriptionText';
import MyBodyHeadlineText from './MyBodyHeadlineText';

const MyBodyHeader: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      marginTop={{ md: '100px !important', base: '50px !important' }}
    >
      <Box textAlign="center">
        <MyBodyHeadlineText />
        <Box height="1px" background="#000" width="152px" margin="24px auto" />
        <MyBodyDescriptionText />
      </Box>
    </Box>
  );
};
export default MyBodyHeader;
