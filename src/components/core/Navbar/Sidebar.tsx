import { useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { I } from 'components';
import SidebarLinkItem from './SidebarLinkItem';
import CollapseSidebar from './CollapseSidebar';

const Sidebar: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan991] = useMediaQuery('(max-width: 991px)');
  const [isLargerThan380] = useMediaQuery('(max-width: 380px)');
  // TODO Sidebar UI
  const path = useLocation();
  React.useEffect(() => {
    if (!isLessThan991) {
      onClose();
    }
  }, [isLessThan991, onClose]);
  return (
    <>
      <VStack display={!isLessThan991 ? 'flex' : 'none'} width="100%">
        <SidebarLinkItem
          hide
          href=""
          onClose={onClose}
          title="General"
          isActive={path.pathname === '/dashboard'}
        >
          <I.DashboardIcon
            cursor="pointer"
            width="26px"
            height="23px"
            opacity={path.pathname === '/dashboard' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="referrals"
          onClose={onClose}
          title="Referrals"
          isActive={path.pathname === '/dashboard/referrals'}
        >
          <I.ReferralsIcon
            cursor="pointer"
            width="32px"
            height="32px"
            opacity={path.pathname === '/dashboard/referrals' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="reward-history"
          onClose={onClose}
          title="Reward history"
          isActive={path.pathname === '/dashboard/reward-history'}
        >
          <I.RewardIcon
            cursor="pointer"
            width="27px"
            height="27px"
            opacity={path.pathname === '/dashboard/reward-history' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="statistics"
          onClose={onClose}
          title="Statistics"
          isActive={path.pathname === '/dashboard/statistics'}
        >
          <I.ChatIcon
            cursor="pointer"
            width="27px"
            height="23px"
            opacity={path.pathname === '/dashboard/statistics' ? '1' : '0.5'}
          />
        </SidebarLinkItem>
      </VStack>
      <CollapseSidebar
        isLessThan991={isLessThan991}
        isLargerThan380={isLargerThan380}
        onClose={onClose}
      />
    </>
  );
};
export default Sidebar;
