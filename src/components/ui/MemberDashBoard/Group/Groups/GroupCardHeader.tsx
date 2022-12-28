import { Box } from '@chakra-ui/react';
import * as React from 'react';
import MemberDashboardSectionHeadlineText from '../../MemberDashboardSectionHeadlineText';

interface GroupCardWrapperHeaderPropsI {
  title: string;
  justify?: 'space-between' | 'flex-start';
}

const GroupCardWrapperHeader: React.FC<GroupCardWrapperHeaderPropsI> = ({
  title,
  children,
  justify = 'space-between',
}) => {
  return (
    <Box
      display="flex"
      w="full"
      gap={{ lgx: '48px', base: '44px' }}
      justifyContent={{ base: 'flex-end', lg: justify }}
      flexWrap={{ base: 'wrap', md: 'unset' }}
      alignItems="center"
      // borderBottom="2px solid #E0E0E0"
    >
      <MemberDashboardSectionHeadlineText title={title} />
      {children}
    </Box>
  );
};
export default GroupCardWrapperHeader;
