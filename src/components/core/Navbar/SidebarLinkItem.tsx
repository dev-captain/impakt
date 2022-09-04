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
  collaps: boolean;
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
  collaps,
}: Props) => {
  const navigate = useNavigate();
  // TODO Sidebar link item UI

  return (
    <Box
      justifyContent="center"
      h="48px"
      onClick={onClose}
      cursor="pointer"
      width="100%"
      backgroundColor="transparent"
      alignItems="start"
      // padding="16px 18px"
      color={isActive ? 'fitnessSky' : 'rgba(78, 96, 112, 0.5)'}
      borderLeft={isActive ? '4px solid #5C7FFF' : '4px solid transparent'}
      padding="0"
      _hover={{
        color: 'fitnessSky',
        transition: 'all 0.1s ease',
        fontWeight: '600',
        borderLeft: '4px solid #5C7FFF',
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
          padding={collaps === true ? '16px 24px' : '16px 48px'}
          h={{ base: '48px', md: '56px' }}
          onClick={() => {
            navigate(href);
          }}
          as={target === '_blank' ? 'a' : 'div'}
          color="inherit"
        >
          {children}
          <Text
            textStyle="regular3"
            pos="relative"
            marginLeft="14.5px"
            fontWeight="600"
            opacity={{ lg: collaps === true ? '0' : '1' }}
            transition="opacity .1s ease-in-out"
          >
            {title}
          </Text>
        </Box>
      )}
      {isActive && !hide}
    </Box>
  );
};

export default SidebarLinkItem;
