import React from 'react';
import {
  Avatar,
  Text,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  VStack,
  MenuButtonProps,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { I } from '@/components';
import { useLogout } from '@/hooks';
import { usePersistedAuthStore } from '../../../lib/zustand';
import routes from '../../../data/routes';

interface SideBarNavigationDropDownMenuPropsI {
  offset?: [x: number, y: number];
  showMemberName?: boolean;
}

const SideBarNavigationDropDownMenu: React.FC<
  SideBarNavigationDropDownMenuPropsI & MenuButtonProps
> = ({ offset, showMemberName = true, ...props }) => {
  const { member } = usePersistedAuthStore();
  const logout = useLogout();

  const menuItems = [
    // {
    //   Icon: <I.DashboardIcon width="24px" height="24px" />,
    //   title: 'Dashboard',
    //   textColor: '',
    //   hoverBgColor: '',
    //   path: routes.dashboard,
    // },
    {
      Icon: <I.ProfileIcon />,
      title: 'Edit Profile',
      textColor: '',
      hoverBgColor: '',
      path: routes.profile,
    },
    {
      Icon: <I.SignOutIcon color="darkRed" />,
      onClick: async () => {
        await logout();
      },
      title: 'Sign out',
      textColor: 'darkRed',
      hoverBgColor: 'rgba(240, 65, 83, 0.1);',
    },
  ];

  return member ? (
    <Menu autoSelect={false} offset={offset ?? [0, 10]}>
      {({ isOpen }) => (
        <>
          <MenuButton
            _hover={{ bg: 'white', boxShadow: !isOpen ? 'lightSm' : '' }}
            boxShadow={isOpen ? 'lightM' : ''}
            bg={isOpen ? 'white' : ''}
            borderRadius="12px"
            p="12px"
            {...props}
          >
            <HStack spacing="12px">
              <Avatar
                w={{ base: '30px', md: '40px' }}
                h={{ base: '30px', md: '40px' }}
                name={member.firstName?.replace(' ', '') ?? member.username?.replace(' ', '')}
              />
              {showMemberName && (
                <Text textStyle={{ base: 'semiBold5', md: 'semiBold6' }} color="fg-1">
                  {member?.firstName ?? member?.username}
                </Text>
              )}
              <I.DropIcon
                transform={isOpen ? 'matrix(1, 0, 0, -1, 0, 0);' : ''}
                transition="transform 0.1s linear"
                color="fg-1"
                width="12px"
              />
            </HStack>
          </MenuButton>
          <MenuList bg="transparent" border="0" boxShadow="unset">
            <VStack borderRadius="12px" p="8px 0" boxShadow="lightM" bg="white" maxW="196px">
              {menuItems.map(({ Icon, hoverBgColor, onClick, textColor, title, path }) => (
                <MenuItem
                  key={`menu-item-${title}`}
                  as={path ? ReactRouterLink : MenuItem}
                  to={path ?? ''}
                  onClick={onClick}
                  color="fg"
                  _hover={{ bg: hoverBgColor ?? ' a5', color: 'fg-1' }}
                >
                  <HStack
                    columnGap="23px"
                    px="5px"
                    w="full"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    {Icon}
                    <Text ml="0 !important" textStyle="semiBold6" color={textColor}>
                      {title}
                    </Text>
                  </HStack>
                </MenuItem>
              ))}
            </VStack>
          </MenuList>
        </>
      )}
    </Menu>
  ) : null;
};

export default SideBarNavigationDropDownMenu;
