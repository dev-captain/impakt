import * as React from 'react';
import { Box } from '@chakra-ui/react';
import MyBodyDescriptionText from './MyBodyDescriptionText';
import MyBodyHeadlineText from './MyBodyHeadlineText';
import { Common } from '../../../..';

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
        <Box mt="1em">
          <Common.ImpaktButton
            variant="black"
            height="50px"
            w="fit-content"
            gap="8px"
            padding="10px 14px"
            as="a"
            href="https://vsports.impakt.com"
            title="vSports Fitness World"
          >
            Experience vSports now in your browser
          </Common.ImpaktButton>
        </Box>
      </Box>
    </Box>
  );
};
export default MyBodyHeader;
