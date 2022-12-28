import { FC } from 'react';
import { Box, Flex, HStack, PositionProps, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Common, I } from '@/components';

import { usePersistedAuthStore, usePersistedGroupStore } from '../../../lib/zustand';
import SidebarNavigationLinks from './SidebarNavigationLinks';
import SideBarNavigationDropDownMenu from './SideBarNavigationDropDownMenu';
import SignInButton from '../../ui/Landing/LandingPageNavbar/SignInLinkItem';

interface SidebarNavigationMenuProps {
  position?: PositionProps['position'];
  notificationDrawerIsOpen: boolean;
  notificationDrawerOpen: () => void;
  notificationDrawerClose: () => void;
}

const SidebarNavigationMenu: FC<SidebarNavigationMenuProps> = ({
  position = 'fixed',
  notificationDrawerIsOpen,
  notificationDrawerClose,
  notificationDrawerOpen,
}) => {
  const { member } = usePersistedAuthStore();
  const navigate = useNavigate();
  const notifies = usePersistedGroupStore().groupRequests.filter(
    (requestD) => requestD.status === 'Pending',
  ).length;

  const textColor = 'glass.100';

  return (
    <Box
      position={position}
      as="nav"
      top="0"
      zIndex="999"
      w="full"
      display="flex"
      justifyContent="center"
      px={{ base: '1em', lg: '3em' }}
      bgColor="a5"
      h={{ base: 'auto', lg: '112px' }}
      maxH="90px"
      id="navbar-box"
    >
      <Flex
        w="full"
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        minH="80px"
      >
        <HStack w="full" justify="space-between">
          <Box onClick={() => navigate('/')} zIndex={100} pr="40px">
            <I.ImpaktIcon variant="lg" w="128px" />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="full"
            ml="0 !important"
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack w="full" align="space-between" id="yo" justify="space-between">
              <Box display="flex" ml="0 !important" justifyContent="center" w="full">
                <HStack
                  spacing={[3, 3, 3, 5, 8, 12]}
                  flexWrap={{ base: 'wrap', md: 'nowrap' }}
                  justifyContent={{ base: 'center', md: 'start' }}
                  display="flex"
                >
                  <SidebarNavigationLinks />
                </HStack>
              </Box>
              {member && (
                <HStack
                  columnGap="2em"
                  spacing="0px !important"
                  justifyContent="center"
                  h={{ base: '40px', md: '100px' }}
                >
                  {notifies > 0 ? (
                    <Box
                      onClick={
                        notificationDrawerIsOpen ? notificationDrawerClose : notificationDrawerOpen
                      }
                    >
                      <I.NotificationIcon isActive color="fg1" cursor="pointer" />
                    </Box>
                  ) : (
                    <Box
                      onClick={
                        notificationDrawerIsOpen ? notificationDrawerClose : notificationDrawerOpen
                      }
                    >
                      <I.NotifyIcon color="fg1" cursor="pointer" />
                    </Box>
                  )}

                  <SideBarNavigationDropDownMenu />
                </HStack>
              )}
              {!member && (
                <Box>
                  <SignInButton />
                </Box>
              )}
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <Common.CollapseMenu>
        <VStack
          display={{ base: 'flex', md: 'none' }}
          borderRadius="12px"
          boxShadow="light"
          mx="1em"
          bgColor="white"
          p="1em"
        >
          <SidebarNavigationLinks />
          <SideBarNavigationDropDownMenu offset={[-15, 10]} />
        </VStack>
      </Common.CollapseMenu>
    </Box>
  );
};

export default SidebarNavigationMenu;
