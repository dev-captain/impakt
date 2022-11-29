import { As, Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import * as React from 'react';

type ImpaktButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'alert'
  | 'white'
  | 'white-50'
  | 'black'
  | 'transparent';

interface ImpaktButtonProps {
  size?: 'sm' | 'lg';
  as?: As<any>;
  variant?: ImpaktButtonVariantType;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ImpaktButton = forwardRef<ButtonProps & ImpaktButtonProps, 'button'>((props, ref) => {
  const bgColor = getBgColor(props.variant);
  const size = props.size ?? 'sm';
  const textColor = getTextColor(props.variant);
  const hoverBg = getHoverBg(props.variant);
  const hoverTextColor = getHoverTextColor(props.variant);

  return (
    <Button
      ref={ref}
      type={props.type}
      w="full"
      color={textColor}
      _hover={{ bg: hoverBg, textDecoration: 'none', color: hoverTextColor }}
      transition="all .2s linear"
      cursor="pointer"
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

const getBgColor = (variant?: ImpaktButtonVariantType) => {
  if (variant === 'primary') {
    return 'accentRed2';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.1)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 0.12)';
  }

  if (variant === 'white') {
    return 'rgba(255,255,255,1)';
  }

  if (variant === 'white-50') {
    return 'a5';
  }

  if (variant === 'black') {
    return '#1C1C28';
  }

  if (variant === 'transparent') {
    return 'transparent';
  }

  return 'accentRed2';
};

const getTextColor = (variant?: ImpaktButtonVariantType) => {
  if (variant === 'primary') {
    return 'rgba(255, 255, 255, 1)';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.75)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 1)';
  }

  if (variant === 'white') {
    return 'fitnessGray';
  }

  if (variant === 'white-50') {
    return 'fg-1';
  }

  if (variant === 'black') {
    return '#fff';
  }

  if (variant === 'transparent') {
    return '#000';
  }

  return 'rgba(255, 255, 255, 1)';
};

const getHoverBg = (variant?: ImpaktButtonVariantType) => {
  if (variant === 'primary') {
    return 'rgba(255, 255, 255, 1)';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.75)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 1)';
  }

  if (variant === 'white') {
    return '#F5F8FA';
  }

  if (variant === 'white-50') {
    return 'darkOrange';
  }

  if (variant === 'black') {
    return '#fff';
  }

  if (variant === 'transparent') {
    return '#000';
  }

  return 'rgba(255, 255, 255, 1)';
};

const getHoverTextColor = (variant?: ImpaktButtonVariantType) => {
  if (variant === 'primary') {
    return 'rgba(255, 255, 255, 1)';
  }
  if (variant === 'secondary') {
    return 'rgba(255, 255, 255, 0.75)';
  }
  if (variant === 'alert') {
    return 'rgba(240, 65, 83, 1)';
  }

  if (variant === 'white') {
    return '#F27961';
  }

  if (variant === 'white-50') {
    return '#FFFFFF';
  }

  if (variant === 'black') {
    return '#fff';
  }

  if (variant === 'transparent') {
    return '#000';
  }

  return 'rgba(255, 255, 255, 1)';
};

export default ImpaktButton;
