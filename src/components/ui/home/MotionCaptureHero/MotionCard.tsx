import { Box, Text, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';

const MotionCard = ({ isVrGlass, title }: { isVrGlass?: boolean; title: string }) => {
  const Icon = isVrGlass ? Icons.VrGlass : Icons.Runner;

  return (
    <Box
      bgColor="#1F2024"
      borderRadius={20}
      position="relative"
      overflow="hidden"
      boxShadow="0px 6px 6px rgba(0, 0, 0, 0.3), 0px 6px 16px rgba(0, 0, 0, 0.16)"
    >
      <VStack
        align="flex-start"
        maxW="240px"
        minH={{ base: '210px', xl: '180px' }}
        maxH="250px"
        justify="center"
        p={7}
        spacing="32px"
      >
        <Icon />
        <Text fontSize={{ base: '14px', md: '16px' }} lineHeight="20px">
          {title}
        </Text>
        <Box
          w="220px"
          h="196px"
          left="-70px"
          top="-100px"
          opacity={0.49}
          background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
        />
        <Box
          w="220px"
          h="196px"
          left="93px"
          top="100px"
          opacity={0.49}
          background="radial-gradient(50% 50% at 50% 50%, rgba(72, 123, 253, 1) 10%, rgba(184, 50, 108, 0) 100%)"
          pos="absolute"
          zIndex={1}
          filter="blur(64px);"
        />
      </VStack>
    </Box>
  );
};

export default MotionCard;
