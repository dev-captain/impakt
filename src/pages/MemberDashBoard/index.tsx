import React from 'react';
import { Outlet } from 'react-router-dom';

import { C } from '@/components';
import { useFetchMemberDashboard } from '@/hooks/useFetchMemberDashboard';
import { usePersistedAuthStore } from '../../lib/zustand';

const MemberDashboard: React.FC = () => {
  const { member } = usePersistedAuthStore();
  useFetchMemberDashboard();

  return (
    <C.SidebarLayout isShowNavbar isShowFooter isShowSidebar={!!member}>
      <Outlet />
    </C.SidebarLayout>
  );
};

export default MemberDashboard;
