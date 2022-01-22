import { Button, HStack, Text } from '@chakra-ui/react';
import Icons from 'components/icons';

const GradientButton = ({
  title,
  icon,
  w = 'auto',
  bgGradient,
  py,
  px,
  minW,
  radius,
  d,
  disabled,
  onClick,
}: {
  title: string;
  icon?: string;
  w?: string | any;
  bgGradient?: string;
  px?: string;
  py?: string;
  radius?: string;
  minW?: string;
  d?: any;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const Icon = icon ? Icons?.[icon] : undefined;

  return (
    <Button
      w={w}
      d={d}
      size="lg"
      onClick={onClick}
      px={px || '3rem'}
      py={py || '2rem'}
      disabled={disabled}
      minW={minW || '160px'}
      borderRadius={radius || '20px'}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
      bgGradient={bgGradient || 'linear-gradient(150.95deg, #363639 15.07%, #222226 82.14%)'}
    >
      <HStack spacing={2} alignItems="center" justifyContent="center">
        {Icon && <Icon />}
        <Text color="white">{title}</Text>
      </HStack>
    </Button>
  );
};

export default GradientButton;
