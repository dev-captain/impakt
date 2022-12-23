import { Box } from '@chakra-ui/react';
import { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import SoundsButton from '../../HeroVideoSection/SoundsButton';

const Source = styled.source``;

const MyBodyVideo = () => {
  const videoRef = useRef<null | (HTMLVideoElement & HTMLDivElement)>(null);
  const [showButton, setShowButton] = useState(false);
  const [sound, setSound] = useState(true);
  const handleMute = () => {
    setSound(!sound);
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };
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
      position="relative"
      onClick={handleMute}
      onMouseLeave={() => setShowButton(false)}
      onMouseOver={() => setShowButton(true)}
    >
      <Box
        objectFit="cover"
        as="video"
        ref={videoRef}
        top="0"
        left="0"
        w="100%"
        maxHeight="500px"
        maxWidth="1000px"
        height="100%"
        borderRadius="20px"
        autoPlay
        loop
        muted
        playsInline
        boxShadow="dark"
      >
        <Source
          src="https://d3mgxbfgxk1n2v.cloudfront.net/landing-page/Vsport+Website+video+v1.3.mp4"
          type="video/mp4"
        />
      </Box>

      {showButton && (
        <Box
          id="hero-video-content-box"
          zIndex="20"
          position="absolute"
          top={{ base: '36%', md: '50%' }}
          left="50%"
          px="1em"
          w="full"
          transform="translate(-50%,-50%)"
        >
          <SoundsButton onClick={() => null} isOn={!sound} />
        </Box>
      )}
    </Box>
    // </Box>
  );
};

export default memo(MyBodyVideo);
