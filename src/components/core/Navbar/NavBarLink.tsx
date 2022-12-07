import { memo, useEffect } from 'react';
import { parsePathname } from 'utils';
import Keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { HStack, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import NavbarLinkItem from './NavbarLinkItem';

type Props = {
  IsHeader: boolean;
};

const NavbarLink = ({ IsHeader }: Props) => {
  const location = useLocation();
  const { t } = useTranslation(`default`).i18n;
  const { onClose } = useDisclosure();
  const path = parsePathname(location.pathname);
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');

  const textColor = location.pathname.includes('d') ? 'fitnessGray' : 'glass.100';
  const activeColor = location.pathname.includes('d') ? 'fitnessGray' : 'glass.100';
  const passiveColor = location.pathname.includes('d') ? 'fitnessGray' : 'rgba(255,255,255)';

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);

  return (
    <HStack
      spacing={[3, 3, 3, 5, 6, 12]}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent={{ base: 'center', md: 'start' }}
      display="flex"
    >
      <NavbarLinkItem
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
      )}
      {/* <Button variant="ghost" onClick={() => changeLanguage('en')}>
                  <Text>En</Text>
                </Button>
                <Button variant="ghost" onClick={() => changeLanguage('zh')}>
                  <Text>Zh</Text>
                </Button> */}
    </HStack>
  );
};

export default memo(NavbarLink);
