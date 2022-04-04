import { Box } from '@chakra-ui/react';

export const StatusQuoCardBlurs = () => {
  return (
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
  );
};

export const StatusQuoBlurs = () => {
  return (
    <Box
      top="8%"
      w="947px"
      h="472px"
      zIndex={0}
      left="87px"
      opacity="0.4"
      pos="absolute"
      d={{ base: 'none', lg: 'flex' }}
      background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};
