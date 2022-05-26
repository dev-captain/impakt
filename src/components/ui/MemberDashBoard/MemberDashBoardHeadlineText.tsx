import * as React from 'react';
import { Text, Box } from '@chakra-ui/react';

const MemberDashBoardHeadlineText: React.FC = ({ children }) => {
  return (
    <Box>
      <Text textStyle="bold7">{children}</Text>
    </Box>
  );
};

export default MemberDashBoardHeadlineText;
