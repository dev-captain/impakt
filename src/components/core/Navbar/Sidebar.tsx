import { useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLinkItem from './NavbarLinkItem';

const Sidebar: React.FC = () => {
  // TODO Sidebar UI
  const { onClose } = useDisclosure();
  const path = useLocation();

  return (
    <>
      <NavbarLinkItem
        hide
        href=""
        onClose={onClose}
        title="General"
        isActive={path.pathname === '/dashboard'}
      />

      <NavbarLinkItem
        hide
        href="referrals"
        onClose={onClose}
        title="Referrals"
        isActive={path.pathname === '/dashboard/referrals'}
      />

      <NavbarLinkItem
        hide
        href="reward-history"
        onClose={onClose}
        title="Reward history"
        isActive={path.pathname === '/dashboard/reward-history'}
      />

      <NavbarLinkItem
        hide
        href="statistics"
        onClose={onClose}
        title="Statistics"
        isActive={path.pathname === '/dashboard/statistics'}
      />
    </>
  );
};
export default Sidebar;
