import { Box } from '@chakra-ui/react';

export const ContactGradientEllipse = () => {
  return (
    <Box
      opacity="0.8"
      pos="absolute"
      w="252px"
      h="224px"
      zIndex={2}
      left="-109px"
      top="-136px"
      filter="blur(94px)"
      background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

export const ContactGradientEllipse1 = () => {
  return (
    <Box
      opacity="0.8"
      pos="absolute"
      w="380px"
      h="338px"
      zIndex={2}
      left="347px"
      top="-196px"
      filter="blur(94px)"
      background="radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)"
    />
  );
};

export const EarningsHeroGradients = () => {
  return (
    <>
      <Box
        w="220px"
        h="196px"
        left="-70px"
        top="-100px"
        opacity={0.49}
        pos="absolute"
        zIndex={1}
        filter="blur(64px);"
        background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      />
      <Box
        w="220px"
        h="196px"
        left="93px"
        top="100px"
        opacity={0.49}
        pos="absolute"
        zIndex={1}
        filter="blur(64px);"
        background="radial-gradient(50% 50% at 50% 50%, rgba(72, 123, 253, 1) 10%, rgba(184, 50, 108, 0) 100%)"
      />
    </>
  );
};

export const HowToSignUpHeroGradient = () => {
  return (
    <Box
      w="967px"
      h="472px"
      left="-307px"
      top="-204px"
      opacity={0.49}
      background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      pos="absolute"
      zIndex={0}
    />
  );
};
