import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { I } from 'components';
import { useLocation } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarCollapseMenu = () => {
  const path = useLocation();

  return (
    <Box width="full">
      <Menu matchWidth strategy="fixed">
        <MenuButton
          as={Button}
          rightIcon={<I.DropIcon color="glass.1000" />}
          backgroundColor="#fff"
          border="1px solid"
          borderColor="glass.1000"
          color="glass.1000"
          borderRadius="16px"
          textAlign="left"
          h="64px"
          w="100%"
          _active={{ backgroundColor: '#fff' }}
          _hover={{ backgroundColor: '#fff' }}
          _focus={{ boxShadow: 'none' }}
        >
          {path.pathname === '/d' && (
            <Box display="flex" alignItems="flex-end">
              <I.DashboardIcon
                isActive={false}
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/d' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">General</Text>
            </Box>
          )}
          {path.pathname.includes('/d/g') && (
            <Box display="flex" alignItems="flex-end">
              <I.PeopleIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname.includes('/d/g') ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Groups</Text>
            </Box>
          )}
          {path.pathname === '/d/r' && (
            <Box display="flex" alignItems="flex-end">
              <I.ReferralsIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/d/r' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Referrals</Text>
            </Box>
          )}
          {/* {path.pathname === '/d/reward-history' && (
            <Box display="flex" alignItems="flex-end">
              <I.RewardIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/d/reward-history' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Reward history</Text>
            </Box>
          )} */}
          {path.pathname === '/d/statistics' && (
            <Box display="flex" alignItems="flex-end">
              <I.ChatIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/d/statistics' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Statistics</Text>
            </Box>
          )}
        </MenuButton>
        <MenuList
          borderRadius="16px"
          w="100%"
          minW="100%"
          color="#000"
          backgroundColor="#fff"
          borderColor="#2e2b2b"
          backdropFilter="blur(40px)"
        >
          <MenuItem
            color="#000"
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarMenuItem hide href="" title="General" isActive={path.pathname === '/d'}>
              <I.DashboardIcon cursor="pointer" width="26px" height="23px" color="#000" />
            </SidebarMenuItem>
          </MenuItem>

          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarMenuItem hide href="g" title="Groups" isActive={path.pathname === '/d/g'}>
              <I.PeopleIcon cursor="pointer" width="32px" height="32px" color="#000" />
            </SidebarMenuItem>
          </MenuItem>

          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarMenuItem hide href="r" title="Referrals" isActive={path.pathname === '/d/r'}>
              <I.ReferralsIcon cursor="pointer" width="32px" height="32px" color="#000" />
            </SidebarMenuItem>
          </MenuItem>
          {/* <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem
              isTransparent
              hide
              href="reward-history"
              title="Reward history"
              isActive={path.pathname === '/d/reward-history'}
            >
              <I.RewardIcon cursor="pointer" width="27px" height="27px" />
            </SidebarLinkItem>
          </MenuItem> */}
          {/* <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarLinkItem
              isTransparent
              hide
              href="statistics"
              title="Statistics"
              isActive={path.pathname === '/d/statistics'}
            >
              <I.ChatIcon cursor="pointer" width="27px" height="23px" />
            </SidebarLinkItem>
          </MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default SidebarCollapseMenu;
