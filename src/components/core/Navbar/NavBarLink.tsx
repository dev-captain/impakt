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
import Keys from 'i18n/types';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Common } from 'components';

const NavbarLink = () => {
  const path = useLocation();
  const { t } = useTranslation().i18n;

  const textColor = 'rgba(255,255,255,0.5)';
  const passiveColor = 'white';

  return (
    <HStack
      spacing={[3, 3, 3, 5, 6, 12]}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent={{ base: 'center', md: 'start' }}
      display="flex"
    >
      <Common.LinkItem
        href="/"
        title={t(Keys.navbar.impaktFitness)}
        isActive={path.pathname === ''}
        passiveColor={passiveColor}
        titleTextColor={textColor}
        isNavigate
      />
      <Common.LinkItem
        title={t(Keys.navbar.knowledgeBase)}
        href="https://knowledgebase.impakt.com"
        isActive={path.pathname === 'knowledge-base'}
        passiveColor={passiveColor}
        titleTextColor={textColor}
      />
      {/* <Common.LinkItem
        href="/events"
        passiveColor={passiveColor}
        title={t(Keys.navbar.events)}
        isActive={path.pathname === 'events'}
      /> */}
      <Common.LinkItem
        href="/contact"
        title={t(Keys.navbar.contactUs)}
        isActive={path.pathname === 'contact'}
        passiveColor={passiveColor}
        titleTextColor={textColor}
        isNavigate
      />
      {/* (
      <Common.LinkItem
        href="/terms-of-use"
        passiveColor={passiveColor}
        title={t(Keys.navbar.termsOfUse)}
        isActive={path.pathname === 'terms-of-use'}
      />
      ) */}
    </HStack>
  );
};

export default memo(NavbarLink);
