import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
// import Topics from '../Topics/Topics';

const Group: React.FC = () => {
  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
      <MemberDashboardSectionHeadlineText title="Your Groups" />
      <HStack
        columnGap="24px"
        rowGap="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="full"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        {/* here is the components */}
      </HStack>
    </Box>
  );
};
export default Group;
