import { isProduction, parsePathname } from 'utils';
import Keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Common } from 'components';
import routes from '../../../data/routes';

const SidebarNavigationLinks = () => {
  // TODO Sidebar links UI
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const path = parsePathname(location.pathname);
  const textColor = 'fg';
  const passiveColor = 'fg';
  const activeColor = 'fg';

  return (
    <>
      <Common.LinkItem
        titlePassiveColor={passiveColor || textColor}
        href={routes.explore}
        title="Social Fitness"
        isActive={path.path === ''}
        color={activeColor || textColor}
        titleActiveColor={activeColor}
        textStyle="semiBold6"
        isNavigate={isProduction}
      />
      <Common.LinkItem
        titleActiveColor={activeColor}
        titlePassiveColor={passiveColor}
        title="vSports"
        href="http://vsports.me/"
        isActive={path.path === 'knowledge-base'}
        textStyle="semiBold6"
      />
      <Common.LinkItem
        titleActiveColor={activeColor}
        titlePassiveColor={passiveColor}
        href={routes.contact}
        title={t(Keys.navbar.contactUs)}
        isActive={path.path === 'contact'}
        textStyle="semiBold6"
        isNavigate
      />
    </>
  );
};

export default SidebarNavigationLinks;
