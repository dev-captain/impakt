import { Box, Text } from '@chakra-ui/react';
import React, { memo } from 'react';

type Props = {
  bRadius?: string;
  h?: string;
  pTop?: string;
  pBottom?: string;
  children?: React.ReactNode;
  pLeft?: string;
  bdFilter?: string;
  bgColor?: string;
};

const OfferCard = ({
  bdFilter = 'blur(40px)',
  bRadius,
  h,
  pLeft,
  pTop,
  pBottom,
  children,
  bgColor = 'rgba(28, 28, 40, 0.65)',
}: Props) => {
  return (
    <Box
      backgroundColor={bgColor}
      backdropFilter={bdFilter}
      borderRadius={bRadius}
      border="1px solid rgba(255, 255, 255, 0.1)"
      height={h}
      paddingTop={pTop}
      paddingLeft={{ base: pLeft, md: '0' }}
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
