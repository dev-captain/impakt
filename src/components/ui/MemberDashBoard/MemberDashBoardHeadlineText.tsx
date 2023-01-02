import * as React from 'react';
import { Text } from '@chakra-ui/react';

const MemberDashboardHeadlineText: React.FC = ({ children }) => {
  return (
    <Text color="fg-1" marginRight="14px" textStyle="semiBold6" lineHeight="120%">
      {children}
    </Text>
  );
};

export default MemberDashboardHeadlineText;
