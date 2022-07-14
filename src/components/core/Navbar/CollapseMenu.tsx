import { VStack, Collapse, useToast, HStack, Box, Image, Link, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { parsePathname } from 'utils';
import Keys from 'i18n/types';
import { Socials } from 'data';
import NavbarLinkItem from './NavbarLinkItem';
import useAppSelector from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { signOutMember } from '../../../lib/redux/slices/member/actions/signOutMember';
import DropDownProfileMenu from './DropDownProfileMenu';
import SignInLinkItem from './SignInLinkItem';

type Props = {
  bg: string;
  isOpen: boolean;
  textColor: string;
  onClose: () => void;
  isLessThan1040: boolean;
  twitter: string;
  tiktok: string;
  discord: string;
  hover: object;
  youtube: string;

  isScrolling: boolean;
};

const CollapseMenu = ({
  isOpen,
  onClose,
  textColor,
  isLessThan1040,
  twitter,
  discord,
  hover,
  youtube,
  tiktok,
}: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const member = useAppSelector((state) => state.memberAuth.member);
  const location = useLocation();
  const path = parsePathname(location.pathname);
  const { t } = useTranslation().i18n;

  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack
        spacing={0}
        paddingBottom={8}
        bg="#1C1C28"
        marginTop="0px"
        borderRadius="12px"
        zIndex={900}
        color={textColor}
        padding="16px"
        mt="4px"
      >
        <NavbarLinkItem
          hide
          href="/"
          onClose={onClose}
          isActive={path.path === ''}
          title={t(Keys.navbar.impaktFitness)}
        />
        <NavbarLinkItem
          hide
          type="LINK"
          onClose={onClose}
          title={t(Keys.navbar.knowledgeBase)}
          href="https://knowledgebase.impakt.com"
          isActive={path.path === 'knowledge-base'}
        />
        <NavbarLinkItem
          hide
          href="/events"
          onClose={onClose}
          title={t(Keys.navbar.events)}
          isActive={path.path === 'events'}
        />
        <NavbarLinkItem
          href="/contact"
          onClose={onClose}
          title={t(Keys.navbar.contactUs)}
          isActive={path.path === 'contact'}
        />
        {member && (
          <NavbarLinkItem
            href="/dashboard"
            onClose={onClose}
            title={t(Keys.navbar.dashboard)}
            isActive={path.path === 'dashboard'}
          />
        )}

        {member && (
          <NavbarLinkItem
            href="#"
            onClose={async () => {
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
            title={t(Keys.navbar.signOut)}
            isActive={path.path === '#'}
          />
        )}

        {/* {!member && (
          <NavbarLinkItem
            href="/signin"
            title={t(Keys.navbar.signIn)}
            isActive={path.path === 'signin'}
          />
        )} */}

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
            pl={{ base: 0, md: '64px' }}
            spacing={{ base: '6px', md: '32px' }}
            justify={{ base: 'center', md: 'flex-end' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            <Box me="24px !important" as="a" target="_blank" href={Socials.twitter}>
              <Image
                maxW="35"
                w="35px"
                h="35px"
                opacity={0.6}
                objectFit="contain"
                src={twitter}
                {...hover}
              />
            </Box>
            <Box me="24px !important" as="a" target="_blank" href={Socials.discord}>
              <Image
                maxW="32"
                w="32px"
                h="32px"
                opacity={0.6}
                objectFit="contain"
                src={discord}
                {...hover}
              />
            </Box>
            <Box me="24px !important" as="a" target="_blank" href={Socials.tiktok}>
              <Image
                maxW="21px"
                minW="24px"
                h="24px"
                opacity={0.6}
                objectFit="contain"
                src={tiktok}
                {...hover}
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
                {...hover}
              />
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
          <Box display="flex">
            <DropDownProfileMenu />
          </Box>
          <Box>
            <SignInLinkItem />
          </Box>
          <Link href="/download" _hover={{ textDecoration: 'none' }}>
            <Button marginTop="8px" width={{ base: '100%', md: 'auto' }} colorScheme="red">
              {t(Keys.navbar.download)}
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Collapse>
  );
};

export default CollapseMenu;
