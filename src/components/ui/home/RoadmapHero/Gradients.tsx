import { Box } from '@chakra-ui/react';

const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="379px"
      height="283px"
      left="-86px"
      top="-137px"
      opacity="0.49"
      zIndex={0}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

const GradientEllipse1 = () => {
  return (
    <Box
      pos="absolute"
      width="508px"
      height="176px"
      left="792px"
      top="338px"
      zIndex={0}
      opacity="0.11"
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #487BFD 58.11%, #00B2FF 100%)"
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
