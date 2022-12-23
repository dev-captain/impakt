import React from 'react';
import { Menu, Text, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import NavBarSocialIcons from './LandingPageNavbarSocialIcons';

const DropDownSocialMediaMenu: React.FC = () => {
  return (
    <Menu placement="bottom" boundary="scrollParent" autoSelect={false}>
      <MenuButton>
        <Text color="fg">Social Media</Text>
      </MenuButton>
      <MenuList
        w="100%"
        minW="162px"
        color="#fff"
        backgroundColor="white"
        padding="0"
        borderRadius="8px"
      >
        <MenuItem
          isFocusable={false}
          h="100%"
          borderRadius="8px 8px 0px 0px"
          paddingY="12px"
          paddingX="21px"
        >
          <NavBarSocialIcons />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default DropDownSocialMediaMenu;
