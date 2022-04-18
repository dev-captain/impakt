import { Box } from '@chakra-ui/react';

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="220px"
      height={{ base: '', md: '248px' }}
      left="87px"
      top="-126px"
      opacity="0.6"
      zIndex={0}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%);"
    />
  );
};

const GradientEllipse1 = () => {
  return (
    <Box
      pos="absolute"
      width="335px"
      height="116px"
      left="-124px"
      top="68px"
      zIndex={0}
      opacity="0.41"
      filter="blur(64px)"
      bg="radial-gradient(50% 50% at 50% 50%, #4C48FD 0%, rgba(0, 133, 255, 0) 100%);"
    />
  );
};

export default () => {
  return (
    <Box d={{ md: 'flex', base: 'none' }}>
      <GradientEllipse />
      <GradientEllipse1 />
    </Box>
  );
};
