import { Box } from '@chakra-ui/react';

export const GradientEllipse = () => {
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

const GradientEllipse1 = ({
  isOrange,
  secondX = '792px',
  secondY = '338px',
  secondOpacity = '0.11',
}: {
  isOrange?: boolean;
  secondX?: string;
  secondY?: string;
  secondOpacity?: string;
}) => {
  return (
    <Box
      pos="absolute"
      width="508px"
      height="176px"
      left={secondX}
      top={secondY}
      zIndex={0}
      opacity={secondOpacity}
      filter="blur(94px)"
      bg={
        isOrange
          ? 'radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)'
          : 'radial-gradient(50% 50% at 50% 50%, #487BFD 58.11%, #00B2FF 100%)'
      }
    />
  );
};

export default ({
  isOrange,
  secondX,
  secondY,
  secondOpacity,
}: {
  isOrange?: boolean;
  secondX?: string;
  secondY?: string;
  secondOpacity?: string;
}) => {
  return (
    <Box d={{ md: 'flex', base: 'none' }}>
      <GradientEllipse />
      <GradientEllipse1
        secondOpacity={secondOpacity}
        secondX={secondX}
        secondY={secondY}
        isOrange={isOrange}
      />
    </Box>
  );
};
