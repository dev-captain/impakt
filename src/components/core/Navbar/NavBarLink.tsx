import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Common } from '@/components';
import { isProduction } from '../../../utils';
import routes from '../../../data/routes';
import Keys from '@/i18n/translations/en';

const NavbarLink = () => {
  const path = useLocation();

  const textColor = 'rgba(255,255,255,0.5)';
  const passiveColor = 'white';

  return (
    <>
      <Common.NavBarLinkItem
        href={isProduction ? '/d/g/12' : 'https://community.impakt.com/'}
        title="Social Fitness"
        isActive={path.pathname === ''}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
        isNavigate={isProduction}
      />
      <Common.NavBarLinkItem
        title="vSports"
        href="http://vsports.me/"
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
      />
      <Common.NavBarLinkItem
        href={routes.contact}
        title={Keys.navbar.contactUs}
        isActive={path.pathname === 'contact'}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
        isNavigate
      />
    </>
  );
};

export default memo(NavbarLink);
