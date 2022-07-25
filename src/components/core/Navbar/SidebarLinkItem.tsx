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
  children: React.ReactNode;
};

const SidebarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
  color,
  target,
  type,
  passiveColor,
  children,
}: Props) => {
  const navigate = useNavigate();
  // TODO Sidebar link item UI

  return (
    <VStack
      justifyContent="center"
      h={{ base: '40px', md: '56px' }}
      onClick={onClose}
      cursor="pointer"
      width="100%"
      background={isActive ? '#20202E' : 'none'}
      borderRadius="16px"
      alignItems="start"
      padding="16px 18px"
      _hover={{
        background: '#20202E',
        transition: '0.5s ease',
      }}
    >
      {type === 'LINK' && (
        <Box
          as="a"
          href={href}
          display="flex"
          alignItems="center"
          _hover={{
            transition: '0.2s ease',
            background: '#20202E',
            opacity: 1,
            // transform: 'scale(1.15)',
          }}
        >
          {children}
          <Text
            textStyle="regular3"
            pos="relative"
            marginLeft="14.5px"
            fontWeight={isActive ? '600' : 'normal'}
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
          // @ts-ignore
          href={href}
          target={target}
          display="flex"
          alignItems="center"
          onClick={() => {
            navigate(href);
          }}
          as={target === '_blank' ? 'a' : 'div'}
          _hover={{
            transition: '0.2s ease',
            opacity: 1,
            // transform: 'scale(1.15)',
          }}
        >
          {children}
          <Text
            textStyle="regular3"
            pos="relative"
            marginLeft="14.5px"
            fontWeight={isActive ? '600' : 'normal'}
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

export default SidebarLinkItem;
