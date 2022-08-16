import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { I } from 'components';
import { useLocation } from 'react-router-dom';
import SidebarLinkItem from './SidebarLinkItem';

const CollapseSidebar = () => {
  const path = useLocation();

  return (
    <Box width="full">
      <Menu matchWidth strategy="fixed">
        <MenuButton
          as={Button}
          rightIcon={<I.DropIcon />}
          backgroundColor="rgba(28, 28, 40, 0.65)"
          backdropFilter="blur(40px)"
          border="1px solid #2e2b2b"
          borderRadius="16px"
          textAlign="left"
          h="64px"
          w="100%"
          _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          _hover={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
          _focus={{ boxShadow: 'none' }}
        >
          {path.pathname === '/dashboard' && (
            <Box display="flex" alignItems="flex-end">
              <I.DashboardIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/dashboard' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">General</Text>
            </Box>
          )}
          {path.pathname === '/dashboard/referrals' && (
            <Box display="flex" alignItems="flex-end">
              <I.ReferralsIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/dashboard/referrals' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Referrals</Text>
            </Box>
          )}
          {path.pathname === '/dashboard/reward-history' && (
            <Box display="flex" alignItems="flex-end">
              <I.RewardIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/dashboard/reward-history' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Reward history</Text>
            </Box>
          )}
          {path.pathname === '/dashboard/statistics' && (
            <Box display="flex" alignItems="flex-end">
              <I.ChatIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/dashboard/statistics' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Statistics</Text>
            </Box>
          )}
        </MenuButton>
        <MenuList
          borderRadius="16px"
          w="100%"
          minW="100%"
          color="#fff"
          backgroundColor="rgba(28, 28, 40, 0.65)"
          borderColor="#2e2b2b"
          backdropFilter="blur(40px)"
        >
          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem hide href="" title="General" isActive={path.pathname === '/dashboard'}>
              <I.DashboardIcon cursor="pointer" width="26px" height="23px" />
            </SidebarLinkItem>
          </MenuItem>
          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem
              hide
              href="referrals"
              title="Referrals"
              isActive={path.pathname === '/dashboard/referrals'}
            >
              <I.ReferralsIcon cursor="pointer" width="32px" height="32px" />
            </SidebarLinkItem>
          </MenuItem>

          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem
              hide
              href="groups"
              title="Groups"
              isActive={path.pathname === '/dashboard/groups'}
            >
              <I.ReferralsIcon cursor="pointer" width="32px" height="32px" />
            </SidebarLinkItem>
          </MenuItem>
          {/* <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          > */}
          {/* <SidebarLinkItem
              isTransparent
              hide
              href="reward-history"
              title="Reward history"
              isActive={path.pathname === '/dashboard/reward-history'}
            >
              <I.RewardIcon cursor="pointer" width="27px" height="27px" />
            </SidebarLinkItem> */}
          {/* </MenuItem> */}
          {/* <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem
              isTransparent
              hide
              href="statistics"
              title="Statistics"
              isActive={path.pathname === '/dashboard/statistics'}
            >
              <I.ChatIcon cursor="pointer" width="27px" height="23px" />
            </SidebarLinkItem>
          </MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default CollapseSidebar;
