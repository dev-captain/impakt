import { Box, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';

const InvestorCard = ({ image, name, title }: { image: string; name: string; title: string }) => {
  const bgColor = useColorModeValue('glass.800', 'glass.200');
  const subTitleColor = useColorModeValue('electric.100', 'glass.700');

  return (
    <VStack
      pl="32px"
      pr="32px"
      pb="32px"
      w="350px"
      h="280px"
      align="center"
      justify="space-between"
      bgColor={bgColor}
      position="relative"
      borderRadius="32px"
      _hover={{
        transition: '0.5s ease',
        transform: 'scale(1.15)',
      }}
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      <VStack pos="relative" zIndex={1} top="-19px" height="100px">
        <Box role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
          <Box
            rounded="lg"
            mt={-12}
            pos="relative"
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: '110px',
              pos: 'absolute',
              top: '54px',
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded="lg"
              objectFit="cover"
              src={image}
              boxSizing="border-box"
              borderRadius="24px"
            />
          </Box>
        </Box>
      </VStack>
      <VStack align="center" justify="center">
        <Text textStyle="bold5" pb="5px" align="center">
          {name}
        </Text>
      </VStack>
      <VStack
        width="100%"
        maxWidth="100%"
        align="center"
        justify="center"
        mt="0px !important"
        mb="10px !important"
      >
        <Box backgroundColor="rgba(255, 255, 255, 0.04)" borderRadius="8px" w="100%">
          <Text
            textStyle="regular3"
            margin="0 !important"
            opacity="0.6"
            align="center"
            padding="10px 15px 9px 16px"
            box-sizing="border-box"
            borderRadius="8px"
            border="2px solid rgba(255, 255, 255, 0.04)"
            color={subTitleColor}
          >
            {title}
          </Text>
        </Box>
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
