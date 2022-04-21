import { Button, ButtonProps, HStack, Text } from '@chakra-ui/react';
import Icons from 'components/icons';

interface GradientButtonProps extends ButtonProps {
  title: string;
  icon?: string;
  radius?: string;
  color?: string;
}

const GradientButton = ({
  title,
  icon,
  w = 'auto',
  bgGradient = 'linear-gradient(150.95deg, #363639 15.07%, #222226 82.14%)',
  radius = '20px',
  px = '3rem',
  py = '2rem',
  minW = '160px',
  color = 'white',
  ...buttonProps
}: GradientButtonProps) => {
  const Icon = icon ? Icons?.[icon] : undefined;

  return (
    <Button
      w={w}
      px={px}
      py={py}
      size="lg"
      minW={minW}
      borderRadius={radius}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
      bgGradient={bgGradient || 'linear-gradient(150.95deg, #363639 15.07%, #222226 82.14%)'}
      className="buttonHover"
      {...buttonProps}
    >
      <HStack spacing={2} alignItems="center" justifyContent="center">
        {Icon && <Icon />}
        <Text color={color}>{title}</Text>
      </HStack>
    </Button>
  );
};

export default GradientButton;
