import { Button, HStack, Text } from '@chakra-ui/react';
import Icons from 'components/icons';

const GradientButton = ({
  title,
  icon,
  bgGradient,
}: {
  title: string;
  icon?: string;
  bgGradient?: string;
}) => {
  const Icon = icon ? Icons?.[icon] : undefined;

  return (
    <Button
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
