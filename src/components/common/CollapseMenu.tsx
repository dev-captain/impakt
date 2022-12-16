import { Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import CollapseMenuIconButton from './CollapseMenuIconButton';

const CollapseMenu: React.FC = ({ children }) => {
  return (
    <Menu strategy="fixed" autoSelect={false} placement="bottom" matchWidth={false}>
      {({ isOpen }) => (
        <>
          <MenuButton>
            <CollapseMenuIconButton
              isOpen={isOpen}
              aria-label="toggle-sidebar-collapse"
              display={{ md: 'none' }}
            />
          </MenuButton>
          <MenuList boxShadow="none" padding="0" bg="" border="0" w="100vw">
            {children}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default CollapseMenu;
