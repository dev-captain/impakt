/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { FC, useState } from 'react';
import {
  Box,
  Flex,
  // Image,
  HStack,
  useDisclosure,
  useMediaQuery,
  PositionProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { I, Common } from 'components';

import { useLogout } from '../../../hooks/useLogout';
import NotificationDrawer from '../../ui/MemberDashBoard/Drawer/NoitificationDrawer';
import { usePersistedGroupStore } from '../../../lib/zustand';
import SidebarNavigationLinks from './SidebarNavigationLinks';
import SideBarNavigationDropDownMenu from './SideBarNavigationDropDownMenu';

interface NavbarProps {
  position?: PositionProps['position'];
}
// const { dark, light } = Images;

const SidebarNavigationMenu: FC<NavbarProps> = ({ position = 'fixed' }) => {
  const logout = useLogout();
  const navigate = useNavigate();
  const { t } = useTranslation(`default`).i18n;
  const { onOpen, isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const notifies = usePersistedGroupStore().groupRequests.filter(
    (requestD) => requestD.status === 'Pending',
  ).length;

  const textColor = 'glass.100';

  return (
    <Box
      position={position}
      as="nav"
      top="0"
      zIndex="99999999999"
      w="full"
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      px={!isLessThan1280 ? '3em' : '16px'}
      bgColor="a5"
      h="112px"
      id="navbar-box"
    >
      <Flex
        w="full"
        maxWidth={{ base: '1232px', md: 'full' }}
        maxW={!isLessThan1280 ? 'full' : '1232px'}
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        borderRadius={!isLessThan1280 ? '0' : '16px'}
        height={!isLessThan1280 ? '80px' : '70px'}
        marginTop={!isLessThan1280 ? '0' : '10px'}
        transition="background-color 0.5s linear"
        borderBottom={!isLessThan1280 ? '1px solid rgba(255,255,255,0.1)' : '0'}
      >
        <HStack w="full" justify="space-between">
          <Box onClick={() => navigate('/')} zIndex={100} pr="40px">
            {/* <Image minW="55px" h="32px" src={colorMode === 'light' ? Logo : LogoLight} /> */}
            <I.ImpaktIcon variant="lg" w="128px" />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="full"
            ml="0 !important"
            // spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1280 ? 'none' : 'flex', 'flex']}
          >
            <HStack w="full" align="space-between" id="yo" justify="space-between">
              <Box display="flex" ml="0 !important" justifyContent="center" w="full">
                <SidebarNavigationLinks />
              </Box>

              <HStack columnGap="2em" justifyContent="center" h={{ base: '40px', md: '100px' }}>
                {notifies > 0 ? (
                  <Box onClick={isOpen ? onClose : onOpen}>
                    <I.NotificationIcon color="fg1" cursor="pointer" />
                  </Box>
                ) : (
                  <Box onClick={isOpen ? onClose : onOpen}>
                    <I.NotifyIcon color="fg1" cursor="pointer" />
                  </Box>
                )}

                <SideBarNavigationDropDownMenu />
              </HStack>
            </HStack>
          </HStack>

          {/* <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1280={isLessThan1280}
          /> */}
        </HStack>
      </Flex>
      {/* {isLessThan1280 && (
        <CollapseMenu
          isOpen={isOpen}
          onClose={onClose}
          textColor={textColor}
          isLessThan1040={isLessThan1280}
        />
      )} */}
      {!isLessThan1280 && <NotificationDrawer open={isOpen} close={() => onClose()} />}
    </Box>
  );
};

export default SidebarNavigationMenu;
