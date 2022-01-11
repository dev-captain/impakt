import { Text, VStack, HStack, Image, Box } from '@chakra-ui/react';

const FeatureCard = ({
  isActive,
  image,
  isFull = false,
  title,
  subtitle,
}: {
  isActive?: boolean;
  image: string;
  isFull?: boolean;
  title: string;
  subtitle: string;
}) => {
  return (
    <HStack
      backgroundColor={isActive ? 'rgba(31, 32, 36, 0.8)' : 'rgba(31, 32, 36, 0.6)'}
      padding="16px"
      paddingRight="80px"
      borderRadius={8}
      position="relative"
      maxWidth="300px"
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
      <Image src={`assets/images/${image}`} borderRadius={8} maxW="76px" />
      <VStack alignItems="flex-start" pl="8px">
        <Text fontSize="md" opacity={isActive ? 1 : 0.2} fontWeight="light" w="140px">
          {title}
        </Text>
        <Text fontSize="md" fontWeight="bold" opacity={isActive ? 1 : 0.2}>
          {subtitle}
        </Text>
      </VStack>
    </HStack>
  );
};

export default FeatureCard;
