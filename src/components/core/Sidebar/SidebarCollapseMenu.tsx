import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { I } from 'components';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarCollapseMenu = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const path = useLocation();
  const navigate = useNavigate();

  return (
    <Box width="full">
      <Menu isLazy matchWidth strategy="fixed">
        <MenuButton
          as={Button}
          rightIcon={<I.DropIcon color="glass.1000" />}
          backgroundColor="#fff"
          boxShadow="light"
          color="fg-1"
          borderRadius="16px"
          textAlign="left"
          h="64px"
          w="100%"
          _active={{ backgroundColor: '#fff' }}
          _hover={{ backgroundColor: '#fff' }}
          _focus={{ boxShadow: 'light' }}
        >
          {path.pathname === '/d' && (
            <Box onClick={() => setActiveIndex(0)} display="flex" alignItems="center">
              <I.DashboardIcon key="2" />
              <Text marginLeft="10px">General</Text>
            </Box>
          )}
          {path.pathname.includes('/d/g') && (
            <Box onClick={() => setActiveIndex(1)} display="flex" alignItems="center">
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
            <Box onClick={() => setActiveIndex(2)} display="flex" alignItems="center">
              <I.ReferralsIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === '/d/r' ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Referrals</Text>
            </Box>
          )}
        </MenuButton>
        <MenuList borderRadius="16px" w="100%" minW="100%" boxShadow="light">
          <MenuItem
            onClick={() => {
              setActiveIndex(0);
              navigate('/d');
            }}
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarMenuItem
              // onClick={() => {
              //   setActiveIndex(0);
              //   navigate('');
              // }}
              // hide={isHide}
              isActive={activeIndex === 0}
              href=""
              title="General"
            >
              <I.DashboardIcon />
            </SidebarMenuItem>
          </MenuItem>

          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
          >
            <SidebarMenuItem
              onClick={() => {
                setActiveIndex(1);
                navigate('/d/g');
              }}
              isActive={activeIndex === 1}
              href="/d/g"
              title="Groups"
            >
              <I.PeopleIcon cursor="pointer" width="32px" height="32px" />
            </SidebarMenuItem>
          </MenuItem>

          <MenuItem
            _active={{ backgroundColor: 'transparent' }}
            _focus={{ backgroundColor: 'transparent' }}
            onClick={() => setActiveIndex(2)}
          >
            <SidebarMenuItem
              onClick={() => {
                setActiveIndex(2);
                navigate('/d/r');
              }}
              isActive={activeIndex === 2}
              href="/d/r"
              title="Referrals"
            >
              <I.ReferralsIcon cursor="pointer" width="32px" height="32px" />
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
