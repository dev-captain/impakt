import { Button, HStack, Text } from '@chakra-ui/react';
import Icons from 'components/icons';

const GradientButton = ({
  title,
  icon,
  w = 'auto',
  bgGradient,
}: {
  title: string;
  icon?: string;
  w?: string | any;
  bgGradient?: string;
}) => {
  const Icon = icon ? Icons?.[icon] : undefined;

  return (
    <Button
      w={w}
      size="lg"
      px="3rem"
      py="2rem"
      minW="160px"
      borderRadius="20px"
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
