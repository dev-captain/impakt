import { FC } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import { I, Common } from 'components';

import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';
import DropDownProfileMenu from './DropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';
import NavBarLink from './NavBarLink';

interface NavbarProps {
  position?: PositionProps['position'];
  isVersion2?: boolean;
}
// const { dark, light } = Images;

const Navbar: FC<NavbarProps> = ({ position = 'fixed', isVersion2 = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { colorMode } = useColorMode();

  const isLight = colorMode === 'light';
  const textColor = isLight ? 'glass.100' : 'glass.700';
  // const bgColor = path.path !== '' || isScrolling ? 'rgba(28, 28, 40, 0.65)' : 'transparent';
  const bgColor = isVersion2 ? '#fff' : 'rgba(28, 28, 40, 0.65)';

  return (
    <Box
      position={position}
      top="0"
      zIndex="99999999999"
      w="full"
      px={isVersion2 && !isLessThan1280 ? '0' : '16px'}
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      background={isVersion2 ? '#eef4f6' : 'transparent'}
    >
      {isOpen && !isVersion2 && <Gradient />}
      <Flex
        w="full"
        h="100px"
        maxW={isVersion2 && !isLessThan1280 ? 'full' : '1232px'}
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        // color={textColor}
        position="relative"
        alignItems="center"
        px={isVersion2 && !isLessThan1280 ? '3em' : '16px'}
        borderRadius={isVersion2 && !isLessThan1280 ? '0' : '16px'}
        height={isVersion2 && !isLessThan1280 ? '80px' : '70px'}
        marginTop={isVersion2 && !isLessThan1280 ? '0' : '10px'}
        transition="background-color 0.5s linear"
        bgColor={bgColor}
        backdropFilter={
          // isScrolling
          // ||
          path.path !== '' ? 'blur(40px)' : 'blur(0px)'
        }
        borderBottom={isVersion2 && !isLessThan1280 ? '1px solid rgba(255,255,255,0.1)' : '0'}
      >
        <HStack w="full" justify="space-between">
          <Box
            onClick={() => navigate('/')}
            zIndex={100}
            pr="40px"
            minWidth={{ base: isVersion2 ? 'auto' : 'auto' }}
          >
            {/* <Image minW="55px" h="32px" src={colorMode === 'light' ? Logo : LogoLight} /> */}
            <I.ImpaktIcon whiteMode={!isVersion2} variant="lg" w="128px" />
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
                <HStack
                  spacing={[3, 3, 3, 5, 6, 12]}
                  flexWrap={{ base: 'wrap', md: 'nowrap' }}
                  justifyContent={{ base: 'center', md: 'start' }}
                  display="flex"
                >
                  <NavBarLink />
                </HStack>
              </Box>

              {!isVersion2 && (
                <HStack
                  justify={{ base: 'center', md: 'flex-end' }}
                  spacing="8px"
                  pl={{ base: isVersion2 ? '0px' : '64px' }}
                >
                  <Common.SocialIcons />
                  <Box position="relative" display="flex">
                    <DropDownProfileMenu />
                  </Box>

                  <Box>
                    <SignInLinkItem />
                  </Box>

                  <Common.ImpaktButton
                    as="a"
                    variant="primary"
                    href="/download"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/download');
                    }}
                  >
                    {t(Keys.navbar.download)}
                  </Common.ImpaktButton>
                </HStack>
              )}
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
    </Box>
  );
};

export default Navbar;

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
