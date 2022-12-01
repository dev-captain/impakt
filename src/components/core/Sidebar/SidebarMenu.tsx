import * as React from 'react';
import { I } from 'components';
import { useNavigate } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';

const Sidebar: React.FC<{ isHide: boolean }> = ({ isHide }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <SidebarMenuItem
        onClick={() => {
          setActiveIndex(0);
          navigate('');
        }}
        hide={isHide}
        href=""
        title="General"
        isActive={activeIndex === 0}
      >
        <I.DashboardIcon
          key="1"
          isActive={activeIndex === 0}
          cursor="pointer"
          width="32px"
          height="32px"
        />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          setActiveIndex(1);
          navigate('/d/g');
        }}
        hide={isHide}
        href="/d/g"
        title="Groups"
        isActive={activeIndex === 1}
      >
        <I.PeopleIcon isActive={activeIndex === 1} cursor="pointer" width="32px" height="32px" />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          setActiveIndex(2);
          navigate('/d/r');
        }}
        hide={isHide}
        href="/d/r"
        title="Referrals"
        isActive={activeIndex === 2}
      >
        <I.ReferralsIcon isActive={activeIndex === 2} cursor="pointer" width="32px" height="32px" />
      </SidebarMenuItem>

      {/* <SidebarMenuItem
        hide
        href="reward-history"
        onClose={onClose}
        title="Reward history"
        isActive={path.pathname === '/dashboard/reward-history'}
        collaps={collaps}
      >
        <I.RewardIcon cursor="pointer" width="27px" height="27px" />
      </SidebarMenuItem> */}

      {/* <SidebarMenuItem
        hide
        href="statistics"
        onClose={onClose}
        title="Statistics"
        isActive={path.pathname === '/dashboard/statistics'}
        collaps={collaps}
      >
        <I.ChatIcon cursor="pointer" width="27px" height="23px" />
      </SidebarMenuItem> */}
    </>
  );
};
export default Sidebar;
