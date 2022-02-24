import { VStack } from '@chakra-ui/react';

const Container = ({ children, bgColor, textColor, ...rest }: any) => {
  return (
    <VStack
      w="full"
      color={textColor}
      overflow="hidden"
      position="relative"
      zIndex={2}
      columns={4}
      minW="full"
      pos="relative"
      bgColor={bgColor}
      borderRadius="28px"
      pt={{ base: '16px', md: '80px' }}
      py={{ base: '16px', md: '60px', xl: '80px' }}
      px={{ base: '16px', md: '125px', xl: '250px' }}
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default Container;
