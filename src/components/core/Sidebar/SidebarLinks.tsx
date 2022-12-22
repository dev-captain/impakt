import * as React from 'react';
import { I } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';
import routes from '../../../data/routes';

const SidebarLinks: React.FC<{ isHide: boolean }> = ({ isHide }) => {
  const path = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <SidebarMenuItem
        onClick={() => {
          navigate(routes.dashboard);
        }}
        hide={isHide}
        href=""
        title="General"
        isActive={path.pathname === routes.dashboard}
      >
        <I.DashboardIcon
          key="1"
          isActive={path.pathname === routes.dashboard}
          cursor="pointer"
          width="32px"
          height="32px"
          fill="#91A8BD"
        />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          navigate(routes.groups);
        }}
        hide={isHide}
        href={routes.groups}
        title="Groups"
        isActive={path.pathname.includes(routes.groups)}
      >
        <I.PeopleIcon
          isActive={path.pathname.includes(routes.groups)}
          cursor="pointer"
          width="32px"
          height="32px"
          color={!path.pathname.includes(routes.groups) ? 'fg2' : ''}
        />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          navigate(routes.referrals);
        }}
        hide={isHide}
        href={routes.referrals}
        title="Referrals"
        isActive={path.pathname === routes.referrals}
      >
        <I.ReferralsIcon
          isActive={path.pathname === routes.referrals}
          cursor="pointer"
          width="32px"
          height="32px"
        />
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
export default SidebarLinks;
