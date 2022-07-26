import { Box, HStack, useDimensions, VStack } from '@chakra-ui/react';
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
  const rightRef = React.useRef<HTMLDivElement>(null);
  const rightDimension = useDimensions(rightRef);
  const asideRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!asideRef.current || !rightDimension) return;
    asideRef.current.style.minHeight = `${rightDimension.borderBox.height ?? 0 + 300}px`;
  }, [asideRef, rightDimension]);

  return (
    <>
      {isShowNavbar && (
        <Box bgColor="#060609" as="nav" w="full" minH="80px">
          <Navbar isVersion2 position="absolute" />
        </Box>
      )}
      <VStack
        as="main"
        bgColor="#060609"
        color="white"
        position="relative"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <VStack mt="0 !important" w="full" h="full">
          <HStack
            justifyContent="flex-start"
            alignItems="flex-start"
            mt="0 !important"
            w="full"
            display={{ md: 'flex' }}
          >
            <VStack
              p={{ base: '48px 16px 0 16px', md: '48px 32px' }}
              minH={{ md: '100vh' }}
              minW="384px"
              bgColor={{ md: 'rgba(28, 28, 40, 0.65)' }}
              as="aside"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              ?
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
