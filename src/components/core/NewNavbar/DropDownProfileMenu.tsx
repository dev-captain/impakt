import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  MenuDivider,
  useMediaQuery,
} from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { I } from 'components';

import { useAuthControllerLogout } from '../../../lib/impakt-dev-api-client/react-query/auth/auth';
import { usePersistedAuthStore } from '../../../lib/zustand';
import { renderToast } from '../../../utils';

const DropDownProfileMenu: React.FC = () => {
  const signOut = useAuthControllerLogout();
  const { setMember } = usePersistedAuthStore();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();

  return member ? (
    <Menu placement="bottom" boundary="scrollParent" autoSelect={false}>
      <MenuButton>
        <HStack>
          <I.DefaultImpaktProfileIcon width="40px" height="40px" />
        </HStack>
      </MenuButton>
      <MenuList
        w="100%"
        minW="162px"
        border="1px solid white"
        color="#fff"
        backgroundColor={isLessThan1280 ? 'rgba(28, 28, 40, 1)' : '#364A63 !important'}
        padding="0"
        borderRadius="8px"
      >
        <MenuItem
          onClick={() => navigate('/dashboard')}
          isFocusable={false}
          h="100%"
          borderRadius="8px 8px 0px 0px"
          paddingY="12px"
          paddingX="21px"
          _hover={{ color: '#fff !important', backgroundColor: '#364A63' }}
        >
          <Text textStyle="regular3">Dashboard</Text>
        </MenuItem>
        <MenuDivider margin="0" />
        <MenuItem
          paddingY="12px"
          paddingX="21px"
          borderRadius="0px 0px 8px 8px"
          onClick={async () => {
            await signOut.mutateAsync().then(() => {
              renderToast('success', 'You have successfully logged out!');
              setMember(null);
            });
          }}
          icon={<I.SignOutIcon />}
          _hover={{ color: '#fff !important', backgroundColor: '#364A63' }}
        >
          <Text textStyle="regular3">Sign Out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  ) : null;
};
export default DropDownProfileMenu;
