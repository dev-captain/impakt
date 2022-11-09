import { Text, Box } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  type?: 'LINK' | string;
  isActive?: boolean;
  onClose?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  children: React.ReactNode;
  isTransparent?: boolean;
};

const SidebarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
  target,
  type,
  children,
  isTransparent = false,
}: Props) => {
  const navigate = useNavigate();
  // TODO Sidebar link item UI

  return (
    <Box
      justifyContent="center"
      // h={{ base: '48px', md: '56px' }}
      onClick={onClose}
      cursor="pointer"
      width="100%"
      backgroundColor={isActive && !isTransparent ? '#20202E' : 'none'}
      borderRadius="16px"
      alignItems="start"
      // padding="16px 18px"
      color={isActive ? 'rgba(255 ,255 ,255 ,1)' : 'rgba(255 ,255 ,255 ,0.5)'}
      padding="0"
      _hover={{
        background: !isTransparent ? '#20202E' : 'none',
        color: 'rgba(255 , 255 ,255 ,1)',
        transition: 'all 0.5s ease',
        fontWeight: '600',
      }}
    >
      {type === 'LINK' && (
        <Box
          as="a"
          href={href}
          display="flex"
          alignItems="center"
          padding="16px 18px"
          h={{ base: '48px', md: '56px' }}
          _hover={{
            transition: '0.2s ease',
            background: '#20202E',
            color: '#fff',
            // transform: 'scale(1.15)',
          }}
        >
          {children}
          <Text
            textStyle="regular3"
            pos="relative"
            marginLeft="14.5px"
            fontWeight={isActive ? '600' : 'normal'}
            _hover={{
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
          padding="16px 18px"
          h={{ base: '48px', md: '56px' }}
          onClick={() => {
            navigate(href);
          }}
          as={target === '_blank' ? 'a' : 'div'}
          color="inherit"
        >
          {children}
          <Text textStyle="regular3" pos="relative" marginLeft="14.5px" fontWeight="600">
            {title}
          </Text>
        </Box>
      )}
      {isActive && !hide}
    </Box>
  );
};

export default SidebarLinkItem;
