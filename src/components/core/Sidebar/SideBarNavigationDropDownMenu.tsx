import React from 'react';
import { Avatar, Text, HStack, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import { I } from '../..';

const SideBarNavigationDropDownMenu: React.FC = () => {
  return (
    <Menu>
      {({ isOpen = true }) => (
        <>
          <HStack spacing="12px">
            <Avatar w="40px" h="40px" name="Demideus" />
            <Text textStyle="semiBold6" color="fg-1">
              Demideus
            </Text>
            <I.DropIcon color="fg-1" width="12px" />
          </HStack>
          {/* <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                        {isOpen ? 'Close' : 'Open'}
                      </MenuButton> */}
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default SideBarNavigationDropDownMenu;
