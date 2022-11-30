import { parsePathname } from 'utils';
import Keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { HStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Common } from 'components';

const SidebarNavigationLinks = () => {
  // TODO Sidebar links UI
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const textColor = 'fg';
  const activeColor = 'fg';
  const passiveColor = 'fg';

  return (
    <HStack
      spacing={[3, 3, 3, 5, 8, 12]}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent={{ base: 'center', md: 'start' }}
      display="flex"
    >
      <Common.LinkItem
        titleTextColor={activeColor || textColor}
        href="/"
        isNavigate
        title={t(Keys.navbar.impaktFitness)}
        isActive={path.path === ''}
        color={activeColor || textColor}
        passiveColor={passiveColor}
      />
      <Common.LinkItem
        titleTextColor={activeColor || textColor}
        passiveColor={passiveColor}
        title={t(Keys.navbar.knowledgeBase)}
        href="https://knowledgebase.impakt.com"
        isActive={path.path === 'knowledge-base'}
      />
      <Common.LinkItem
        titleTextColor={activeColor || textColor}
        href="/contact"
        isNavigate
        passiveColor={passiveColor}
        title={t(Keys.navbar.contactUs)}
        isActive={path.path === 'contact'}
      />
    </HStack>
  );
};

export default SidebarNavigationLinks;
