import { Text, VStack, Link } from '@chakra-ui/react';
import SelectedNavbarLinkBorder from './SelectedNavbarLinkBorder';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  color?: string;
  passiveColor?: string;
  isActive?: boolean;
  onClose?: () => void;
};

const NavbarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
  color,
  passiveColor,
}: Props) => {
  return (
    <VStack justifyContent="center" h="100px" onClick={onClose}>
      <Link href={href} target="_blank">
        <Text
          textStyle="regular3"
          pos="relative"
          fontWeight={isActive ? '600' : 'normal'}
          color={isActive ? color : passiveColor}
          opacity={isActive ? 1 : 0.6}
        >
          {title}
        </Text>
      </Link>
      {isActive && !hide && <SelectedNavbarLinkBorder />}
    </VStack>
  );
};

export default NavbarLinkItem;
