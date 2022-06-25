import { VStack, Collapse } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { parsePathname } from 'utils';
import Keys from 'i18n/types';
import NavbarLinkItem from './NavbarLinkItem';
import useAppSelector from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { signOutMember } from '../../../lib/redux/slices/member/actions/signOutMember';

type Props = {
  bg: string;
  isOpen: boolean;
  textColor: string;
  onClose: () => void;
};

const CollapseMenu = ({ isOpen, onClose, bg, textColor }: Props) => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuthReducer.member);
  const location = useLocation();
  const path = parsePathname(location.pathname);
  const { t } = useTranslation().i18n;

  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack spacing={0} paddingBottom={8} bg={bg} h="100vh" zIndex={900} color={textColor}>
        <NavbarLinkItem
          hide
          href="/"
          onClose={onClose}
          isActive={path.path === ''}
          title={t(Keys.navbar.impaktFitness)}
        />
        <NavbarLinkItem
          hide
          type="LINK"
          onClose={onClose}
          title={t(Keys.navbar.knowledgeBase)}
          href="https://knowledgebase.impakt.com"
          isActive={path.path === 'knowledge-base'}
        />
        <NavbarLinkItem
          hide
          href="/events"
          onClose={onClose}
          title={t(Keys.navbar.events)}
          isActive={path.path === 'events'}
        />
        <NavbarLinkItem
          href="/contact"
          onClose={onClose}
          title={t(Keys.navbar.contactUs)}
          isActive={path.path === 'contact'}
        />
        {member && (
          <NavbarLinkItem
            href="/dashboard"
            onClose={onClose}
            title={t(Keys.navbar.dashboard)}
            isActive={path.path === 'dashboard'}
          />
        )}

        {member && (
          <NavbarLinkItem
            href="#"
            onClose={async () => {
              await dispatch(signOutMember());
              onClose();
            }}
            title={t(Keys.navbar.signOut)}
            isActive={path.path === '#'}
          />
        )}

        {!member && (
          <NavbarLinkItem
            href="/signin"
            title={t(Keys.navbar.signIn)}
            isActive={path.path === 'signin'}
          />
        )}
      </VStack>
    </Collapse>
  );
};

export default CollapseMenu;
