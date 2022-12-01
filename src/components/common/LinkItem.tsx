import React from 'react';
import { Text, Box, TextProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type LinkItemProps = {
  href?: string;
  title: string;
  titleTextStyle?: string;
  titleTextColor?: string;
  color?: string;
  passiveColor?: string;
  isActive?: boolean;
  isNavigate?: boolean;
  isDisabled?: boolean;
};

const LinkItem: React.FC<LinkItemProps & TextProps> = ({
  title,
  href,
  isActive,
  color,
  passiveColor,
  children,
  isNavigate,
  titleTextColor,
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
        textStyle={titleTextStyle ?? 'regular3'}
        _hover={{ color: passiveColor }}
        textColor={titleTextColor ?? '#000'}
      >
        {title}
      </Text>
    </Box>
  );
};

export default LinkItem;
