import Icons from 'components/icons';
import { EarningsHeroGradients } from 'components/ui/gradients';
import { Box, Text, VStack } from '@chakra-ui/react';

const EarnTokenCard = ({ isVrGlass, title }: { isVrGlass?: boolean; title: string }) => {
  const Icon = isVrGlass ? Icons.NftGame : Icons.NftImage;

  return (
    <Box bgColor="#1F2024" borderRadius={20} position="relative" overflow="hidden">
      <VStack
        p={7}
        maxW="240px"
        maxH="250px"
        spacing="32px"
        align="flex-start"
        justify="flex-start"
        minH={{ base: '220px', sm: '170px', md: '220px' }}
      >
        <Icon />
        <Text fontSize={{ base: '14px', md: '16px' }}>{title}</Text>
        <EarningsHeroGradients />
      </VStack>
    </Box>
  );
};

export default EarnTokenCard;
