import { Text, VStack } from '@chakra-ui/react';
import { StatusQuoCardBlurs } from './StatusQuoBlurs';

const StatusQuoCard = () => {
  return (
    <VStack
      p="44px"
      w="full"
      zIndex={10}
      maxW={{ base: 'auto', lg: '581px' }}
      color="white"
      spacing="16px"
      pos="relative"
      overflow="hidden"
      align="flex-start"
      bgColor="glass.800"
      borderRadius="28px"
    >
      <StatusQuoCardBlurs />
      <Text textStyle="regular3">USE ONLY YOUR BODY</Text>
      <Text textStyle="bold5">Tap into motivation whenever you want.</Text>
      <Text textStyle="regular4" color="electric.100" opacity="0.6">
        With Impakt you can exercise anytime, anywhere! Challenge yourself, your friends or other
        Impakt members, and compete for earn crypto!
      </Text>
    </VStack>
  );
};

export default StatusQuoCard;
