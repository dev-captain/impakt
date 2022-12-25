import React from 'react';
import { Text, Box, TextProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type LinkItemProps = {
  href?: string;
  title: string;
  titleTextStyle?: string;
  titlePassiveColor?: string;
  color?: string;
  titleActiveColor?: string;
  isActive?: boolean;
  isNavigate?: boolean;
  isDisabled?: boolean;
};

const NavBarLinkItem: React.FC<LinkItemProps & TextProps> = ({
  title,
  href,
  titleActiveColor = 'white',
  children,
  isNavigate,
  titlePassiveColor = 'rgba(255,255,255,0.5)',
  titleTextStyle,
  isDisabled,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <Box
      href={href}
      _hover={{
        transition: '0.2s ease',
        opacity: 1,
      }}
      as="a"
      onClick={(e) => {
        if (isNavigate) {
          e.preventDefault();
          if (!isDisabled) {
            if (href) {
              navigate(href);
            }
          }
        }
      }}
      {...props}
    >
      {children}
      <Text
        w="150px"
        borderRadius="10px"
        h="35px"
        textStyle={titleTextStyle ?? 'regular3'}
        _hover={{ color: titleActiveColor, bg: 'orangeGradient' }}
        // transition="color .2s linear"
        textColor={titlePassiveColor ?? '#000'}
        textAlign="center"
        pt="9px"
      >
        {title}
      </Text>
    </Box>
  );
};

export default NavBarLinkItem;
