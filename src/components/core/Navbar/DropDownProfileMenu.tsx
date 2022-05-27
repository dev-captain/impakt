import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';

import {
  Menu,
  Text,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  HStack,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';
import DefaultImpaktProfileIcon from '../../icons/DefaultImpaktProfileIcon';

const DropDownProfileMenu: React.FC = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return user ? (
    <Menu autoSelect={false} strategy="fixed">
      <MenuButton>
        <HStack as="button" onClick={() => navigate('/dashboard')}>
          <DefaultImpaktProfileIcon width="40px" height="40px" />
          <Text>{user?.firstName ?? user?.username}</Text>
        </HStack>
      </MenuButton>
      <MenuList border="0.02px solid white" color="white" backgroundColor="#08121F !important">
        <MenuItem
          onClick={() => navigate('/dashboard')}
          isFocusable={false}
          _hover={{ color: '#08121F !important' }}
        >
          Dashboard
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<SmallCloseIcon color="accentR1" />} _hover={{ color: '#08121F' }}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  ) : null;
};
export default DropDownProfileMenu;
