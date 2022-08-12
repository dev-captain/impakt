import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  MenuDivider,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

import { signOutMember } from '../../../lib/redux/slices/member/actions/signOutMember';

const DropDownProfileMenu: React.FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const member = useAppSelector((state) => state.memberAuth.member);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

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
        color="white"
        backgroundColor={isLessThan1280 ? 'rgba(28, 28, 40, 1)' : 'transparent !important'}
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
            await dispatch(signOutMember()).unwrap();
            toast({
              title: 'Success',
              description: 'You have successfully logged out!',
              isClosable: true,
              duration: 8000,
              status: 'success',
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
