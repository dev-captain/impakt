import { As, Button } from '@chakra-ui/react';
import * as React from 'react';

interface ImpaktButtonProps {
  size?: 'sm' | 'lg';
  as?: As<any>;
  variant?: 'primary' | 'secondary' | 'alert';
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  isDisabled?: boolean;
}

const ImpaktButton: React.FC<ImpaktButtonProps> = ({
  variant = 'primary',
  size = 'sm',
  leftIcon,
  onClick,
  as,
  children,
  href,
  type,
  isLoading,
  isDisabled,
}) => {
  const bgColor = getBgColor(variant);

  return (
    <Button
      type={type}
      w="full"
      isDisabled={isDisabled}
      isLoading={isLoading}
      minW={size === 'lg' ? '202px' : 'unset'}
      minH={size === 'lg' ? '64px' : 'unset'}
      color="#fff"
      _hover={{ bg: '#FFFFFF', textDecoration: 'none', color: '#000' }}
      transition="all .2s linear"
      px="20px"
      borderRadius={size === 'sm' ? '8px' : '16px'}
      as={as}
      fontSize={size === 'sm' ? '16px' : '20px'}
      _focus={{ bg: '#FFFFFF', textDecoration: 'none', color: '#000' }}
      fontWeight="500"
      lineHeight={size === 'sm' ? '18px' : '32px'}
      py={size === 'sm' ? '10px' : '16px'}
      bg={bgColor}
      leftIcon={leftIcon}
      onClick={onClick}
      href={href}
    >
      {children}
    </Button>
  );
};

const getBgColor = (variant: 'primary' | 'alert' | 'secondary') => {
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

export default ImpaktButton;
