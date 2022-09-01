import { Box, HStack, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { C, I } from 'components';
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
  const [isClose, setIsClose] = useState(false);

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
        top="100px"
        color="white"
        display={{ base: 'flex', lg: ' none' }}
      >
        <Box marginX="16px">
          <CollapseSidebar />
        </Box>
        {/* TODO  Sidebar */}
      </Box>
      <VStack
        as="main"
        bgColor="#EEF4F6"
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
            p="3em 0"
            display={{ base: 'none', lg: 'flex' }}
            w={{ base: 0, lg: isClose === true ? '80px' : '20vw' }}
            minW={{ base: 0, lg: isClose === true ? '80px' : '260px' }}
            bgColor="white"
            as="aside"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box
              width="100%"
              display="flex"
              justifyContent={isClose === true ? 'center' : 'end'}
              paddingRight={isClose === true ? '0' : '24px'}
            >
              {isClose === true ? (
                <HamburgerIcon
                  onClick={() => setIsClose(!isClose)}
                  color="#4E6070"
                  width="24px"
                  height="32px"
                  cursor="pointer"
                />
              ) : (
                <I.CloseIcon onClick={() => setIsClose(!isClose)} cursor="pointer" />
              )}
            </Box>
            <C.Sidebar collaps={isClose} />
            {/* TODO  Sidebar */}
          </VStack>

          <VStack
            w="full"
            id="content-container"
            m="0 !important"
            marginLeft={{
              base: '0',
              lg: isClose === false ? '20vw !important' : '10vw !important',
            }}
            p={{ sm: '0 1em', lg: '3em 3em 3em 3em' }}
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
