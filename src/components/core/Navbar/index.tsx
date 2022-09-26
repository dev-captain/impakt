/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  // Image,
  HStack,
  useDisclosure,
  useMediaQuery,
  useColorMode,
  PositionProps,
  useToast,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parsePathname } from 'utils';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import { I, Common } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';
import DropDownProfileMenu from './DropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';
import NavBarLink from './NavBarLink';
import NavBarSocialIcons from './NavBarSocialIcons';
import { signOutMember } from '../../../lib/redux/slices/member/actions/signOutMember';
import NotificationDrawer from '../../ui/MemberDashBoard/Drawer/NoitificationDrawer';

interface NavbarProps {
  position?: PositionProps['position'];
  isVersion2?: boolean;
}
// const { dark, light } = Images;

const Navbar: FC<NavbarProps> = ({ position = 'fixed', isVersion2 = false }) => {
  const [notify] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const { onOpen, isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { colorMode, setColorMode } = useColorMode();
  const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);

  useEffect(() => {
    if (!isLessThan1280) {
      onClose();
    }
  }, [isLessThan1280, onClose]);

  useEffect(() => {
    if (path.path === 'dashboard') {
      setColorMode('light');
    }
  }, [path.path]);

  const isLight = colorMode === 'light';
  const textColor = isLight ? 'glass.100' : 'glass.700';
  const bgColor = path.path !== '' || isScrolling ? 'rgba(28, 28, 40, 0.65)' : 'transparent';

  return (
    <Box
      position={position}
      top="0"
      zIndex="99999999999"
      w="full"
      px={isVersion2 && !isLessThan1280 ? '0' : '16px'}
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      background={isVersion2 ? '#eef4f6' : bgColor}
    >
      {isOpen && !isVersion2 && <Gradient />}
      <Flex
        w="full"
        h="100px"
        maxW={isVersion2 && !isLessThan1280 ? 'full' : '1232px'}
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        px={isVersion2 && !isLessThan1280 ? '3em' : '16px'}
        borderRadius={isVersion2 && !isLessThan1280 ? '0' : '16px'}
        height={isVersion2 && !isLessThan1280 ? '80px' : '70px'}
        marginTop={isVersion2 && !isLessThan1280 ? '0' : '10px'}
        transition="background-color 0.5s linear"
        bgColor={isVersion2 ? 'white' : bgColor}
        backdropFilter={isScrolling || path.path !== '' ? 'blur(40px)' : 'blur(0px)'}
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
            <I.ImpaktIcon isblack={`${isVersion2}`} cursor="pointer" width="111px" height="32px" />
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
                <NavBarLink IsHeader />
              </Box>

              {!isVersion2 && (
                <HStack
                  justify={{ base: 'center', md: 'flex-end' }}
                  spacing="8px"
                  pl={{ base: isVersion2 ? '0px' : '64px' }}
                >
                  <NavBarSocialIcons />
                  <Box position="relative" display="flex">
                    <DropDownProfileMenu />
                  </Box>

                  <Box>
                    <SignInLinkItem />
                  </Box>

                  <Common.ImpaktButton
                    as="a"
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

              {isVersion2 && (
                <HStack justifyContent="center" h={{ base: '40px', md: '100px' }}>
                  <Common.ImpaktButton
                    href="/dashboard"
                    as="a"
                    p="10px 16px 10px 12px"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    leftIcon={<I.DashboardIcon cursor="pointer" width="14.33px" height="12.33px" />}
                    variant="white"
                  >
                    {t(Keys.navbar.dashboard)}
                  </Common.ImpaktButton>
                  <Common.ImpaktButton
                    as="a"
                    p="10px 16px 10px 12px"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpen();
                    }}
                    leftIcon={
                      // <I.NotificationIcon cursor="pointer" width="14.33px" height="12.33px" />
                      notify ? (
                        <I.NotifyIcon cursor="pointer" width="14.33px" height="14.33px" />
                      ) : (
                        <I.NotificationIcon cursor="pointer" width="14.33px" height="12.33px" />
                      )
                    }
                    variant="white"
                  >
                    {t(Keys.navbar.notification)}
                  </Common.ImpaktButton>
                  <Common.ImpaktButton
                    href="/contact"
                    as="a"
                    onClick={(e: any) => {
                      e.preventDefault();
                      navigate('/contact');
                    }}
                    leftIcon={<I.HelpIcon cursor="pointer" width="14.33px" height="12.33px" />}
                    variant="white"
                  >
                    {t(Keys.navbar.help)}
                  </Common.ImpaktButton>

                  <Common.ImpaktButton
                    onClick={async () => {
                      await dispatch(signOutMember()).unwrap();
                      toast({
                        title: 'Success',
                        description: 'You have successfully logged out!',
                        isClosable: true,
                        duration: 8000,
                        status: 'success',
                      });
                      onClose();
                    }}
                    leftIcon={<I.LogOutIcon cursor="pointer" width="13px" height="13px" />}
                    variant="alert"
                  >
                    {t(Keys.navbar.signOut)}
                  </Common.ImpaktButton>
                </HStack>
              )}
            </HStack>
          </HStack>
          {/* <HStack
            align="center"
            spacing="44px"
            justify="flex-end"
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            <HStack
              pl={{ base: 0, md: '64px' }}
              spacing={{ base: '6px', md: '32px' }}
              justify={{ base: 'center', md: 'flex-end' }}
              display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
            >
              <Box as="a" target="_blank" href={Socials.twitter}>
                <Image
                  maxW="35"
                  w="35px"
                  h="35px"
                  opacity={0.6}
                  objectFit="contain"
                  src={twitter}
                  {..._hover}
                />
              </Box>
              <Box as="a" target="_blank" href={Socials.discord}>
                <Image
                  maxW="32"
                  w="32px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={discord}
                  {..._hover}
                />
              </Box>
              <Box me="24px !important" as="a" target="_blank" href={Socials.tiktok}>
                <Image
                  maxW="21px"
                  minW="24px"
                  h="24px"
                  opacity={0.6}
                  objectFit="contain"
                  src={Tiktok}
                  {..._hover}
                />
              </Box>
              <Box as="a" target="_blank" href={Socials.youtube}>
                <Image
                  maxW="32"
                  w="32px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={youtube}
                  {..._hover}
                />
              </Box>
              {path.path !== 'dashboard' && (
                <Box
                  as="button"
                  onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                >
                  <Image
                    w="26px"
                    h="26px"
                    minW="26px"
                    objectFit="contain"
                    src={colorMode === 'dark' ? dark : light}
                    {..._hover}
                  />
                </Box>
              )}
            </HStack>
          </HStack> */}
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1280={isLessThan1280}
            isVersion2={isVersion2}
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

export default Navbar;

const Gradient = () => {
  return (
    <Box
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
