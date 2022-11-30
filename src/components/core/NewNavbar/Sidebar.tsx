import { useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { I } from 'components';
import SidebarLinkItem from './SidebarLinkItem';

const Sidebar: React.FC = () => {
  // TODO Sidebar UI
  const { onClose } = useDisclosure();
  const path = useLocation();

  return (
    <>
      <SidebarLinkItem
        hide
        href=""
        onClose={onClose}
        title="General"
        isActive={path.pathname === '/d'}
      >
        <I.DashboardIcon cursor="pointer" width="26px" height="23px" />
      </SidebarLinkItem>

      <SidebarLinkItem
        hide
        href="referrals"
        onClose={onClose}
        title="Referrals"
        isActive={path.pathname === '/d/r'}
      >
        <I.ReferralsIcon cursor="pointer" width="32px" height="32px" />
      </SidebarLinkItem>

      {/* <SidebarLinkItem
        hide
        href="reward-history"
        onClose={onClose}
        title="Reward history"
        isActive={path.pathname === '/d/reward-history'}
      >
        <I.RewardIcon cursor="pointer" width="27px" height="27px" />
      </SidebarLinkItem> */}

      {/* <SidebarLinkItem
        hide
        href="statistics"
        onClose={onClose}
        title="Statistics"
        isActive={path.pathname === '/d/statistics'}
      >
        <I.ChatIcon cursor="pointer" width="27px" height="23px" />
      </SidebarLinkItem> */}
    </>
  );
};
export default Sidebar;
