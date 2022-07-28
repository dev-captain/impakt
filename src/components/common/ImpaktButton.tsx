import { As, Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import * as React from 'react';

interface ImpaktButtonProps {
  size?: 'sm' | 'lg';
  as?: As<any>;
  variant?: 'primary' | 'secondary' | 'alert';
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ImpaktButton = forwardRef<ButtonProps & ImpaktButtonProps, 'button'>((props, ref) => {
  const bgColor = getBgColor(props.variant);
  const size = props.size ?? 'sm';
  const textColor = getTextColor(props.variant);

  return (
    <Button
      ref={ref}
      type={props.type}
      w="full"
      color={textColor}
      _hover={{ bg: '#FFFFFF', textDecoration: 'none', color: '#000' }}
      transition="all .2s linear"
      px="20px"
      fontWeight="500"
      bg={bgColor}
      _focus={{ bg: '#FFFFFF', textDecoration: 'none', color: '#000' }}
      minW={size === 'lg' ? '202px' : 'unset'}
      minH={size === 'lg' ? '64px' : 'unset'}
      py={size === 'sm' ? '10px' : '16px'}
      lineHeight={size === 'sm' ? '18px' : '32px'}
      borderRadius={size === 'sm' ? '8px' : '16px'}
      fontSize={size === 'sm' ? '16px' : '20px'}
      {...props}
    >
      {props.children}
    </Button>
  );
});

const getBgColor = (variant?: 'primary' | 'alert' | 'secondary') => {
  if (variant === 'primary') {
    return 'accentRed2';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.1)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 0.12)';
  }

  return 'accentRed2';
};

const getTextColor = (variant?: 'primary' | 'alert' | 'secondary') => {
  if (variant === 'primary') {
    return 'rgba(255, 255, 255, 1)';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.75)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 1)';
  }

  return 'accentRed2';
};

export default ImpaktButton;
