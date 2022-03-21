import { Box, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';

const InvestorCard = ({
  image,
  name,
  title,
  subtitle,
  alt,
}: {
  alt: string;
  image: string;
  name: string;
  title: string;
  subtitle: string;
}) => {
  const bgColor = useColorModeValue('glass.800', 'glass.200');
  const subTitleColor = useColorModeValue('electric.100', 'glass.700');

  return (
    <VStack
      w="full"
      pb="36px"
      maxW="360px"
      align="center"
      justify="center"
      bgColor={bgColor}
      overflow="hidden"
      position="relative"
      borderRadius="28px"
      maxH="550px"
      h="full"
      _hover={{
        transition: '0.5s ease',
        transform: 'scale(1.15)',
      }}
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      <VStack>
        <Image
          src={image}
          objectFit="cover"
          maxW="330px"
          h="310px"
          alt={alt}
          mt="16px"
          borderRadius="28px"
        />
      </VStack>
      <VStack align="center" justify="center">
        <Text textStyle="bold5" pt="8px" align="center">
          {name}
        </Text>
        <Text textStyle="regular3" opacity="0.6" align="center" color={subTitleColor}>
          {title}
        </Text>
        <Text
          height="20px"
          textStyle="regular3"
          opacity="0.6"
          align="center"
          display="inline"
          color={subTitleColor}
        >
          {subtitle}
        </Text>
      </VStack>
      <GradientEllipse />
      <GradientEllipse1 />
    </VStack>
  );
};

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="220px"
      height="196px"
      left="-93px"
      top="-136px"
      opacity="0.49"
      zIndex={1}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

const GradientEllipse1 = () => {
  return (
    <Box
      top="68px"
      zIndex={1}
      width="335px"
      pos="absolute"
      height="116px"
      right="-231px"
      opacity="0.21"
      filter="blur(64px)"
      bg="radial-gradient(50% 50% at 50% 50%, #487BFD 58.11%, #00B2FF 100%)"
    />
  );
};

export default InvestorCard;
