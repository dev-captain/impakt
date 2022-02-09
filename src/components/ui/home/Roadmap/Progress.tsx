import { VStack } from '@chakra-ui/react';

const Progress = ({
  value,
  type = 'horizontal',
}: {
  value: number;
  type?: 'horizontal' | 'vertical';
}) => {
  return (
    <VStack
      zIndex={10}
      pos="relative"
      overflow="hidden"
      align="flex-start"
      bgColor="glass.900"
      borderRadius="100px"
      justify="flex-start"
      h={type === 'horizontal' ? '12px' : 'full'}
      w={type === 'horizontal' ? 'full' : '12px'}
    >
      <VStack
        zIndex={10}
        position="absolute"
        borderRadius="100px"
        h={type === 'horizontal' ? '12px' : `${value}%`}
        w={type === 'horizontal' ? `${value}%` : '12px'}
        bgGradient="linear-gradient(272.84deg, rgba(220, 20, 60, 0.36) 1.03%, #B22222 90.86%)"
        boxShadow="0px 4px 10px rgba(192, 30, 43, 0.25), 0px -4px 10px rgba(192, 30, 43, 0.25)"
      />
    </VStack>
  );
};

export default Progress;
