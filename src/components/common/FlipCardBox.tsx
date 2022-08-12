import { Box } from '@chakra-ui/react';
import * as React from 'react';

interface FlipCardBoxPropsI {
  isFlippable: boolean;
}
const FlipCardBox: React.FC<FlipCardBoxPropsI> = ({ isFlippable, children }) => {
  if (isFlippable) {
    return (
      <Box w="100%" mt="0 !important" position="relative" data-group>
        {children}
      </Box>
    );
  }

  return <Box>{children}</Box>;
};
export default FlipCardBox;
