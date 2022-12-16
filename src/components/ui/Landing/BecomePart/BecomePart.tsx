import { Box } from '@chakra-ui/react';
import * as React from 'react';
import BecomePartHeadlineText from './Header/BecomePartHeadlineText';
import BecomePartJoinNowButton from './Content/BecomePartJoinNowButton';

const BecomePart: React.FC = () => {
  return (
    <Box bgColor="#F5F8FA" textAlign="center" padding={{ md: '126px 16px', base: '70px 16px' }}>
      <BecomePartHeadlineText />
      <BecomePartJoinNowButton />
    </Box>
  );
};
export default BecomePart;
