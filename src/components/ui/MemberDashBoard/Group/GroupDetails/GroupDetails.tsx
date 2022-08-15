import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardSectionHeadlineText from '../../MemberDashboardSectionHeadlineText';

const GroupDetails: React.FC = () => {
  return (
    <Box
      // minH="100vh"
      // overflow="hidden"
      w="full"
      as="section"
      id="general-section"
    >
      <MemberDashboardSectionHeadlineText title="Group Detail Page" />
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
export default GroupDetails;
