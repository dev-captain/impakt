import { Box } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardSectionHeadlineText from '../../MemberDashboardSectionHeadlineText';

interface GroupCardWrapperHeaderPropsI {
  title: string;
}

const GroupCardWrapperHeader: React.FC<GroupCardWrapperHeaderPropsI> = ({ title, children }) => {
  return (
    <Box
      display="flex"
      w="full"
      gap={{ lgx: '48px', base: '44px' }}
      // borderBottom="2px solid #E0E0E0"
    >
      <MemberDashboardSectionHeadlineText title={title} />
      {children}
    </Box>
  );
};
export default GroupCardWrapperHeader;
