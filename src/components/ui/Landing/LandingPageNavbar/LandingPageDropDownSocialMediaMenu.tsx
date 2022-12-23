import { Menu, Text, MenuButton, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { usePersistedAuthStore } from '../../../../lib/zustand';
import routes from '../../../../data/routes';
import NavBarSocialIcons from './LandingPageNavbarSocialIcons';

const DropDownSocialMediaMenu: React.FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();

  return member ? (
    <Menu placement="bottom" boundary="scrollParent" autoSelect={false}>
      <MenuButton>
        <Text color="fg">Social Media</Text>
      </MenuButton>
      <MenuList
        w="100%"
        minW="162px"
        color="#fff"
        backgroundColor={isLessThan1280 ? 'rgba(28, 28, 40, 1)' : 'white !important'}
        padding="0"
        borderRadius="8px"
      >
        <MenuItem
          onClick={() => navigate(routes.dashboard)}
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
  ) : null;
};
export default DropDownSocialMediaMenu;
