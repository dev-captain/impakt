import { Box, HStack, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { C, I } from 'components';
import SidebarCollapseMenu from './SidebarCollapseMenu';
import SidebarNavigationMenu from './SidebarNavigationMenu';
import SidebarMenu from './SidebarMenu';

interface SidebarLayoutProps {
  isShowFooter?: boolean;
  isShowNavbar?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  isShowFooter = false,
  isShowNavbar = false,
}) => {
  const [isClose, setIsClose] = useState(false);

  return (
    <Box bgColor="a5" minH="100vh" position="relative">
      {isShowNavbar && <SidebarNavigationMenu position="fixed" />}

      <Box
        w="full"
        position="fixed"
        h="90px"
        zIndex="333"
        top="100px"
        color="white"
        display={{ base: 'initial', lg: ' none' }}
      >
        <Box marginX="16px">
          <SidebarCollapseMenu />
        </Box>
        {/* TODO  Sidebar */}
      </Box>
      <VStack
        as="main"
        color="#000"
        position="relative"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <HStack
          position="relative"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt="0 !important"
          w="full"
          minH={{ sm: 'calc(50vh)', lg: 'calc(100vh - 80px)' }}
          id="hstack"
        >
          <VStack
            position="fixed"
            height="100%"
            p="10em 0"
            display={{ base: 'none', lg: 'flex' }}
            w={{ base: 0, lg: isClose ? '80px' : '16.25vw' }}
            minW={{ base: 0, lg: isClose ? '80px' : '260px' }}
            transition="width .4s ease-in, min-width .4s linear"
            as="aside"
            justifyContent="flex-start"
            alignItems="flex-start"
            onMouseOver={() => {
              setIsClose(false);
            }}
            onMouseLeave={() => {
              setIsClose(true);
            }}
          >
            <SidebarMenu isHide={isClose} />
          </VStack>

          <VStack
            w="full"
            id="content-container"
            m="0 !important"
            marginLeft={{
              base: '0',
              lg: !isClose ? '20vw !important' : '5vw !important',
            }}
            transition="margin-left .4s ease-in"
            p={{ sm: '0 1em', lg: '7em 3em 3em 3em' }}
            marginTop={{ sm: '100px !important', lg: '0px !important' }}
          >
            <Outlet />
          </VStack>
        </HStack>
      </VStack>

      {isShowFooter && <C.FooterV2 wFull />}
    </Box>
  );
};
export default SidebarLayout;
