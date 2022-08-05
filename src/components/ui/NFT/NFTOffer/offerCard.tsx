import { Box, Text } from '@chakra-ui/react';
import React, { memo } from 'react';

type Props = {
  bRadius?: string;
  h?: string;
  pTop?: string;
  pBottom?: string;
  children?: React.ReactNode;
};

const OfferCard = ({ bRadius, h, pTop, pBottom, children }: Props) => {
  return (
    <Box
      backgroundColor="rgba(28, 28, 40, 0.65)"
      backdropFilter=" blur(40px)"
      borderRadius={bRadius}
      border="1px solid rgba(255, 255, 255, 0.2)"
      height={h}
      paddingTop={pTop}
      paddingBottom={pBottom}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginStart="0px !important"
    >
      <Text color="rgba(255, 255, 255, 0.75)" textStyle="semibold20">
        {children}
      </Text>
    </Box>
  );
};
export default memo(OfferCard);
