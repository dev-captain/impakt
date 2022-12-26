import { VStack, Collapse, HStack, Box, Link, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { parsePathname } from '@/utils';
import Keys from '@/i18n/translations/en';
import { Socials } from '@/data';
import { I } from '@/components';

import NavbarLinkItem from '../../common/LinkItem';
import SignInLinkItem from './SignInLinkItem';
import { usePersistedAuthStore } from '../../../lib/zustand';
import { useLogout } from '../../../hooks/useLogout';
import routes from '../../../data/routes';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLessThan1040: boolean;
};

const CollapseMenu = ({ isOpen, onClose, isLessThan1040 }: Props) => {
  const logout = useLogout();
  const { member } = usePersistedAuthStore();
  const location = useLocation();
  const path = parsePathname(location.pathname);

  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack
        paddingBottom={8}
        bg="#1C1C28"
        marginTop="0px"
        borderRadius="12px"
        zIndex={900}
        padding="16px"
        mt="4px"
      >
        <NavbarLinkItem href={routes.groups} isNavigate title="Groups" />
        {member && (
          <NavbarLinkItem href={routes.dashboard} isNavigate title={Keys.navbar.dashboard} />
        )}
        <NavbarLinkItem href="/" isNavigate title={Keys.navbar.impaktFitness} />
        <NavbarLinkItem title={Keys.navbar.knowledgeBase} href="https://knowledgebase.impakt.com" />
        <NavbarLinkItem href="/events" isNavigate title={Keys.navbar.events} />
        <NavbarLinkItem
          isNavigate
          title={Keys.navbar.contactUs}
          isActive={path.path === 'contact'}
        />

        {member && (
          <NavbarLinkItem
            href="#"
            onClick={async () => {
              await logout().finally(() => {
                onClose();
              });
            }}
            title={Keys.navbar.signOut}
          />
        )}

        <HStack
          align="center"
          spacing="44px"
          justify="flex-end"
          flex={{ base: 1, md: 'auto' }}
          display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          marginBottom="24px !important"
          marginTop="20px !important"
        >
          <HStack
            pl={{ base: 0, md: '0' }}
            w="auto"
            justifyContent="center"
            spacing={{ base: '6px', md: '32px' }}
            // justify={{ base: 'center', md: 'flex-end' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            <Box
              color="rgba(255,255,255,0.5)"
              _hover={{
                color: 'rgba(255,255,255,1)',
                transition: '.2s linear',
              }}
              as="a"
              target="_blank"
              href={Socials.twitter}
            >
              <I.TwitterIcon />
            </Box>
            <Box
              color="rgba(255,255,255,0.5)"
              _hover={{
                color: 'rgba(255,255,255,1)',
                transition: '.2s linear',
              }}
              as="a"
              target="_blank"
              href={Socials.discord}
            >
              <I.DiscordIcon />
            </Box>
            <Box
              color="rgba(255,255,255,0.5)"
              _hover={{
                color: 'rgba(255,255,255,1)',
                transition: '.2s linear',
              }}
              as="a"
              target="_blank"
              href={Socials.tiktok}
            >
              <I.TikTokIcon />
            </Box>
            <Box
              color="rgba(255,255,255,0.5)"
              _hover={{
                color: 'rgba(255,255,255,1)',
                transition: '.2s linear',
              }}
              as="a"
              target="_blank"
              href={Socials.youtube}
            >
              <I.YoutubeSocialIcon />
            </Box>
            {/* {path.path !== 'dashboard' && (
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
                  {...hover}
                />
              </Box>
            )} */}
          </HStack>
        </HStack>
        <HStack w="full" align="space-between" flexDirection="column" justify="space-between">
          <Box w="full" ml="0 !important">
            <SignInLinkItem />
          </Box>
          <Box w="full" display="flex" mt="2" ml="0 !important">
            <Link w="full" href={routes.download} _hover={{ textDecoration: 'none' }}>
              <Button marginTop="8px" width="100%" colorScheme="red">
                {Keys.navbar.download}
              </Button>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </Collapse>
  );
};

export default CollapseMenu;
