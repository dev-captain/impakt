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
        <HStack
          position="relative"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt="0 !important"
          w="full"
          minH="calc(100vh - 80px)"
          id="hstack"
        >
          <VStack
            position="absolute"
            height="100%"
            p="3em 2em"
            display={{ base: 'none', lg: 'flex' }}
            w={{ base: 0, lg: '20vw' }}
            minW={{ base: 0, lg: '260px' }}
            bgColor="rgba(28, 28, 40, 0.65)"
            as="aside"
            justifyContent="flex-start"
            alignItems="flex-start"
            ref={asideRef}
          >
            <C.Sidebar />
            {/* TODO  Sidebar */}
          </VStack>
          <VStack
            ref={rightRef}
            w="full"
            id="content-container"
            m="0 !important"
            marginLeft={{ base: '0', lg: '20vw !important' }}
            p={{ sm: '0 1em', lg: '3em 3em 0 3em' }}
          >
            <Outlet />
          </VStack>
        </HStack>
      </VStack>

      {isShowFooter && <C.FooterV2 wFull />}
    </>
  );
};
export default SidebarLayout;
