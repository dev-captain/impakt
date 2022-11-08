import { Box, BoxProps, Text } from '@chakra-ui/react';
import React, { memo } from 'react';

type OfferCardProps = {
  tStyle?: string;
};

const OfferCard: React.FC<BoxProps & OfferCardProps> = ({ tStyle, children, ...props }) => {
  return (
    <Box
      backgroundColor="rgba(28, 28, 40, 0.65)"
      backdropFilter="blur(40px)"
      borderRadius="1em"
      border="1px solid rgba(255, 255, 255, 0.1)"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginStart="0px !important"
      h="84px"
      {...props}
    >
      {/* <Text color="rgba(255, 255, 255, 0.75)" textStyle="semibold20"> */}
      <Text color="rgba(255, 255, 255, 0.75)" textStyle={tStyle || 'semiBold20'}>
        {children}
      </Text>
    </Box>
  );
};
export default memo(OfferCard);
