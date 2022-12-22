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
        href="http://community.impakt.com/"
        title="Social Fitness"
        isActive={path.pathname === ''}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
      />
      <Common.LinkItem
        title="vSports"
        href="http://vsports.me/"
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
      />
      <Common.LinkItem
        href="http://impakt.com/contact"
        title={t(Keys.navbar.contactUs)}
        isActive={path.pathname === 'contact'}
        titleActiveColor={passiveColor}
        titlePassiveColor={textColor}
      />
    </>
  );
};

export default memo(NavbarLink);
