import { Box, Image, Text, VStack } from '@chakra-ui/react';

const GenesisCard = ({ image, description }: { image: string; description: string }) => {
  return (
    <VStack
      maxW="280px"
      overflow="hidden"
      minH="418px"
      align="center"
      transitionDuration="150ms"
      bgColor="rgba(28, 28, 40, 0.65)"
      position="relative"
      padding="24px"
      borderRadius="16px"
      backdropFilter="blur(40px)"
      rowGap="24px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      <Box role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
        <Box
          rounded="lg"
          pos="relative"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            height: '108%',
            position: 'absolute',
            top: '-9px',
            width: '105%',
            left: '-6px',
            backgroundImage: `url(${image})`,
            filter: 'blur(17px)',
            zIndex: -1,
            opacity: '0.5',
          }}
        >
          <Image
            rounded="lg"
            objectFit="cover"
            src={image}
            boxSizing="border-box"
            borderRadius="6px"
            width="100%"
          />
        </Box>
      </Box>
      <Box
        backgroundColor="rgba(255, 255, 255, 0.04)"
        height="91px"
        padding="8px 16px"
        borderRadius="8px"
      >
        <Text textStyle="semiBold5" color="rgba(255, 255, 255, 0.75)">
          {description}
        </Text>
      </Box>
    </VStack>
  );
};

export default GenesisCard;
