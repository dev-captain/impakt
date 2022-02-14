import { Text, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedNavbarLinkBorder from './SelectedNavbarLinkBorder';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  color?: string;
  passiveColor?: string;
  isActive?: boolean;
  onClose?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
};

const NavbarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
  color,
  target,
  passiveColor,
}: Props) => {
  const navigate = useNavigate();

  return (
    <VStack justifyContent="center" h="100px" onClick={onClose} cursor="pointer">
      <Box
        // @ts-ignore
        href={href}
        target={target}
        onClick={() => {
          navigate(href);
        }}
        as={target === '_blank' ? 'a' : 'div'}
      >
        <Text
          textStyle="regular3"
          pos="relative"
          fontWeight={isActive ? '600' : 'normal'}
          color={isActive ? color : passiveColor}
          opacity={isActive ? 1 : 0.6}
        >
          {title}
        </Text>
      </Box>
      {isActive && !hide && <SelectedNavbarLinkBorder />}
    </VStack>
  );
};

export default NavbarLinkItem;
