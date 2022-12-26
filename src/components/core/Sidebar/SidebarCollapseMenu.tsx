import { Box, Button, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { I } from '@/components';
import { useLocation } from 'react-router-dom';
import routes from '../../../data/routes';
import SidebarLinks from './SidebarLinks';

const SidebarCollapseMenu = () => {
  const path = useLocation();

  return (
    <Box zIndex="9999 !important" width="full">
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
          {path.pathname === routes.dashboard && (
            <Box display="flex" alignItems="center">
              <I.DashboardIcon key="2" />
              <Text marginLeft="10px">General</Text>
            </Box>
          )}
          {path.pathname.includes(routes.groups) && (
            <Box display="flex" alignItems="center">
              <I.PeopleIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname.includes(routes.groups) ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Groups</Text>
            </Box>
          )}
          {path.pathname === routes.referrals && (
            <Box display="flex" alignItems="center">
              <I.ReferralsIcon
                cursor="pointer"
                width="26px"
                height="23px"
                opacity={path.pathname === routes.referrals ? '1' : '0.5'}
              />
              <Text marginLeft="10px">Referrals</Text>
            </Box>
          )}
        </MenuButton>
        <MenuList borderRadius="16px" w="100%" minW="100%" boxShadow="light">
          <SidebarLinks isHide={false} />
        </MenuList>
      </Menu>
    </Box>
  );
};
export default SidebarCollapseMenu;
