import {
  memo,
  // ,
  // useEffect
} from 'react';
// import { parsePathname } from 'utils';
// import Keys from 'i18n/types';
import {
  HStack,
  // useMediaQuery
} from '@chakra-ui/react';
// import { useLocation } from 'react-router-dom';
// import NavbarLinkItem from './NavbarLinkItem';

const NavbarLink = () => {
  // const location = useLocation();
  // const path = parsePathname(location.pathname);

  // const textColor = location.pathname.includes('dashboard') ? 'fitnessGray' : 'glass.100';
  // const activeColor = location.pathname.includes('dashboard') ? 'fitnessGray' : 'glass.100';
  // const passiveColor = location.pathname.includes('dashboard')
  //   ? 'fitnessGray'
  //   : 'rgba(255,255,255)';

  return (
    <HStack
      spacing={[3, 3, 3, 5, 6, 12]}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent={{ base: 'center', md: 'start' }}
      display="flex"
    >
      {/* <NavbarLinkItem
        href="/"
        title={t(Keys.navbar.impaktFitness)}
        isActive={path.path === ''}
        color={activeColor || textColor}
        passiveColor={passiveColor}
      />
      <NavbarLinkItem
        type="LINK"
        onClose={onClose}
        passiveColor={passiveColor}
        title={t(Keys.navbar.knowledgeBase)}
        href="https://knowledgebase.impakt.com"
        isActive={path.path === 'knowledge-base'}
      />
      <NavbarLinkItem
        href="/events"
        onClose={onClose}
        passiveColor={passiveColor}
        title={t(Keys.navbar.events)}
        isActive={path.path === 'events'}
      />
      <NavbarLinkItem
        href="/contact"
        onClose={onClose}
        passiveColor={passiveColor}
        title={t(Keys.navbar.contactUs)}
        isActive={path.path === 'contact'}
      />
      {!IsHeader && (
        <NavbarLinkItem
          href="/terms-of-use"
          onClose={onClose}
          passiveColor={passiveColor}
          title={t(Keys.navbar.termsOfUse)}
          isActive={path.path === 'terms-of-use'}
        />
      )} */}
    </HStack>
  );
};

export default memo(NavbarLink);
