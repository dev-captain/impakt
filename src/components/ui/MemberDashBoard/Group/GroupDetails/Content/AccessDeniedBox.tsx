import * as React from 'react';
import { I } from '@/components';
import { BoxProps } from '@chakra-ui/react';
import MemberDashboardCard from '../../../MemberDashBoardCard';

const AccessDeniedBox: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <MemberDashboardCard
      justifyContent="center"
      alignItems="center"
      width={{ base: '100%', md: '312px' }}
      minW={{ base: '100%', md: '312px' }}
      minH={{ base: '100%', md: '312px' }}
      height={{ base: '100%', md: '312px' }}
      {...props}
    >
      <I.LockIcon />
    </MemberDashboardCard>
  );
};

export default AccessDeniedBox;
