import { memo } from 'react';
import Keys from 'i18n/types';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Common } from 'components';
import { isProduction } from '../../../utils';
import routes from '../../../data/routes';

const NavbarLink = () => {
  const path = useLocation();
  const { t } = useTranslation().i18n;

  const textColor = 'rgba(255,255,255,0.5)';
  const passiveColor = 'white';

  return (
    <>
      <Common.LinkItem
        href={isProduction ? '/d/g/12' : 'https://community.impakt.com/'}
        title="Social Fitness"
        isActive={path.pathname === ''}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
        isNavigate={isProduction}
      />
      <Common.LinkItem
        title="vSports"
        href="http://vsports.me/"
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
      />
      <Common.LinkItem
        href={routes.contact}
        title={t(Keys.navbar.contactUs)}
        isActive={path.pathname === 'contact'}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
        isNavigate
      />
    </>
  );
};

export default memo(NavbarLink);
