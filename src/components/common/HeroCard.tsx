import { Box, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
  smallTitle: string;
  description: string;
};
const HeroCard: FC<Props> = ({ smallTitle, title, description }) => {
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
      <Box
        w="220px"
        h="196px"
        zIndex={2}
        left="87px"
        top="-126px"
        opacity="0.8"
        pos="absolute"
        filter="blur(94px)"
        background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      />
      <Text textStyle="regular3">{smallTitle}</Text>
      <Text textStyle="bold5">{title}</Text>
      <Text textStyle="regular4" color="electric.100" opacity="0.6">
        {description}
      </Text>
    </VStack>
  );
};

export default HeroCard;
