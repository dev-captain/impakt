import { Box, Text } from '@chakra-ui/react';
import { memo } from 'react';
import styled from 'styled-components';

import { Videos } from '../../../../../data';

const Source = styled.source``;

const MyBodyVideo = () => {
  // const [showPlayButton, setShowPlayButton] = React.useState(false);
  // const [isVideoPaused, setIsVideoPaused] = React.useState(false);
  // const videoRef = useRef<null | (HTMLDivElement & HTMLVideoElement)>(null);
  // const stopStartToggle = () => {
  //   if (!videoRef.current) return;
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     setIsVideoPaused(false);
  //   } else {
  //     videoRef.current.pause();
  //     setIsVideoPaused(true);
  //   }
  // };

  return (
    // <Box
    //   position="relative"
    //   // onClick={stopStartToggle}
    //   // onMouseLeave={() => setShowPlayButton(false)}
    //   // onMouseOver={() => setShowPlayButton(true)}
    // >
    //   <Box
    //     zIndex={99999}
    //     // opacity={showPlayButton ? '1' : '0'}
    //     top="50%"
    //     left="50%"
    //     transform="translate(-50%,-50%)"
    //     transition="all .2s linear"
    //     position="absolute"
    //   >
    //     {isVideoPaused ? <I.WhitePlay /> : <I.StopIcon />}
    //   </Box>
    <Box
      objectFit="cover"
      as="video"
      // ref={videoRef}
      top="0"
      left="0"
      w="100%"
      maxHeight="500px"
      maxWidth="1000px"
      height="100%"
      borderRadius="20px"
      filter="contrast(120%) brightness(120%)"
      autoPlay
      loop
      muted
      playsInline
    >
      <Source src={Videos.heroVideo} type="video/mp4" />
    </Box>
    // </Box>
  );
};

export default memo(MyBodyVideo);
