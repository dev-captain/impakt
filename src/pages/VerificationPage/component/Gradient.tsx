import { Box } from '@chakra-ui/react';

export const GradientEllipse = () => {
  return (
    <Box
      pos="absolute"
      width="252px"
      height="224px"
      left="-109px"
      top="-136px"
      opacity="0.89"
      zIndex={0}
      filter="blur(94px)"
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

export const GradientEllipse1 = () => {
  return (
    <Box
      pos="absolute"
      width="380px"
      height="338px"
      left="347px"
      top="-196px"
      opacity="0.39"
      zIndex={0}
      filter="blur(64px)"
      bg="radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)"
    />
  );
};

export default () => {
  return (
    <Box>
      <GradientEllipse />
      <GradientEllipse1 />
    </Box>
  );
};
