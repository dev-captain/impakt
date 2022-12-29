import { useLocation } from 'react-router-dom';
import { isProduction, parsePathname } from '@/utils';
import Keys from '@/i18n/translations/en';
import { Common } from '@/components';
import DropDownSocialMediaMenu from '@/components/ui/Landing/LandingPageNavbar/LandingPageDropDownSocialMediaMenu';
import routes from '../../../data/routes';

const SidebarNavigationLinks = () => {
  // TODO Sidebar links UI
  const location = useLocation();
  const path = parsePathname(location.pathname);
  const textColor = 'fg';
  const passiveColor = 'fg';
  const activeColor = 'white';

  return (
    <>
      <Common.NavBarLinkItem
        titlePassiveColor={passiveColor || textColor}
        href={isProduction ? '/d/g/12' : 'https://community.impakt.com/'}
        title="Social Fitness"
        isActive={path.path === ''}
        color={activeColor || textColor}
        titleActiveColor={activeColor}
        textStyle="semiBold6"
        isNavigate={isProduction}
      />
      <Common.NavBarLinkItem
        titleActiveColor={activeColor}
        titlePassiveColor={passiveColor}
        title="vSports"
        href="http://vsports.me/"
        isActive={path.path === 'knowledge-base'}
        textStyle="semiBold6"
      />
      <Common.NavBarLinkItem
        titleActiveColor={activeColor}
        titlePassiveColor={passiveColor}
        href={routes.contact}
        title={Keys.navbar.contactUs}
        isActive={path.path === 'contact'}
        textStyle="semiBold6"
        isNavigate
      />
      <DropDownSocialMediaMenu titleColor="fg" bgColor="white" iconColor="rgba(28, 28, 40, 0.65)" />
    </>
  );
};

export default SidebarNavigationLinks;
