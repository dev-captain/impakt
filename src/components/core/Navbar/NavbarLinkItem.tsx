import { Text, VStack, Link } from '@chakra-ui/react';
import SelectedNavbarLinkBorder from './SelectedNavbarLinkBorder';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  isActive?: boolean;
  onClose?: () => void;
};

const NavbarLinkItem = ({ title, href, isActive, hide = false, onClose }: Props) => {
  return (
    <VStack justifyContent="center" h="100px" onClick={onClose}>
      <Link href={href} target="_blank">
        <Text fontSize="md" color={isActive ? 'white' : 'rgba(255,255,255, 0.3)'} pos="relative">
          {title}
        </Text>
      </Link>

      {isActive && !hide && <SelectedNavbarLinkBorder />}
    </VStack>
  );
};

export default NavbarLinkItem;
