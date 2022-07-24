import { Box, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { C } from 'components';
import Navbar from './Navbar';

interface SidebarLayoutProps {
  isShowFooter?: boolean;
  isShowNavbar?: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  isShowFooter = false,
  isShowNavbar = true,
}) => {
  return (
    <>
      <VStack
        as="main"
        bgColor="#060609"
        color="white"
        h="100vh"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {isShowNavbar && (
          <Box w="full" minH="80px">
            <Navbar isVersion2 position="absolute" />
          </Box>
        )}
        <VStack mt="0 !important" w="full" h="full">
          <HStack justifyContent="flex-start" alignItems="flex-start" mt="0 !important" w="full">
            <VStack
              p="3em 2em"
              minH="100vh"
              minW="384px"
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
              overflowY="auto"
              m="0 !important"
              maxH="100vh"
              p="3em 3em 0 3em"
            >
              <Outlet />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      {isShowFooter && <C.FooterV2 wFull />}
    </>
  );
};
export default SidebarLayout;
