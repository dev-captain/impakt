import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { I } from 'components';
import { useLocation } from 'react-router-dom';
import SidebarLinkItem from './SidebarLinkItem';

const CollapseSidebar = () => {
  const path = useLocation();

  return (
    <Box className="menuSidebar" width="full">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<I.DropIcon />}
          backgroundColor="rgba(28, 28, 40, 0.65)"
          border="1px solid #2e2b2b"
          borderRadius="16px"
          textAlign="left"
          h="64px"
          w="100%"
          _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          _hover={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          _focus={{ boxShadow: 'none' }}
        >
          Actions
        </MenuButton>
        <MenuList w="100%" minW="100%" color="#fff" backgroundColor="#060609" borderColor="#2e2b2b">
          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem hide href="" title="General" isActive={path.pathname === '/dashboard'}>
              <I.DashboardIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/dashboard' ? '1' : '0.5'}
              />
            </SidebarLinkItem>
          </MenuItem>
          <MenuItem
            _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          >
            <SidebarLinkItem
              hide
              href="referrals"
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
          </MenuItem>
          <MenuItem
            _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          >
            <SidebarLinkItem
              hide
              href="reward-history"
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
          </MenuItem>
          <MenuItem
            _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          >
            <SidebarLinkItem
              hide
              href="statistics"
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
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
export default CollapseSidebar;
