import { VStack, Collapse } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { parsePathname } from 'utils';
import NavbarLinkItem from './NavbarLinkItem';

type Props = {
  bg: string;
  isOpen: boolean;
  textColor: string;
  onClose: () => void;
};

const CollapseMenu = ({ isOpen, onClose, bg, textColor }: Props) => {
  const location = useLocation();
  const path = parsePathname(location.pathname);

  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack spacing={0} paddingBottom={8} bg={bg} h="100vh" zIndex={900} color={textColor}>
        <NavbarLinkItem
          hide
          href="/"
          onClose={onClose}
          title="Impakt Fitness"
          isActive={path.path === ''}
        />
        <NavbarLinkItem
          hide
          type="LINK"
          onClose={onClose}
          title="Knowledge Base"
          href="https://knowledgebase.impakt.com"
          isActive={path.path === 'knowledge-base'}
        />
        <NavbarLinkItem
          hide
          title="Events"
          href="/events"
          onClose={onClose}
          isActive={path.path === 'events'}
        />
        <NavbarLinkItem
          title="Contact Us"
          href="/contact"
          onClose={onClose}
          isActive={path.path === 'contact'}
        />
      </VStack>
    </Collapse>
  );
};

export default CollapseMenu;
