import { Text, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  color?: string;
  type?: 'LINK' | string;
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
  type,
  passiveColor,
}: Props) => {
  const navigate = useNavigate();

  return (
    <VStack justifyContent="center" h="100px" onClick={onClose} cursor="pointer">
      {type === 'LINK' && (
        <Box
          as="a"
          href={href}
          _hover={{
            transition: '0.2s ease',
            // transform: 'scale(1.15)',
          }}
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
      )}
      {type !== 'LINK' && (
        <Box
          // @ts-ignore
          href={href}
          target={target}
          onClick={() => {
            navigate(href);
          }}
          as={target === '_blank' ? 'a' : 'div'}
          _hover={{
            transition: '0.2s ease',
            // transform: 'scale(1.15)',
          }}
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
      )}
      {isActive && !hide}
    </VStack>
  );
};

export default NavbarLinkItem;
