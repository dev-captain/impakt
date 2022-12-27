import { useLocation } from 'react-router-dom';
import { parsePathname } from '@/utils';
import Keys from '@/i18n/translations/en';
import { Common } from '@/components';
import routes from '../../../data/routes';

const SidebarNavigationLinks = () => {
  // TODO Sidebar links UI
  const location = useLocation();
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
        isNavigate
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
        title={Keys.navbar.contactUs}
        isActive={path.path === 'contact'}
        textStyle="semiBold6"
        isNavigate
      />
    </>
  );
};

export default SidebarNavigationLinks;
