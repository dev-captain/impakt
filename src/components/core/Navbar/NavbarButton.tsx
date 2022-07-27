import { Text, VStack, Box, Button, LinkBox, Link } from '@chakra-ui/react';
import React, { Children } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  children: React.ReactNode;
  background: string;
  hover: object;
  textStyle: string;
  color: string;
  marginLeft: string;
  href?: string;
  onClick: (e: any) => void;
};

const NavbarButton = ({
  title,
  children,
  background,
  hover,
  textStyle,
  color,
  marginLeft,
  onClick,
  href,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      as="a"
      display="flex"
      justifyContent="center"
      alignItems="center"
      href={href}
      p="10px 16px 10px 12px"
      background={background}
      backdropFilter="blur(40px)"
      borderRadius="8px"
      _hover={hover}
      onClick={onClick}
      cursor="pointer"
    >
      {children}
      <Text textStyle={textStyle} ml={marginLeft} color={color}>
        {title}
      </Text>
    </Box>
  );
};

export default NavbarButton;
