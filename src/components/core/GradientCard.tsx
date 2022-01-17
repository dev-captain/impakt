import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

type GradientCardProps = {
  title: string;
  image: string;
  subtitle: string;
  maxW?: string | any;
  minW?: string | any;
  // eslint-disable-next-line no-undef
  ThirdComponent?: () => JSX.Element;
};

const GradientCard = ({
  title,
  subtitle,
  image,
  ThirdComponent,
  maxW = '352px',
  minW = 'auto',
}: GradientCardProps) => {
  return (
    <HStack
      p={0}
      w="full"
      minW={minW}
      maxW={maxW}
      maxH="120px"
      paddingY="20px"
      align="center"
      paddingLeft="4px"
      borderRadius="28px"
      justify="flex-start"
      position="relative"
      overflow="hidden"
      spacing="16px"
      bgColor="rgba(31, 32, 36, 1)"
    >
      <GradientEllipse />
      <Image src={image} borderRadius="20px" zIndex={2} w="80px" h="80px" objectFit="cover" />
      <VStack align="flex-start" justify="center" zIndex={2}>
        <Text fontSize="16px" lineHeight="24px" fontWeight="600">
          {title}
        </Text>
        <Text fontSize="14px" lineHeight="20px" fontWeight="400">
          {subtitle}
        </Text>
        {ThirdComponent && <ThirdComponent />}
      </VStack>
      <GradientEllipse2 />
    </HStack>
  );
};

const GradientEllipse = () => {
  return (
    <Box
      opacity="0.69"
      pos="absolute"
      w="220px"
      h="196px"
      left={-93}
      top={-76}
      zIndex={1}
      background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

const GradientEllipse2 = () => {
  return (
    <Box
      opacity="0.69"
      pos="absolute"
      w="335px"
      h="116px"
      left={15}
      top={180}
      zIndex={1}
      filter="blur(94px)"
      background="radial-gradient(50% 50% at 50% 50%, #FD4857 58.11%, #FF7A00 100%);"
    />
  );
};

export default GradientCard;
