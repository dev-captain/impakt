import { memo, useEffect } from 'react';
import { parsePathname } from 'utils';
import Keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { HStack, useColorMode, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import NavbarLinkItem from './NavbarLinkItem';

type Props = {
  IsHeader: boolean;
};

const NavbarLink = ({ IsHeader }: Props) => {
  const { colorMode, setColorMode } = useColorMode();
  const location = useLocation();
  const isLight = colorMode === 'light';
  const { t } = useTranslation(`default`).i18n;
  const { onClose } = useDisclosure();
  const path = parsePathname(location.pathname);
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');
  const textColor = isLight ? 'glass.100' : 'glass.700';
  const activeColor = isLight ? 'glass.100' : 'glass.900';
  const passiveColor = isLight ? 'rgba(255,255,255)' : 'glass.700';
  useEffect(() => {
    if (path.path === 'dashboard') {
      setColorMode('light');
    }
  }, [path.path]);

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);
  return (
    <HStack spacing={[0, 0, 3, 5, 8, 12]}>
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
          type="LINK"
          href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use"
          onClose={onClose}
          passiveColor={passiveColor}
          title={t(Keys.navbar.termsOfUse)}
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
