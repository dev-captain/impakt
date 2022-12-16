import React from 'react';
import { C } from 'components';
import { useFetchMemberDashboard } from '../../hooks/useFetchMemberDashboard';

const MemberDashboard: React.FC = () => {
  useFetchMemberDashboard();

  return <C.SidebarLayout isShowNavbar isShowFooter />;
};

export default MemberDashboard;
