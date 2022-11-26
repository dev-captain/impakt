import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

interface LandingLinePropsI {
  dir: 'h' | 'v';
}
const LandingLine: React.FC<LandingLinePropsI & BoxProps> = ({ dir, ...props }) => {
  return (
    <Box
      height={{ md: dir === 'h' ? '1px' : '112px', base: '1px' }}
      background="#000"
      width={{ md: dir === 'h' ? '152px' : '1px', base: dir === 'h' ? '152px' : '112px' }}
      margin="24px auto"
      {...props}
    />
  );
};
export default LandingLine;
