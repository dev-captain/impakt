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
}) => {
  const Icon = icon ? Icons?.[icon] : undefined;

  return (
    <Button
      w={w}
      d={d}
      size="lg"
      px={px || '3rem'}
      py={py || '2rem'}
      minW={minW || '160px'}
      borderRadius={radius || '20px'}
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
