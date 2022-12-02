import { memo } from 'react';
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
    <>
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
    </>
  );
};

export default memo(NavbarLink);
