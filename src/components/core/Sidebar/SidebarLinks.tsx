import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { I } from '@/components';
import SidebarMenuItem from './SidebarMenuItem';
import routes from '../../../data/routes';

const SidebarLinks: React.FC<{ isHide: boolean }> = ({ isHide }) => {
  const location = useLocation();
  const locationState = location.state as { fromExplore: boolean } | undefined;

  const navigate = useNavigate();

  const isExplorePage =
    location.pathname === routes.explore ||
    (locationState?.fromExplore && location.pathname.includes(routes.groups));

  const isMyGroup =
    location.pathname !== routes.explore &&
    !locationState?.fromExplore &&
    location.pathname.includes(routes.groups);

  return (
    <>
      <SidebarMenuItem
        onClick={() => {
          navigate(routes.dashboard);
        }}
        hide={isHide}
        href=""
        title="General"
        isActive={location.pathname === routes.dashboard}
      >
        <I.DashboardIcon
          key="1"
          isActive={location.pathname === routes.dashboard}
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
        title="My Groups"
        // eslint-disable-next-line no-return-await
        isActive={isMyGroup}
      >
        <I.PeopleIcon
          isActive={isMyGroup}
          cursor="pointer"
          width="32px"
          height="32px"
          color="#91A8BD"
        />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          navigate(routes.explore);
        }}
        hide={isHide}
        href={routes.explore}
        title="Explore"
        isActive={isExplorePage}
      >
        <I.SearchIcon
          color="#91A8BD"
          isActive={isExplorePage}
          cursor="pointer"
          width="32px"
          height="32px"
        />
      </SidebarMenuItem>

      <SidebarMenuItem
        onClick={() => {
          navigate(routes.referrals);
        }}
        hide={isHide}
        href={routes.referrals}
        title="Referrals"
        isActive={location.pathname === routes.referrals}
      >
        <I.ReferralsIcon
          isActive={location.pathname === routes.referrals}
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
