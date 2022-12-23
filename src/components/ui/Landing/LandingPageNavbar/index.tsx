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
  // PositionProps,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isProduction, parsePathname } from 'utils';

import { I, Common } from 'components';

import CollapseMenu from './LandingPageCollapseMenu';
import DropDownProfileMenu from './LandingPageDropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';
// import NavBarLink from './NavBarLink';
import NavBarSocialIcons from './LandingPageNavbarSocialIcons';
import routes from '../../../../data/routes';

// const { dark, light } = Images;

const LandingPageNavbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = parsePathname(location.pathname);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const { colorMode, setColorMode } = useColorMode();
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

  return (
    <Box
      top="0"
      w="full"
      px="16px"
      display={isLessThan1280 ? 'auto' : 'flex'}
      justifyContent="center"
      background="#fff"
    >
      <Flex
        w="full"
        h="100px"
        maxW="1660px"
        flexDir="row"
        alignSelf="center"
        overflow="visible"
        color={textColor}
        position="relative"
        alignItems="center"
        px="16px"
        borderRadius="16px"
        height="fit-content"
        padding="20px"
        transition="background-color 0.5s linear"
        bgColor="#fff"
        backdropFilter={path.path !== '' ? 'blur(40px)' : 'blur(0px)'}
        borderBottom="0"
      >
        <HStack w="full" justify="space-between">
          <Box onClick={() => navigate('/')} zIndex={100} pr="40px" minWidth="auto">
            <I.ImpaktIcon variant="lg" />
          </Box>
          <Box
            display={['none', 'none', 'none', isLessThan1280 ? 'none' : 'flex', 'flex']}
            ml="0 !important"
            w="300px"
            justifyContent="space-between"
          >
            <Common.LinkItem
              href={isProduction ? '/d/g/12' : 'https://community.impakt.com/'}
              title="Social Fitness"
              titleActiveColor="fg"
              textStyle="semiBold6"
              titlePassiveColor="fg"
              isNavigate={isProduction}
            />
            <Common.LinkItem
              href="http://vsports.me/"
              title="vSports"
              titleActiveColor="fg"
              textStyle="semiBold6"
              titlePassiveColor="fg"
            />
            <Common.LinkItem
              href={routes.contact}
              isNavigate
              title="Contact Us"
              titleActiveColor="fg"
              textStyle="semiBold6"
              titlePassiveColor="fg"
            />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="auto"
            spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1280 ? 'none' : 'flex', 'flex']}
          >
            <HStack w="auto" display="flex" justifyContent="flex-end" alignItems="center">
              <Box display="flex" ml="0 !important" justifyContent="center" w="auto">
                {/* <NavBarLink IsHeader /> */}
                <NavBarSocialIcons />
              </Box>
              <HStack
                justify={{ base: 'center', md: 'flex-end' }}
                spacing="8px"
                pl={{ base: '16px' }}
              >
                <Box
                  display="flex"
                  gap="8px"
                  marginLeft="0 !important"
                  flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                >
                  <Box onClick={() => navigate(routes.download)}>
                    <Common.ImpaktButton
                      color="#F04153"
                      bg="#FDE8EA"
                      gap="14px"
                      padding="10px 14px"
                    >
                      <I.DownloadIcon width="16px" />
                      Get The App
                    </Common.ImpaktButton>
                  </Box>
                  <Box>
                    <SignInLinkItem />
                  </Box>
                  <Box position="relative" display="flex">
                    <DropDownProfileMenu />
                  </Box>
                </Box>
              </HStack>
            </HStack>
          </HStack>

          <Common.CollapseMenuIconButton
            display={{ base: 'flex', lg: 'none' }}
            aria-label="Toggle Navigation"
            isOpen={isOpen}
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <CollapseMenu
        isOpen={isOpen}
        onClose={onClose}
        textColor={textColor}
        isLessThan1040={isLessThan1280}
      />
    </Box>
  );
};

export default LandingPageNavbar;
