import { Text, VStack, HStack, AspectRatio, Image, Box } from '@chakra-ui/react';

const FeatureCard = ({
  isActive,
  image,
  isFull = false,
}: {
  isActive?: boolean;
  image: string;
  isFull?: boolean;
}) => {
  return (
    <HStack
      backgroundColor={isActive ? 'blackAlpha.700' : 'blackAlpha.500'}
      spacing="32px"
      padding="16px"
      paddingRight="80px"
      borderRadius={8}
      position="relative"
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
      <AspectRatio ratio={1} w="76px" opacity={isActive ? 1 : 0.3}>
        <Image src={`assets/images/${image}`} borderRadius={8} />
      </AspectRatio>
      <VStack alignItems="flex-start">
        <Text fontSize="md" opacity={isActive ? 1 : 0.2} fontWeight="light">
          Single & team
        </Text>
        <Text fontSize="md" fontWeight="bold" opacity={isActive ? 1 : 0.2}>
          games
        </Text>
      </VStack>
    </HStack>
  );
};

export default FeatureCard;
