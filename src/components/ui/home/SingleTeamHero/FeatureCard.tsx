import { Text, VStack, HStack, Image, Box } from '@chakra-ui/react';

const FeatureCard = ({
  isActive,
  image,
  isFull = false,
  title,
}: {
  isActive?: boolean;
  image: string;
  isFull?: boolean;
  title: string;
}) => {
  return (
    <HStack
      backgroundColor={isActive ? 'blackAlpha.500' : 'blackAlpha.300'}
      padding="16px"
      paddingRight="80px"
      borderRadius={8}
      position="relative"
      w={{ base: 'auto', md: '300px' }}
    >
      <VStack p={0} m={0} spacing={0}>
        <Box
          w={isFull ? 'full' : '60%'}
          pos="absolute"
          borderRadius={8}
          borderTopRightRadius={isFull ? 8 : 0}
          top={0}
          left={0}
          h="full"
          zIndex={3}
          borderTop={isActive ? '3px solid' : undefined}
          borderColor="rgba(178, 34, 34, 1)"
        />
        <Box
          top={0}
          left={0}
          right={0}
          h="full"
          zIndex={1}
          pos="absolute"
          borderRadius={8}
          borderTop={isActive ? '3px solid' : undefined}
          borderColor="whiteAlpha.400"
        />
      </VStack>
      <Image src={`assets/images/${image}`} borderRadius={8} maxW={{ base: '32px', md: '76px' }} />
      <VStack alignItems="flex-start" pl={{ base: '4px', md: '8px' }}>
        <Text
          d="flex"
          fontSize={{
            base: '12px',
            md: '16px',
          }}
          opacity={isActive ? 1 : 0.2}
          flexDir={{ base: 'column', sm: 'column', md: 'row' }}
        >
          {title}
          <Text fontWeight="bold" ml={{ base: 0, sm: 0, md: '4px' }}>
            Games
          </Text>
        </Text>
      </VStack>
    </HStack>
  );
};

export default FeatureCard;
