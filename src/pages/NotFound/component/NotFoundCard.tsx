import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';

type Props = {
  title: string;
  show404?: boolean;
};

const NotFoundCard = ({ title, show404 }: Props) => {
  const bgColor = useColorModeValue('glass.800', 'glass.300');

  return (
    <VStack
      p="32px"
      minW="320px"
      pos="relative"
      overflow="hidden"
      borderRadius="28px"
      textAlign="center"
      bgColor={bgColor}
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      {show404 && (
        <Text textStyle="regular4" fontWeight="700">
          404
        </Text>
      )}
      <Text textStyle="regular4" maxW="250px">
        {title}
      </Text>
      <Box
        w="220px"
        h="196px"
        left="-93px"
        top="-136px"
        opacity={0.49}
        filter="blur(44px)"
        background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
        pos="absolute"
        zIndex={0}
      />
      <Box
        w="335px"
        h="116px"
        left="96px"
        top="68px"
        opacity={0.21}
        filter="blur(64px)"
        background="radial-gradient(50% 50% at 50% 50%, #4C48FD 0%, rgba(0, 133, 255, 0) 100%)"
        pos="absolute"
        zIndex={0}
      />
    </VStack>
  );
};

export default NotFoundCard;
