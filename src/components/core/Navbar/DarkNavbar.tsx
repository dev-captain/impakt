/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { FC, useEffect } from 'react';
import {
  Box,
  Flex,
  // Image,
  HStack,
  useDisclosure,
  useMediaQuery,
  useColorMode,
  PositionProps,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { I } from 'components';

import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';
import NavBarLink from './NavBarLink';
import NotificationDrawer from '../../ui/MemberDashBoard/Drawer/NoitificationDrawer';

interface NavbarProps {
  position?: PositionProps['position'];
}

const DarkNavbar: FC<NavbarProps> = ({ position = 'fixed' }) => {
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!isLessThan1280) {
      onClose();
    }
  }, [isLessThan1280, onClose]);

  const isLight = colorMode === 'light';
  const textColor = isLight ? 'glass.100' : 'glass.700';
  // const bgColor = path.path !== '' || isScrolling ? 'rgba(28, 28, 40, 0.65)' : 'transparent';
  const bgColor = 'rgba(28, 28, 40, 0.65)';

  return (
    <Box
      position={position}
      top="0"
      zIndex="99999999999"
      w="full"
      px={!isLessThan1280 ? '0' : '16px'}
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      background="transparent"
    >
      {isOpen && <Gradient />}
      <Flex
        w="full"
        h="100px"
        maxW={!isLessThan1280 ? 'full' : '1232px'}
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        px="16px"
        borderRadius="16px"
        height="70px"
        marginTop="10px"
        transition="background-color 0.5s linear"
        bgColor={bgColor}
        backdropFilter="blur(40px)"
        borderBottom="0"
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
                <NavBarLink />
              </Box>
            </HStack>
          </HStack>
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1280={isLessThan1280}
          />
        </HStack>
      </Flex>
      {isLessThan1280 && (
        <CollapseMenu
          isOpen={isOpen}
          onClose={onClose}
          textColor={textColor}
          isLessThan1040={isLessThan1280}
        />
      )}
      {!isLessThan1280 && <NotificationDrawer open={isOpen} close={() => onClose()} />}
    </Box>
  );
};

export default DarkNavbar;

const Gradient = () => {
  return (
    <Box
      id="gradient"
      zIndex={10}
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      opacity="0.4"
      pos="absolute"
      w="930px"
      h="472px"
      left="-637px"
      top="-314px"
    />
  );
};
