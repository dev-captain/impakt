import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

import StarsVideo from './StarsVideo';

const MirrorAndStarsVideo = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box id="mirror" ref={ref} {...props}>
      {props.children}
      <StarsVideo />
      <div
        className="shadow"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          boxShadow: 'inset 0px 0px 20px rgba(232, 219, 202, 0.5)',
          top: '0',
          left: '0',
          borderRadius: '200px 200px 0px 0px',
        }}
      />
    </Box>
  );
});

export default MirrorAndStarsVideo;
