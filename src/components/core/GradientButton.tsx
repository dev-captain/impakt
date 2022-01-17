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
      borderRadius="20px"
      minW="240px"
      bgGradient={bgGradient || 'linear(to-b, rgba(54, 54, 57, 1), rgba(34, 34, 38, 1))'}
    >
      <HStack spacing={2} alignItems="center" justifyContent="center">
        {Icon && <Icon />}
        <Text color="white">{title}</Text>
      </HStack>
    </Button>
  );
};

export default GradientButton;
