import { Box, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { C } from 'components';
import Navbar from './Navbar';
import CollapseSidebar from './Navbar/CollapseSidebar';

interface SidebarLayoutProps {
  isShowFooter?: boolean;
  isShowNavbar?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  isShowFooter = false,
  isShowNavbar = false,
}) => {
  return (
    <Box bgColor="#060609" minH="100vh" position="relative">
      {isShowNavbar && (
        <Box bgColor="#060609" as="nav" w="full" minH="80px">
          <Navbar isVersion2 position="fixed" />
        </Box>
      )}

      <Box
        w="full"
        position="fixed"
        h="90px"
        zIndex="333"
        top="127px"
        color="white"
        display={{ base: 'flex', lg: ' none' }}
      >
        <Box marginX="16px" w="100%">
          <CollapseSidebar />
        </Box>
        {/* TODO  Sidebar */}
      </Box>
      <VStack
        as="main"
        bgColor="#060609"
        color="white"
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
            p="3em 2em"
            display={{ base: 'none', lg: 'flex' }}
            w={{ base: 0, lg: '20vw' }}
            minW={{ base: 0, lg: '260px' }}
            bgColor="rgba(28, 28, 40, 0.65)"
            as="aside"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <C.Sidebar />
            {/* TODO  Sidebar */}
          </VStack>

          <VStack
            w="full"
            id="content-container"
            m="0 !important"
            marginLeft={{ base: '0', lg: '20vw !important' }}
            p={{ sm: '0 1em', lg: '3em 3em 3em 3em' }}
            marginTop={{ sm: '120px !important', lg: '0px !important' }}
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
