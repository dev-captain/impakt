import { Box, Text } from '@chakra-ui/react';
import React, { memo } from 'react';

type Props = {
  bRadius?: string;
  h?: string;
  pTop?: string;
  pBottom?: string;
  children?: React.ReactNode;
  bgcolor?: string;
  p?: string;
  justifyC?: string;
  tStyle?: string;
};

const OfferCard = ({
  bRadius,
  h,
  pTop,
  pBottom,
  children,
  bgcolor,
  p,
  justifyC,
  tStyle,
}: Props) => {
  return (
    <Box
      backgroundColor={bgcolor}
      backdropFilter=" blur(40px)"
      borderRadius={bRadius}
      border="1px solid rgba(255, 255, 255, 0.2)"
      height={h}
      paddingTop={pTop}
      paddingBottom={pBottom}
      padding={p}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent={justifyC}
      marginStart="0px !important"
    >
      {/* <Text color="rgba(255, 255, 255, 0.75)" textStyle="semibold20"> */}
      <Text color="rgba(255, 255, 255, 0.75)" textStyle={tStyle}>
        {children}
      </Text>
    </Box>
  );
};
export default memo(OfferCard);
