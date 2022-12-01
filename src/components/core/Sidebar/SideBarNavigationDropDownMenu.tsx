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
} from '@chakra-ui/react';
import { I } from 'components';
import { useLogout } from 'hooks';
import { usePersistedAuthStore } from '../../../lib/zustand';

const SideBarNavigationDropDownMenu: React.FC = () => {
  const { member } = usePersistedAuthStore();
  const logout = useLogout();

  return (
    <Menu autoSelect={false} offset={[45, 10]}>
      {({ isOpen }) => (
        <HStack
          _hover={{ bg: 'white', boxShadow: !isOpen ? 'lightSm' : '' }}
          boxShadow={isOpen ? 'lightM' : ''}
          bg={isOpen ? 'white' : ''}
          borderRadius="12px"
          p="12px"
        >
          <MenuButton>
            <HStack spacing="12px">
              <Avatar w="40px" h="40px" name="Demideus" />
              <Text textStyle="semiBold6" color="fg-1">
                {member?.firstName ?? member?.username}
              </Text>
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
              <MenuItem
                onClick={async () => {
                  await logout();
                }}
                _hover={{ bg: ' rgba(240, 65, 83, 0.1);' }}
              >
                <HStack
                  columnGap="23px"
                  px="5px"
                  w="full"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <I.SignOutIcon />
                  <Text ml="0 !important" textStyle="semiBold6" color="darkRed">
                    Sign out
                  </Text>
                </HStack>
              </MenuItem>
            </VStack>
          </MenuList>
        </HStack>
      )}
    </Menu>
  );
};
export default SideBarNavigationDropDownMenu;
