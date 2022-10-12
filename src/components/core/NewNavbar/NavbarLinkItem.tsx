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
  isSmall?: boolean;
};

const NavbarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
  color,
  type,
  passiveColor,
  isSmall = false,
}: Props) => {
  const navigate = useNavigate();

  return (
    <VStack
      justifyContent="center"
      h={{ base: '40px', md: isSmall ? '40px' : '100px' }}
      onClick={onClose}
      cursor="pointer"
    >
      {type === 'LINK' && (
        <Box
          as="a"
          href={href}
          _hover={{
            transition: '0.2s ease',
            opacity: 1,
            // transform: 'scale(1.15)',
          }}
        >
          <Text
            textStyle="regular3"
            pos="relative"
            fontWeight={isActive ? '600' : '600'}
            color={isActive ? color : passiveColor}
            opacity={isActive ? 1 : 0.6}
            _hover={{
              opacity: 'inherit',
              transition: 'inherit',
            }}
          >
            {title}
          </Text>
        </Box>
      )}
      {type !== 'LINK' && (
        <Box
          href={href}
          as="a"
          onClick={(e: any) => {
            e.preventDefault();
            navigate(href);
          }}
          _hover={{
            transition: '0.2s ease',
            opacity: 1,
            // transform: 'scale(1.15)',
          }}
        >
          <Text
            textStyle="regular3"
            pos="relative"
            fontWeight={isActive ? '600' : '600'}
            color={isActive ? color : passiveColor}
            opacity={isActive ? 1 : 0.6}
            _hover={{
              opacity: 'inherit',
              transition: 'inherit',
            }}
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
